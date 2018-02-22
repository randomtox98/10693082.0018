
import React from 'react';
import {Link} from 'react-router';


import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import Modal from './Modal.js';
import CommentForm from './CommentForm.js';
import {HTTP_SERVER_PORT_IMAGES} from '../server/constants'


class Comment extends React.Component{
    render(){
        const d = new Date(this.props.com.date);
        return(
        <div className='comment'>
            <p id="whathesaid">{this.props.com.text}</p>
            <p id="whenhesaid">{d.getFullYear()} , {d.getMonth()+1},{d.getDate()}</p>
            <p id="whosaid">{this.props.com.user.email}</p>
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
            activity: void 0,
            isOpen:false,
            isLoading:true

        };
        this.toggle=this.toggle.bind(this);
    };
    componentDidMount() {
        return fetch('/api/activity/'+this.props.params.id)                       // Ask the route /cities to the server
            .then(res => res.json())                       // Retrieve the objects  in json
            .then(data => this.setState({isLoading: false, activity: data}))   // Modify the state accordingly
            .catch(err => console.log(err));
    }
    toggle(){
        this.setState({isOpen: !this.state.isOpen});
    }
    render() {
        let activity =  this.state.activity;
        if(this.state.isLoading){
                return ( <div>loading</div>)
        }
        let sd ="";
        let ed="";
            if(activity.nature==="event"){
                    const yearS = new Date(activity.dateStart).getFullYear();
                    const monthS = new Date(activity.dateStart).getMonth()+1;
                    const dayS = new Date(activity.dateStart).getDate();
                    const yearE = new Date(activity.dateEnd).getFullYear();
                    const monthE = new Date(activity.dateEnd).getMonth()+1;
                    const dayE = new Date(activity.dateEnd).getDate();
                    sd="Start Date : " + yearS + " - "+monthS +" - "+dayS;
                    ed="End Date : " + yearE + " - "+monthE +" - "+dayE;
                }
                return (
                    <div className='activity'>
                        {this.state.activity.pictures.map((a,i) => <Pic pic={a}/> )}
                        <p>{sd}</p>
                        <p>{ed}</p>
                        <p>{this.state.activity.name}</p>
                        <p>{this.state.activity.description}</p>
                    <div id="containercomment">
                        {this.state.activity.comments.map((a,i) => <Comment com={a}/> )}
                    </div>
                        <p><a className="buttoncomment" id="open" onClick={(e)=>this.toggle(e)}>Want to add any comment ?</a> </p>
                        <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
                                <CommentForm type="activities" parent={this.state.activity._id}/>
                        </Modal>
                    </div>

                )

     }
}
