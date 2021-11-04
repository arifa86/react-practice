import React from 'react';
import ReactDom from 'react-dom';
import "semantic-ui-css/semantic.min.css"
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";

class App extends React.Component {
    state = {lat: null, errorMessage: ''};

    //Data loading...
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
    }

    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div className="ui container">Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return (
                <SeasonDisplay lat={this.state.lat}/>
            );
        }
        return <Spinner message="Please accept location request"/>
    }

    // Required
    render() {
      return (
          <div className="">
              {this.renderContent()}
          </div>
      );
    }
}

// Take the react component and show it on the screen
ReactDom.render(
    <App/>,
    document.querySelector('#root')
);