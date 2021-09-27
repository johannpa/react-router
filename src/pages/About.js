import React from 'react';
import { useLocation } from "react-router-dom";

function About() {
    let location = useLocation();

    return (
        <div>
            <h1>About</h1>
            <p>{location.state.postTitle}</p>
        </div>
    );
}

export default About;