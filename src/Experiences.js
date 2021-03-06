import React from 'react';
import { Container, Row, Col } from 'reactstrap';


const Experiences = ({experiences})=> {
    const experiencesView = experiences.map(({company, from, to, position, description}) => (
        <Row>
            <Col xs="3">
                <h4>{company}</h4>
                <p>{from} - {to}</p>
            </Col>
            <Col>
                <h4>{position}</h4>
                <p >{description}</p>
            </Col>
        </Row>
    ));


    return (
        <div style={{backgroundColor: "#FAFAFA"}}>
            <Container >
                <h2>Experiences</h2>
                <hr />
                {experiencesView}
            </Container>
        </div>
    )
};

export default Experiences;



