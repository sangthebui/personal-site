import React from 'react';
import { Jumbotron } from 'reactstrap';

import Background from './images/Zhangjiajie.jpg';

const Intro = () => (
    <Jumbotron style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        height: "100vh",
    }}/>
);

export default Intro;