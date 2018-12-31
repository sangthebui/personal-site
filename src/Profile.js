import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import SangBui from './images/Sang_Bui.jpg';


const Profile = ({about}) => (
    <div style={{background: "#F3EFE0"}}>
        <Container>
            <h2>Profile</h2>
            <hr />
            <Row>
                <Col sm="12" md="12" lg="6">
                    <h3>About me</h3>
                    <p className="firstLetter" style={{textIndent: "40px"}}>{about}</p>
                </Col>
                <Col sm="12" md="12" lg="6">
                    <img src={SangBui} style={{width: "100%", borderRadius: "50%"}}/>
                </Col>
            </Row>
        </Container>
    </div>
);

export default Profile;
