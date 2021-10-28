import React, { useRef } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

const AddUser = () => {

    const nameRef = useRef();
    const emailRef = useRef();

    const handleUserInput = (e) => {
        e.preventDefault();
        const newName = nameRef.current.value;
        const newEmail = emailRef.current.value;

        const newUser = {
            name: newName,
            email: newEmail,
        }

        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('New User Added');
                    e.target.reset();
                }
            })
    }


    return (
        <div>
            <Container>
                <Row className="py-4">
                    <Col>
                        <h3>Add User</h3>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form onSubmit={handleUserInput}>
                            <Form.Group className="mb-3" controlId="userName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control ref={nameRef} type="text" placeholder="Enter Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="userEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Button variant="success" type="submit">Add User</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddUser;