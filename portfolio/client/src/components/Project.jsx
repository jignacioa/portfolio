import React from 'react';
import convergence from '../static/convergence.png';
import mictlan from '../static/mictlan.png'
import promanager from '../static/promanager.png'
import '../stylesheet/stylesheet.css';

export default function Project(props) {
    let project;
    if(props.projectTitle === "Convergence") {
        project = (
            <div className="project-div">
            <img className="project-img" src={convergence}/>
            <div>
                <h3>{props.projectTitle}</h3>
                <p className="project-description">Scalable real-time chat application that allows multiple users to interact in the chat room</p>
            </div>
        </div>  
        )
    } else if(props.projectTitle === "Mictlan") {
        project = (
            <div className="project-div">
                <img className="project-img" src={mictlan}/>
            <div>
                <h3>{props.projectTitle}</h3>
                <p className="project-description">E-commerce application for Magic the Gathering cards. Allows image upload capability and has post-specific comment
                    section where buyers can make inquiries about the product. 
                </p>
            </div>    
        </div>
        )
    } else if(props.projectTitle === "ProManager") {
        project = (
            <div className="project-div">
                <img className="project-img" src={promanager}/>
                <div>
                    <h3>{props.projectTitle}</h3>
                    <p className="project-description">Project manager application that allows users to create projects, tasks and assign registered members 
                    to projects and tasks.
                    </p>
                </div>
            </div>
        )
    }
    return (
        <>
            <div>
            {project}
            </div>
        </>
    )
}