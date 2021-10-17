import React, { Component } from 'react';
import NavBar from './navBar';

class NotFound extends React.Component {
    render() { 
        return <div>
            <NavBar/>
            <h1>Not Found 404</h1>
        </div>;
    }
}
 
export default NotFound;