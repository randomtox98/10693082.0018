import React from 'react';
import {Link} from 'react-router';

export default class Modal extends React.Component{
     constructor(props){
         super(props);
     }
     render(){
         if(this.props.isOpen==false)
             return null;
         return(<div id="modal">
                    <div>
                        {this.props.children}
                    </div>
                </div>
               );
     }
 }