import React from 'react';
import ReactDOM from 'react-dom';
import ImagesUploader from 'react-images-uploader';

export default class CityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    const city = {
      name: data.get('name'),
      coordinates: {
          long: data.get('long'),
          lat: data.get('lat')
      },
      activities:[],
      picture:this.state.picture,
      description:data.get('description')
    }
    fetch('/api/cities', {
      method: 'POST',
      headers: {
       'Accept': 'application/json, text/plain, */*',
       'Content-Type': 'application/json'
     },
      body: ("json", JSON.stringify( city )),
    }).then(this.props.callback())
    .catch(error => console.error(error));

}
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <h2>Fill the form to add your city !</h2>
            <div className="addformpart">
                <label htmlFor="name">City name</label><br/>
                <input id="name" name="name" type="text"/><br/>

                <label htmlFor="long">Longitude</label><br/>
                <input id="long" name="long" type="text"/><br/>

                <label htmlFor="lat">Latitude</label><br/>
                <input id="lat" name="lat" type="text"/><br/><br/>
            </div>

            <div className="addformpart">
                <label htmlFor="description">Describe the city you want to add here :</label><br/>
                <textarea id="description" name="description"/><br/><br/></div>

            <div className="addformpart">
                <label htmlFor="imageuploader">Add a picture</label>
                <ImagesUploader
                    url={"http://localhost:9090/images"}
                    optimisticPreviews={true}
                    multiple={false}
                    onLoadEnd={(err, result) => {
                        if (err)
                            console.error(err);
                        else
                            this.setState({picture: result})
                    }}/>

                <button>Add city</button></div>
        </form>
    );
  }
}
