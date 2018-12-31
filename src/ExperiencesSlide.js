import React from 'react';
import Parallax from 'react-springy-parallax';

import Office from './images/Office.jpeg';

import { imageStyles } from "./baseStyles";


const EducationHeading = {
    position: "fixed",
    left: "50%",
    top: "10%",
    color: "white",
};


export const ExperiencesSlideA = ({}) => (
    <Parallax.Layer offset={2} speed={1} >
        <h1 style={EducationHeading}>Experiences</h1>
        <img src={Office} style={imageStyles}/>
    </Parallax.Layer>
);


const styles = {
    fontFamily: 'Menlo-Regular, Menlo, monospace',
    fontSize: 14,
    lineHeight: '10px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexDirection: "column",
    color: "white",
};


export const ExperiencesSlideB = ({}) => (
    <Parallax.Layer
        offset={3}
        speed={-0.1}
        style={styles}>
    </Parallax.Layer>
);

