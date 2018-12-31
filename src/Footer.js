import React from 'react';
import { Container, Row } from 'reactstrap';
import FeatherIcon from 'feather-icons-react';

const alignText = {
    textAlign: "center"
};

const moveIconLeft = {
    marginRight: "12px",
    marginBottom: "4px",
}

const Footer = ({email, summary, linkedIn, github}) => (
    <footer>
        <Container>
            <h2>Contact</h2>
            <hr />
            <Row style={{flexDirection: "column"}}>
                <h4 style={alignText} >
                    <a href={`mailto:${email}`} >
                        <FeatherIcon icon="mail" style={moveIconLeft}/>
                        Email
                    </a>
                </h4>
                <h4 style={alignText} >
                    <a href={`${linkedIn}`}  >
                        <FeatherIcon icon="linkedin" style={moveIconLeft}/>
                        LinkedIn
                    </a>
                </h4>
                <h4 style={alignText} >
                    <a href={`${github}`} >
                        <FeatherIcon icon="github" style={moveIconLeft}/>
                        Github
                    </a>
                </h4>
                <h3>Parting words</h3>
                <p style={{color: "white", textIndent: "40px"}}>{summary}</p>
            </Row>
        </Container>

    </footer>
);

export default Footer;