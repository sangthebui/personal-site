import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

import Resume from './resume.json';

import Intro from './Intro';
import Profile from './Profile';
import Experiences from './Experiences';
import Skills from './Skills';
import Education from './Education';
import Footer from './Footer';


class App extends Component {
    render() {
        const {
            name,
            about,
            experiences,
            education,
            skills,
            email, summary, linkedIn, github,
        } = Resume;
        return (
            <>
                <Intro name={name}/>
                <Profile about={about}/>
                <Experiences experiences={experiences} />
                <Education education={education}/>
                <Skills skills={skills}/>
                <Footer email={email} summary={summary} linkedIn={linkedIn} github={github} />
            </>
        );
    }
}

export default App;
