import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import JoblyApi from "./JoblyApi";
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";

const CompanyList = () => {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        getCompanies();
    }, []);

    const getCompanies = async (name) => {
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    }

    return (
        <Container>
            <Row>
                {companies.map(c => (
                    <CompanyCard
                        key={c.handle}
                        handle={c.handle}
                        name={c.name}
                        description={c.description}
                        logoUrl={c.logoUrl}
                    />
                ))}
            </Row>
        </Container>
    )
}

export default CompanyList;