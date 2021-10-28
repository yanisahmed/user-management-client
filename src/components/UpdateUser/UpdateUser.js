import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const UpdateUser = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();
    useEffect(() => {
        const url = `http://localhost:5000/users/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => {
                setUser(data);
            })
    }, [])
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h3>Update User <span className="text-warning">{user.name}</span></h3>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UpdateUser;