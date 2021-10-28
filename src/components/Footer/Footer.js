import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="bg-gray" style={{ backgroundColor: '#f8f9fa' }}>
            <Container>
                <Row>
                    <Col className="text-center py-4 text-black">
                        &copy;2021-2022
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;