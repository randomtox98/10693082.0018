import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import Home from './Home.js';
import City from './City.js';
import Activity from './Activity.js';
import Modal from './Modal.js';

ReactDOM.render(
    <div>
        <header>
            <nav className="navigation">
                <ul>
                    <li className="menuobj"><a href="/"><p><img src="/images/siteres/logo.png" width="150"/></p></a></li>
 
                    <li className="menuobj"><a className="bordermenu" href="/">Add a city</a></li>
                    <li className="form"><form method="post" action="traitement.php">
                        <input type="text" placeholder="Search"/>
                        <input type="submit" value="Go" />
                    </form></li>
                    <li className="menuobj"><a className="bordermenu" id="signin" href="/">Sign In</a></li>
                    <li className="menuobj"><a className="bordermenu" id="backgroundbutton" href="/">Log In</a></li>
                </ul>
                <div><img id="bar" src="/images/siteres/bar.png"/></div>
            </nav>
 
        </header>
        <Router history={hashHistory}>
            <Route path="/" component={Home}/>
            <Route path="/city/:id" component={City} />
            <Route path="/activity/:id" component={Activity} />
            <Route path="*" component={() => <p>Page Not Found</p>}/>
        </Router>
        <footer> Footer</footer>
    </div>
    ,
    document.getElementById('root')
);
 
if (module.hot)
    module.hot.accept();

