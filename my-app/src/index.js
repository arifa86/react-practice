import React from 'react';
import ReactDom from 'react-dom';
import "semantic-ui-css/semantic.min.css"
import App from "./components/App";
import SeasonDisplay from "./components/SeasonDisplay";
import Spinner from "./components/Spinner";



// Take the react component and show it on the screen
ReactDom.render(
    <App/>,
    document.querySelector('#root')
);