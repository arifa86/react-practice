// Import the react and react dom libraries
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetails from "./components/CommentDetails";
import ApprovalCard from "./components/ApprovalCard";
import Message from "./components/Message";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {lat: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude})
            },
            (err) => {
                this.setState({errorMessage: err.message})
            }
        );
    }

    // Required
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div className="ui container">Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return (
                <div className="ui container">
                    Latitude: {this.state.lat}
                </div>
            );
        }
        return <div className="ui container">Loading</div>
    }
}

// Take the react component and show it on the screen
ReactDom.render(
    <App/>,
    document.querySelector('#root')
);