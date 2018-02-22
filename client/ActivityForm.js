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
      comments:[],
      pictures:this.state.pictures,
      description:data.get('description')
    }
    console.log(activity);
    fetch('/api/activities', {
      method: 'POST',
      headers: {
       'Accept': 'application/json, text/plain, */*',
       'Content-Type': 'application/json'
     },
      body: ("json", JSON.stringify( activity )),
    }).then(data => alert("Sucess"))
    .catch(error => console.error(error));

}
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Activity name</label>
        <input id="name" name="name" type="text" />

        <textarea id="description" name="description" />

        <select id="nature" name="nature">
         <option value="place">Place</option>
         <option value="event">Event</option>
        </select>
        <input id="startDate" name="startDate" type="date" />
        <input id="endDate" name="endDate" type="date" />
        <ImagesUploader
        url={"http://localhost:9090/images"}
        optimisticPreviews={true}
        multiple={true}
        onLoadEnd={(err, result) =>{
            if (err)
                console.error(err);
            else
                this.setState({pictures:[...this.state.pictures, result]})
        }}
        label="Attach image"/>
        <button>Add city</button>
      </form>
    );
  }
}
