/**
 * Created by Wolf on 2017/4/17.
 */
import React, {Component} from 'react';
import {
    Route,
    Redirect
} from 'react-router-dom'

//私有路由
export default class PrivateRoute extends Component {
    render() {
        const Component = this.props.routeComponent;
        return (
            <Route {...this.props} render={props => (
               window.Storage.getParse('currentUser') != null ? (
                        <Component {...props}/>
                    ) : (
                        <Redirect to={{
                            pathname: '/',
                            state: { from: props.location }
                        }}/>
                    )
            )}/>
        );
    }
}