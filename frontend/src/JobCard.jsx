import React from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./JobCard.css";

const JobCard = ({ id, title, salary, equity, companyName }) => {
    return (
        <Col>
            <div className="">
                <Card className="JobCard" style={{ width: '22rem' }}>
                <Card.Header><h5>{title}</h5></Card.Header>
                    <Card.Body>
                        <Card.Text><h6>{companyName}</h6></Card.Text>
                        <Card.Text>Salary: {salary ? salary : "n/a"}</Card.Text>
                        <Card.Text>Equity: {equity ? equity : "n/a"}</Card.Text>
                        <Button variant="success">Apply</Button>{' '}
                    </Card.Body>
                </Card>
            </div>
        </Col>
    )
}

export default JobCard;