import React from 'react';
import ReactDOM from 'react-dom';
import ImagesUploader from 'react-images-uploader';

export default class ActivityForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const activity = {
            cityId: this.props.cityId,
            name: data.get('name'),
            nature: data.get('nature'),
            startDate: data.get('startDate'),
            endDate: data.get('endDate'),
            comments: [],
            pictures: this.state.pictures,
            description: data.get('description')
        }
        fetch('/api/activities', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: ("json", JSON.stringify(activity)),
        }).then(data => alert("Sucess")).then(this.props.callback())
            .catch(error => console.error(error));

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Fill the form to add your activity !</h2>
                <label htmlFor="name">Activity name</label><br/>
                <input id="name" name="name" type="text"/><br/>
                <label htmlFor="description">Describe the event here :</label><br/>
                <textarea id="description" name="description"/><br/>

                <label htmlFor="nature">What kind of activity is it ?</label><br/>
                <select id="nature" name="nature">
                    <option value="place">Place</option>
                    <option value="event">Event</option>
                </select><br/><br/><br/>
                <label htmlFor="startDate">Starting Date</label><br/>
                <input id="startDate" name="startDate" type="date"/><br/>
                <label htmlFor="endDate">Ending Date</label><br/>
                <input id="endDate" name="endDate" type="date"/><br/>
                <label htmlFor="imageuploader">Add a picture</label><br/>
                <ImagesUploader
                    id="imageuploader"
                    url={"http://localhost:9090/images"}
                    optimisticPreviews={true}
                    multiple={true}
                    onLoadEnd={(err, result) => {
                        if (err)
                            console.error(err);
                        else
                            this.setState({pictures: [...this.state.pictures, result]})
                    }}
                    />
                <button>Add an activity</button>
            </form>
        );
    }
}
