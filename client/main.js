import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Header from './Header.js';
import Home from './Home.js';
import City from './City.js';
import Activity from './Activity.js';
import Modal from './Modal.js';

ReactDOM.render(
    <div>
        <Header/>
        <Router history={hashHistory}>
            <Route path="/" component={Home}/>
            <Route path="/city/:id" component={City} />
            <Route path="/activity/:id" component={Activity} />
            <Route path="*" component={() => <p>Page Not Found</p>}/>
        </Router>
        <footer id="footer">
            <p id="copyright">AFTER18 © 2018. All rights Reserved.</p>
        </footer>
    </div>
    ,
    document.getElementById('root')
);
 
if (module.hot)
    module.hot.accept();

