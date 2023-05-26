import React, { useContext, useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import "./JobCard.css";
import UserContext from "./UserContext";

const JobCard = ({ id, title, salary, equity, companyName }) => {
    const { hasAppliedToJob, applyToJob } = useContext(UserContext);
    const [applied, setApplied] = useState();

    useEffect(() => {
        setApplied(hasAppliedToJob(id));
    }, [id, hasAppliedToJob]);

    const handleApply = async (evt) => {
        if (hasAppliedToJob(id)) return;
        applyToJob(id);
        setApplied(true);
    }

    return (
        <Col>
            <Card className="JobCard" style={{ width: '22rem' }}>
                <Card.Header><h5>{title}</h5></Card.Header>
                <Card.Body>
                    <Card.Text><b>{companyName}</b></Card.Text>
                    <Card.Text>Salary: {salary ? formatSalary(salary) : "n/a"}</Card.Text>
                    <Card.Text>Equity: {equity ? equity : "n/a"}</Card.Text>
                    <Button variant="success" onClick={handleApply}> {applied ? "Applied" : "Apply"} </Button>{' '}
                </Card.Body>
            </Card>
        </Col>
    )
}

/** Render integer salary like '$1,250,343' */

const formatSalary = (salary) => {
    const digitsRev = [];
    const salaryStr = salary.toString();

    for (let i = salaryStr.length - 1; i >= 0; i--) {
        digitsRev.push(salaryStr[i]);
        if (i > 0 && i % 3 === 0) digitsRev.push(",");
    }

    return digitsRev.reverse().join("");
}

export default JobCard;