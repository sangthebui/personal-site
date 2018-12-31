import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Education = ({education}) => {

    const educationViews = education.map(({school_name, year, degree, description}) => (
        <Row>
            <Col xs="3">
                <h4>{school_name}</h4>
                <p>{year}</p>
            </Col>
            <Col>
                <h4>{degree}</h4>
                <p>{description}</p>
            </Col>
        </Row>
    ));

    return (
        <div style={{background: "#F3EFE0"}}>
            <Container>
                <h2>Education</h2>
                <hr />
                {educationViews}
            </Container>
        </div>
    )
};

export default Education;