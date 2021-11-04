// Import the react and react dom libraries
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetails from "./components/CommentDetails";
import ApprovalCard from "./components/ApprovalCard";
import Message from "./components/Message";


function getTime() {
    return (new Date()).toLocaleTimeString();
};

// Create a react component
const App = () => {

    return (
        <div className="ui container">
            <h2>Comments</h2>
            <div className="ui container comments">

                <ApprovalCard>
                    <CommentDetails author={faker.name.firstName() + " " + faker.name.lastName()}
                                    postedOn={(new Date()).toLocaleTimeString()}
                                    avatar={faker.image.avatar()}
                                    content={faker.lorem.sentences()}/>
                </ApprovalCard>

                <ApprovalCard>
                    <CommentDetails author={faker.name.firstName() + " " + faker.name.lastName()}
                                    postedOn={(new Date()).toLocaleTimeString()}
                                    avatar={faker.image.avatar()}
                                    content={faker.lorem.sentences()}/>
                </ApprovalCard>

                <ApprovalCard>
                    <CommentDetails author={faker.name.firstName() + " " + faker.name.lastName()}
                                    postedOn={(new Date()).toLocaleTimeString()}
                                    avatar={faker.image.avatar()}
                                    content={faker.lorem.sentences()}/>
                </ApprovalCard>

                <Message header="Attention!">
                    We have just changed our service agreements please see the documentation for details.
                </Message>

            </div>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDom.render(
    <App/>,
    document.querySelector('#root')
);