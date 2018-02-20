import React from 'react';
import {Link} from 'react-router';

import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

import {HTTP_SERVER_PORT_IMAGES} from '../server/constants';

let idx = 0;

/*
class Card extends React.Component {
    render() {
        return (
            <div className='card'>
                <span className="classDel" onClick={(e) => this.props.delete(this.props.person.id)}>&times;</span>
                <img src={this.props.city.picture} alt="Avatar"/>
                <div>
                    <h4><b>{this.props.city.name} {this.props.city.location} <small>{this.props.city.id}</small></b></h4>
                    <p>{this.props.person.score} Points</p>
                    <div className="colored" style={{backgroundColor: this.props.city.color}}></div>
                </div>
            </div>
        )
    }
}


class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [
                {
                    id: idx++,
                    name: "Rennes",
                    location: "France",
                    picture: 'imgs/city1.jpg'
                },
                {
                    id: idx++,
                    name: "Cork",
                    location: "Ireland",
                    picture: 'imgs/city2.jpg'
                },
                {
                    id: idx++,
                    name: "Poznan",
                    location: "Poland",
                    picture: 'imgs/city3.jpg'
                }
            ],
        };
    }

    render() {

        const tab = this.state.cities
            .filter(p => p.score > this.state.minScoreForDisplay)
            .map(p => <Card delete={this.deletePerson} key={p.id} person={p}/>)
        return (
            <div>
                <p>Min score:<input id="score" type="number" onChange={(e) => this.updateMinScoreForDisplay()}/></p>
                {tab}
                <p>Adding person: </p>
                <form>
                    <input type="text"/>
                </form>
            </div>
        )
    }
}
*/
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
        this.state = {
            cities: []
        }
        this.loadData();
    };


    loadData() {
        fetch('/cities')                       // Ask the route /cities to the server
            .then(res => res.json())                       // Retrieve the objects  in json
            .then(data => this.setState({cities: data}))   // Modify the state accordingly
            .catch(err => console.log(err));               // Bad news: an error!
    }


    render() {
        const tab = this.state.cities.map(p => <CityLaconic cities={p}/>)
        return (
            <div>
                {tab}
                <h1>My Cities... The places to be!test</h1>
                <p> You can find in this website many cities with beautiful places, events (festivals, concerts and so
                    on).
                    Please, join us, and you will have the possibilities to participate to this new social network.
                    <br/>

                    Enjoy!!
                </p>
            </div>
        );
    }
}






