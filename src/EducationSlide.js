import React from 'react';
import Parallax from 'react-springy-parallax';


import UNSWLectureRoom from './images/UNSWLectureRoom.jpg';


const EducationHeading = {
    position: "fixed",
    left: "50%",
    top: "10%",
    color: "white",
};

const SchoolTextStyles = {
    position: "fixed",
    top: "30%",
    left: "25%",
    color: "#f0f2f7",
    fontWeight: "bolder",
    fontSize: "x-large",
    textShadow: "0px 0px 4px #0d348c",
    border: "solid #e6af64",
    borderRadius: "3px",
    backgroundColor: "tan",
    padding: "12px",
};

export const EducationSlideA = ({education}) => {
    const schoolsView = education.map(eachSchool => {
        const { school_name, year, degree } = eachSchool;
        return (
            <>
            <h6>{school_name}  {year}</h6>
            <h6>{degree}</h6>
            </>
        )
    });

    return (
        <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} >
            <h1 style={EducationHeading}>Education</h1>
            <section style={SchoolTextStyles}>{schoolsView}</section>
            <img src={UNSWLectureRoom} style={{width: "100%", height: "100%"}}/>
        </Parallax.Layer>
    )
};

const LectureRoomStyles = {
    color: "white",

};

export const EducationSlideB = () => (
    <Parallax.Layer
        offset={1}
        speed={-0.1}
        style={LectureRoomStyles}>
    </Parallax.Layer>
);
