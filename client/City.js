import React from 'react';
import {Link} from 'react-router';

import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

import {HTTP_SERVER_PORT_IMAGES} from '../server/constants'

class Activ extends React.Component{
    render(){
        return(
        <div className='activities'>
            <img src= {this.props.activity.picture} width="250px" />
            <p><Link to={`/activity/${this.props.activity._id}`}>{this.props.activity.name}</Link></p>
        </div>
        )
    }
    
} 
 

export default class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: void 0
        }
    };

    loadData() {

        fetch('/api/city/'+this.props.params.id)                       // Ask the route /cities to the server
            .then(res => res.json())                       // Retrieve the objects  in json
            .then(data => this.setState({city: data}))   // Modify the state accordingly
            .catch(err => console.log(err));               // Bad news: an error!

    }

    componentDidMount() {
        this.loadData();
    }


    render() {
        let city =  this.state.city;
        if(city == undefined){
            return ( <div>loading</div>)
        }
        else {
            return (
                <div className='city'>
                    <h1>{this.state.city.name}</h1>
                    <p><img src={this.state.city.picture}/></p>
                    <div className="citydesc"><p>{this.state.city.description}</p></div>
                    <div className="cityplaces"><h1> Places </h1><div className="eventtoplace">
                        {this.state.city.activities.filter(a => a.nature=='place').map((a,i) => <Activ activity={a}/> )}</div></div>
                    <div className="cityevents"><h1> Events </h1><div className="eventtoplace">
                        {this.state.city.activities.filter(a => a.nature=='event').map((a,i) => <Activ activity={a}/> )}</div></div>
                </div>

            )
        }
    }
}