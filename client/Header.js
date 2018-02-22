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
                    <button onClick={(e)=> this.props.toggle(e)}>Log In</button>
                    </form>
            </div>
        )
    }
}

class SignForm extends React.Component{
    render(){
        return(
            <div id="signform">
                    <form>
                    <label>Username</label>
                    <input type="text"/>
                    <label>Email</label>
                    <input type="text"/>
                    <label>Password</label>
                    <input type="password"/>
                    <button onClick={(e)=> this.props.toggle(e)}>Sign In</button>
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
        this.setState({isOpen: !this.state.isOpen});
    }
    render(){
        return(
            <header>
            <nav className="navigation">
                <div className="menuobjlogo"> <a href="/"><p><img src="/images/siteres/logo.png" width="250"/></p></a></div>
                <ul>
                    <li className="form"><form method="post" action="traitement.php">
                        <input type="text" placeholder="Search"/>
                        <input type="submit" value="Go" />
                    </form></li>
                    <li className="menuobj"><a className="bordermenu" id="signin" onClick={(e)=>this.toggle(e)}>Sign In</a></li>
                    <li className="menuobj" id="backgroundbutton"><a className="bordermenu" onClick={(e)=>this.toggle(e)}>Log In</a></li>
                </ul>
                <div id="bar"><div id="filtre"></div></div>
                <Modal id="modlog" isOpen={this.state.isOpen} toggle={this.toggle}>
                                <SignForm/>
                </Modal>
                <Modal id="modsign" isOpen={this.state.isOpen} toggle={this.toggle}>
                                <LogForm/>
                </Modal>
            </nav>
            
        </header>
        )
    }
}