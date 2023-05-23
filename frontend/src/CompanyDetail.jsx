import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import JoblyApi from "./JoblyApi";
import JobCardList from "./JobCardList";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import LoadingSpinner from "./LoadingSpinner";

const CompanyDetail = () => {
    const { handle } = useParams();
    const [company, setCompany] = useState([]);

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
            <div className="CompanyDetail col-md-8 offset-md-2">
                <h4>{company.name}</h4>
                <p>{company.description}</p>
                <Row>
                    <JobCardList jobs={company.jobs} />
                </Row>
            </div>
        </Container>
    )

}

export default CompanyDetail;