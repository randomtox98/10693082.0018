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
         this.state={isOpen1:false,
              isOpen2:false       
        };
         this.toggle1=this.toggle1.bind(this);
         this.toggle2=this.toggle2.bind(this);
     };
    toggle1(){
        this.setState({isOpen1: !this.state.isOpen1});
    }
    toggle2(){
        this.setState({isOpen2: !this.state.isOpen2});
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
                    <li className="menuobj"><a className="bordermenu" id="signin" onClick={(e)=>this.toggle1(e)}>Sign In</a></li>
                    <li className="menuobj" id="backgroundbutton"><a className="bordermenu" onClick={(e)=>this.toggle2(e)}>Log In</a></li>
                </ul>
                <div id="bar"><div id="filtre"></div></div>
                <div className="modallog"><Modal id="modlog" isOpen1={this.state.isOpen1} toggle1={this.toggle1}>
                                <SignForm/>
                </Modal>
                <Modal id="modsign" isOpen2={this.state.isOpen2} toggle2={this.toggle2}>
                                <LogForm/>
                </Modal></div>
            </nav>
            
        </header>
        )
    }
}