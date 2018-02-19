import React from 'react';
import {Link} from 'react-router';

import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

import {HTTP_SERVER_PORT_IMAGES} from '../server/constants';

let idx=0;



class CityLaconic extends React.Component {
    render() {
        return (
            <div className='card'>
                <img src={this.props.cities.picture}/>
                <p>{this.props.cities.name}</p>
            </div>
        )
    }
}

export default class Home extends React.Component {
    constructor(props) {
        super(props);

    }
    loadData(){
        fetch('/cities')                       // Ask the route /cities to the server
            .then(res => res.json())                       // Retrieve the objects  in json
            .then(data => this.setState({cities: data}))   // Modify the state accordingly
            .catch(err => console.log(err));               // Bad news: an error!
};

    render() {
        const tab = this.state.cities.map(p=> <CityLaconic cities={p}/>)
        return (
            <div>
                {tab}
                <h1>My Cities... The places to be!test</h1>
                <p> You can find in this website many cities with beautiful places, events (festivals, concerts and so on).
                    Please, join us, and you will have the possibilities to participate to this new social network. <br />
                    Enjoy!!
                </p>
            </div>
        );
    }
}






