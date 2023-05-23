import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import JoblyApi from "./JoblyApi";
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/Container";
import SearchForm from "./SearchForm";
import LoadingSpinner from "./LoadingSpinner";

const CompanyList = () => {

    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        getCompanies();
    }, []);

    const getCompanies = async (name) => {
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    }

    if (!companies) return <LoadingSpinner />;

    return (
        <Container>
            <SearchForm searchFor={getCompanies} />
            <Row>
                {companies.length
                    ? (
                        <>
                            {companies.map(c => (
                                <CompanyCard
                                    key={c.handle}
                                    handle={c.handle}
                                    name={c.name}
                                    description={c.description}
                                    logoUrl={c.logoUrl}
                                />
                            ))
                            }
                        </>
                    ) : (
                        <p className="alert alert-info">Sorry, no results were found!</p>
                    )}
            </Row>
        </Container>
    )
}

export default CompanyList;