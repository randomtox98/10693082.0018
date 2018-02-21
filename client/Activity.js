
import React from 'react';
import {Link} from 'react-router';

import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';

import {HTTP_SERVER_PORT_IMAGES} from '../server/constants'


class Comment extends React.Component{
    render(){
        const d = new Date(this.props.com.date);
        console.log(d.getFullYear(), d.getDate());
        return(
        <div className='comment'>
            <p>{this.props.com.text}</p>
            <p>{d.getFullYear()} , {d.getMonth()+1},{d.getDate()}</p>
        </div>    
        )
    }
}

class Pic extends React.Component{
    render(){
        return(
            <div className='pic'>
            <img src= {this.props.pic} width="150px" height="150px"/>
            </div>
        )
    }
}    

export default class Activity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activity: void 0
        }
    };

    loadData() {

        fetch('/api/activity/'+this.props.params.id)                       // Ask the route /cities to the server
            .then(res => res.json())                       // Retrieve the objects  in json
            .then(data => this.setState({activity: data}))   // Modify the state accordingly
            .catch(err => console.log(err));               // Bad news: an error!

    }

    componentDidMount() {
        this.loadData();
    }


    render() {
        let activity =  this.state.activity;
        if(activity == undefined){
            return ( <div>loading</div>)
        }
        else {
            return (
                <div className='activity'>
                    {this.state.activity.pictures.map((a,i) => <Pic pic={a}/> )}
                    <p>{this.state.activity.name}</p>
                    <p>{this.state.activity.description}</p>
                    {this.state.activity.comments.map((a,i) => <Comment com={a}/> )}
                    
                    
                </div>

            )
        }
    }
}

