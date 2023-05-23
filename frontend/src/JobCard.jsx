import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./JobCard.css";

const JobCard = ({ id, title, salary, equity, companyName }) => {
    return (
        <Col>
            <Card className="JobCard" style={{ width: '22rem' }}>
                <Card.Header><h5>{title}</h5></Card.Header>
                <Card.Body>
                    <Card.Text><b>{companyName}</b></Card.Text>
                    <Card.Text>Salary: {salary ? salary : "n/a"}</Card.Text>
                    <Card.Text>Equity: {equity ? equity : "n/a"}</Card.Text>
                    <Button variant="success">Apply</Button>{' '}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default JobCard;