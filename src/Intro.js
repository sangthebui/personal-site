import React from 'react';
import { Jumbotron } from 'reactstrap';

import Background from './images/Zhangjiajie.jpg';

const Intro = () => (
    <>
        <section style={{
            backgroundImage: `url(${Background})`,
            position: "fixed",
            width: "100%",
            height: "100vh",
            zIndex: "-1",
        }}

        />
        <Jumbotron style={{
            backgroundSize: "cover",
            height: "100vh",
            backgroundColor: "rgb(0,0,0,0.5)",
            marginBottom: "0",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
        }}>
            <h2 style={{color: "#22A39F", fontSize: "100px"}}>Sang Bui</h2>
        </Jumbotron>
    </>
);

export default Intro;