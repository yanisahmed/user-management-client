import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const UserList = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    const handleDelete = id => {
        const process = window.confirm('Are you sure');
        if (process) {
            const url = `http://localhost:5000/users/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        window.alert("Item has been deleted");
                        const remUsers = users.filter(user => user._id !== id);
                        setUsers(remUsers);

                    }
                })
        }
    }
    return (
        <div>
            <Container>
                <Row className="my-2">
                    <Col>
                        <div className="d-flex justify-content-between">
                            <h3>Users: {users.length}</h3>
                            <Link to="/add"><Button variant="success" type="button">Add User</Button></Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table responsive striped bordered hover>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {console.log(users)}
                                {users.map((user, index) => <tr key={user._id}>
                                    <td>{index}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Button onClick={() => handleDelete(user._id)} variant="danger" type="button" className="me-2">Delete</Button>
                                        <Link to={`/users/update/${user._id}`}><Button variant="info" type="button">Edit</Button></Link> </td>
                                </tr>)}

                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default UserList;