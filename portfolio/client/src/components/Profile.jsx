import React from 'react';
import '../stylesheet/stylesheet.css'

export default function Profile() {
    return (
        <div className = "Profile">
            <div id = "profile-content">
            <div id="div-about-left">
                    <h1 id="name-header">Jesus Aguilar</h1>
                    <h3 id="developer-header">Full-Stack Web Developer</h3>
                </div>
                <div id="div-about-right">
                    <p id="p-about">San Francisco Bay Area <span className ="about-span"> software developer </span> and <span className ="about-span"> scientist </span>
                        that enjoys learning and experimenting incredibly motivating. I am a <span className ="about-span">creator</span> with
                        a passion for building full-stack applications. 
                    </p >
                </div>
            </div>
        </div>
    )
}

