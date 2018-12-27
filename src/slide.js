import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';
import Resume from './resume.json';


import Background from './images/Zhangjiajie.jpg';

import Curtains from './images/Curtains.jpeg';
import UNSWLectureRoom from './images/UNSWLectureRoom.jpg';
import Office from './images/Office.jpeg';
import Skills from './images/Skills.jpeg';




class Slide extends Component {
    render() {
        const styles = {
            fontFamily: 'Menlo-Regular, Menlo, monospace',
            fontSize: 14,
            lineHeight: '10px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: "column"
        };

        const LectureRoomStyles = {
            color: "white",

        };

        const EducationHeading = {
            position: "fixed",
            left: "50%",
            top: "10%",
            color: "white",
        }

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



        const { name, phone, email, summary, education, about } = Resume;


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
            <Parallax ref="parallax" pages={5} style={{background: 'blue'}}>

                <Parallax.Layer offset={0} speed={1} style={{ backgroundColor: '#243B4A' }} >
                    <img src={Curtains} style={{width: "100%", height: "100%"}}/>
                </Parallax.Layer>
                <Parallax.Layer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} >
                    <h1 style={EducationHeading}>Education</h1>
                    <section style={SchoolTextStyles}>{schoolsView}</section>
                    <img src={UNSWLectureRoom} style={{width: "100%", height: "100%"}}/>
                </Parallax.Layer>
                <Parallax.Layer offset={2} speed={1} >
                    <h1 style={EducationHeading}>Experiences</h1>
                    <img src={Office} style={{width: "100%", height: "100%"}}/>
                </Parallax.Layer>
                <Parallax.Layer offset={3} speed={1} >
                    <h1 style={EducationHeading}>Skills</h1>
                    <img src={Skills} style={{width: "100%", height: "100%"}}/>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={0}
                    speed={0.5}
                    style={styles}>
                    <h1>{name}</h1>
                    <h2>{about}</h2>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={1}
                    speed={-0.1}
                    style={LectureRoomStyles}>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={3}
                    speed={-0.1}
                    style={styles}>
                </Parallax.Layer>

                <Parallax.Layer
                    offset={4}
                    speed={0.5}
                    style={LastPageStyles}>

                    <p >{name}</p>
                    <p>{phone}</p>
                    <p >{email}</p>
                    <p style={LastPageParagraph}>{summary}</p>
                </Parallax.Layer>

                <img src={Background} style={{width: "100%", height: "100%"}}/>

            </Parallax>
        )
    }
}

export default Slide;