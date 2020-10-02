import React from 'react';

export default function Project(props) {
    let project;
    if(props.projectTitle === "ProManager") {
        project = (
            <div>
                <h3>{props.projectTitle}</h3>
                <p>Project manager application that allows users to create projects, tasks and assign registered members 
                   to projects and tasks.
                </p>
            </div>
        )
    } else if(props.projectTitle === "Mictlan") {
        project = (
            <div>
            <h3>{props.projectTitle}</h3>
            <p>E-commerce application for Magic the Gathering cards. Allows image upload capability and has post-specific comment
                section where buyers can make inquiries about the product. 
            </p>
        </div>
        )
    } else if(props.projectTitle === "Convergence") {
        project = (
            <div>
            <h3>{props.projectTitle}</h3>
            <p>Scalable real-time chat application that allows multiple users to interact in the chat room</p>
        </div> 
        )
    }
    return (
        <div>
            {project}
        </div>
    )
}