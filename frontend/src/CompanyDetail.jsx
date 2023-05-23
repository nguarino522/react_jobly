import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import JoblyApi from "./JoblyApi";
import JobCardList from "./JobCardList";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import LoadingSpinner from "./LoadingSpinner";
import Card from 'react-bootstrap/Card';

const CompanyDetail = () => {
    const { handle } = useParams();
    const [company, setCompany] = useState(null);

    useEffect(() => {
        async function getCompany() {
            let result = await JoblyApi.getCompany(handle);
            setCompany(result);
        }
        getCompany();
    }, [handle]);

    if (!company) return <LoadingSpinner />;

    return (
        <Container>
            <div>
                <Card className="mb-2">
                    <h4>{company.name}</h4>
                    <p>{company.description}</p>
                </Card>
                <Row>
                    <JobCardList jobs={company.jobs} />
                </Row>
            </div>
        </Container>
    )

}

export default CompanyDetail;