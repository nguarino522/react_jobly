import React from "react";
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import "./CompanyCard.css";
import Col from 'react-bootstrap/Col';

const CompanyCard = ({ handle, name, description, logoUrl }) => {

    return (
        <Col>
            <div className="CompanyCard-container">
                <Card className="CompanyCard" style={{ width: '22rem' }}>
                    <Link className="CompanyCard-link" to={`/companies/${handle}`}>
                        <Card.Img variant="top" src={logoUrl ? logoUrl : "/logo192.png"} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                        </Card.Body>
                    </Link>
                </Card>
            </div>
        </Col>
    )
}

export default CompanyCard;