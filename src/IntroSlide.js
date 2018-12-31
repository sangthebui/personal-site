import React from 'react';
import Parallax from 'react-springy-parallax';
import { imageStyles } from './baseStyles';
import Curtains from './images/Curtains.jpeg';


const introSlideAStyles = {
    backgroundColor: '#243B4A'
};


export const IntroSlideA = ({}) => (
    <Parallax.Layer offset={0} speed={1} style={introSlideAStyles} >
        <img src={Curtains} style={imageStyles}/>
    </Parallax.Layer>
);


const introSlideBStyles = {
    fontFamily: 'Menlo-Regular, Menlo, monospace',
    fontSize: 14,
    lineHeight: '10px',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexDirection: "column",
    color: "white",
};

export const IntroSlideB = ({name, about}) => (
    <Parallax.Layer
        offset={0}
        speed={0.5}
        style={introSlideBStyles}>
        <h1>{name}</h1>
        <h2>{about}</h2>
    </Parallax.Layer>
);