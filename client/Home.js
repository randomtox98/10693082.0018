import React from 'react';
import {Link} from 'react-router';

import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

import {HTTP_SERVER_PORT_IMAGES} from '../server/constants';

let s = 1;

class CityLaconic extends React.Component {


    render() {
        return (
            <div className='card'>
                <img src={this.props.cities.picture}/>
                <Link to={`/city/${this.props.cities._id}`} activeClassName="active">{this.props.cities.name}</Link>
            </div>
        )
    }
}

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: []
        }

    };


    loadData() {
        fetch('/api/cities')                       // Ask the route /cities to the server
            .then(res => res.json())                       // Retrieve the objects  in json
            .then(data => this.setState({cities: data}))   // Modify the state accordingly
            .catch(err => console.log(err));               // Bad news: an error!
    }


    componentDidMount() {
        this.loadData();
    }

    render() {
        const tab = this.state.cities.map(p => <CityLaconic cities={p}/>)
        return (
            <div className="content">
                <div className="allcities">
                    {tab}
                </div>
            </div>
        );
    }
}
