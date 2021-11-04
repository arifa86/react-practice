import React from "react";
import ApprovalCard from "./ApprovalCard";
import CommentDetails from "./CommentDetails";
import faker from "faker";
import Message from "./Message";

const CommentBase = () => {
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
}

export default CommentBase;