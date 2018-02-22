import React from 'react';
import {Link} from 'react-router';
import Modal from './Modal.js';

class LogForm extends React.Component{
    render(){
        return(
            <div id="logform">
                    <form>
                    <label>Username</label>
                    <input type="text"/>
                    <label>Password</label>
                    <input type="password"/>
                    <button onClick={(e)=> this.props.toggle(e)}>close</button>
                    </form>
            </div>
        )
    }
}

export default class Header extends React.Component{
     constructor(props){
         super(props);
         this.state={isOpen:false
        };
         this.toggle=this.toggle.bind(this);
     };
    toggle(){
        this.setState({isOpen: !this.state.isOpen});
    }
    render(){
        return(
            <header>
            <nav className="navigation">
                <div className="menuobjlogo"> <a href="/"><p><img src="/images/siteres/logo.png" width="250"/></p></a></div>
                <ul>
                    <li className="menuobj"><a className="bordermenu" href="/">Add a city</a></li>
                    <li className="form"><form method="post" action="traitement.php">
                        <input type="text" placeholder="Search"/>
                        <input type="submit" value="Go" />
                    </form></li>
                    <li className="menuobj"><a className="bordermenu" id="signin">Sign In</a></li>
                    <li className="menuobj" id="backgroundbutton"><a className="bordermenu" onClick={(e)=>this.toggle(e)}>Log In</a><Modal id="modlog" isOpen={this.state.isOpen} toggle={this.toggle}>
                                <LogForm/>
                        </Modal></li>
                </ul>
                <div id="bar"><div id="filtre"></div></div>
            </nav>
 
        </header>
        )
    }
}