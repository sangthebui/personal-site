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
        const { name, phone, email, summary,
          education, about, experiences,
          skills
        } = Resume;
        return (
            <>
                <Intro />
                <Profile />
                <Experiences />
                <Skills />
                <Education/>
                <Footer />
            </>
        );
    }
}

export default App;
