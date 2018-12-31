import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Skills = ({skills}) => {
    const { languages, misc } = skills;


    return (
        <div style={{backgroundColor: "#FAFAFA"}}>

            <Container>
                <h2>Skills</h2>
                <hr />
                <Row>
                    <Col>
                        <h4>Languages:</h4>
                        <p>{languages.join(", ")}</p>
                    </Col>
                    <Col>
                        <h4>Misc:</h4>
                        <p>{misc.join(", ")}</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Skills;