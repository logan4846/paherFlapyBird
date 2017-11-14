import React, { Component } from 'react';
import {
    Test,
    TestCss3,
    TestCss4,
    DefaultTemplate,
    Running
} from './scripts/index';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import 'animate.css';
import './stylesheets/index.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div id="App">
                    <Switch>
                        <Route exact path="/" component={DefaultTemplate}/>
                        <Route exact path="/running" component={Running}/>
                        <Route children={(props) => (
                        <Switch>
                             <Route exact path="/test" component={Test}/>
                             <Route exact path="/testCss3" component={TestCss3}/>
                             <Route exact path="/testCss4" component={TestCss4}/>
                             </Switch>
                    )}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
