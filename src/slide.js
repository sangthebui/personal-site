import React, { Component } from 'react';
import Parallax from 'react-springy-parallax';
import Resume from './resume.json';

import Background from './images/Zhangjiajie.jpg';

import { IntroSlideA, IntroSlideB } from './IntroSlide';
import { EducationSlideA, EducationSlideB} from "./EducationSlide";
import { ExperiencesSlideA, ExperiencesSlideB } from "./ExperiencesSlide";
import { SkillsSlideA, SkillsSlideB } from "./SkillsSlide";


class Slide extends Component {
    render() {


        const { name, phone, email, summary, education, about, experiences } = Resume;


        return (
            <Parallax ref="parallax" pages={5} style={{background: 'blue'}}>

                <IntroSlideA />
                <EducationSlideA education={education} />
                <ExperiencesSlideA />
                <SkillsSlideA />

                <IntroSlideB name={name} about={about} />
                <EducationSlideB/>
                <ExperiencesSlideB/>
                <SkillsSlideB name={name} phone={phone} email={email} summary={summary}/>

                <img src={Background} style={{width: "100%", height: "100%"}}/>

            </Parallax>
        )
    }
}

export default Slide;