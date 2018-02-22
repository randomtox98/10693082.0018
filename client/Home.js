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

class CarouselComponent extends React.Component {


    render() {
        return (
            <div className="slider">
                <div className="legend"></div>
                <div className="content">
                    <div className="content-txt">
                        <h1><Link to={`/city/${this.props.cities._id}`} activeClassName="active">{this.props.cities.name}</Link></h1>
                        <h2>{this.props.cities.description}</h2>
                    </div>
                </div>
                 <div className="images">
                     <img className="carim" src={this.props.cities.picture}/>
                </div>
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

    deletePerson(idPerson) {
        const tab = this.state.persons.filter(p => p.id != idPerson);
        const newState = {persons: tab}
        this.setState({persons:tab});
    }

    render() {
        const tab = this.state.cities.map(p => <CityLaconic cities={p}/>)
        const tab2 = this.state.cities.map(s => <CarouselComponent cities={s} />)
        return (
            /*<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">*/



            <div className="maincontent">
                <div id="sliderinside">
                    <div className="slides">
                    {tab2}
                    </div>
                </div>
                <div className="allcities">
                    {tab}
                </div>
                
            </div>
        );
    }
}
