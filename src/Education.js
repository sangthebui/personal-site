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
        <Container>
            <h2>Education</h2>
            <hr />
            {educationViews}
        </Container>
    )
};

export default Education;