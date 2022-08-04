import React from 'react';
import { Jumbotron } from 'reactstrap';

const Intro = ({name}) => (
    <>
        <section className="introBackground" />
        <Jumbotron >
            <h2 style={{color: "#22A39F", fontSize: "100px"}}>{name}</h2>
        </Jumbotron>
    </>
);

export default Intro;