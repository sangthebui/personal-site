import React from 'react';
import Parallax from 'react-springy-parallax';

import Skills from './images/Skills.jpeg';


const EducationHeading = {
    position: "fixed",
    left: "50%",
    top: "10%",
    color: "white",
};

export const SkillsSlideA = () => (
    <Parallax.Layer offset={3} speed={1} >
        <h1 style={EducationHeading}>Skills</h1>
        <img src={Skills} style={{width: "100%", height: "100%"}}/>
    </Parallax.Layer>
);

const LastPageStyles = {
    fontFamily: 'Menlo-Regular, Menlo, monospace',
    fontSize: 14,
    lineHeight: '10px',
    color: 'white',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexDirection: "column",
};


const LastPageParagraph = {
    width: "600px",
    lineHeight: "30px",
    textIndent: "40px",
};

export const SkillsSlideB = ({name, phone, email, summary}) => (
    <Parallax.Layer
        offset={4}
        speed={0.5}
        style={LastPageStyles}>

        <p >{name}</p>
        <p>{phone}</p>
        <p >{email}</p>
        <p style={LastPageParagraph}>{summary}</p>
    </Parallax.Layer>
);

