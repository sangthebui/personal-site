import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import SangBui from './images/Sang_Bui.jpg';


const Profile = ({about}) => (
    <Container>
        <h2>Profile</h2>
        <hr />
        <Row>
            <Col>
                <h3>About me</h3>
                <p style={{textIndent: "40px"}}>{about}</p>
            </Col>
            <Col>
                <img src={SangBui} style={{width: "100%", borderRadius: "50%"}}/>
            </Col>
        </Row>
    </Container>
);

export default Profile;
