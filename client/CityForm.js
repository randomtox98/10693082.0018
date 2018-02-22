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
    console.log(city);
    fetch('/api/cities', {
      method: 'POST',
      headers: {
       'Accept': 'application/json, text/plain, */*',
       'Content-Type': 'application/json'
     },
      body: ("json", JSON.stringify( city )),
    }).then(data => alert("Sucess"))
    .catch(error => console.error(error));

}
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">City name</label>
        <input id="name" name="name" type="text" />

        <label htmlFor="long">Longitude</label>
        <input id="long" name="long" type="text" />

        <label htmlFor="lat">Latitude</label>
        <input id="lat" name="lat" type="text" />

        <textarea id="description" name="description" />
        <ImagesUploader
        url={"http://localhost:9090/images"}
        optimisticPreviews={true}
        multiple={false}
        onLoadEnd={(err, result) =>{
            if (err)
                console.error(err);
            else
                this.setState({picture: result})
        }}
        label="Attach image"/>
        <button>Add city</button>
      </form>
    );
  }
}
