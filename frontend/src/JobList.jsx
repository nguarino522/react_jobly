import React, { useState, useEffect } from "react";
import JoblyApi from "./JoblyApi";
import SearchForm from "./SearchForm";
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import JobCardList from "./JobCardList";
import LoadingSpinner from "./LoadingSpinner";

const JobList = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        getJobs();
    }, []);

    const getJobs = async (title) => {
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
    }

    if (!jobs) return <LoadingSpinner />;

    return (
        <Container>
            <SearchForm searchFor={getJobs} />
            <Row>
            {jobs.length
                ? <JobCardList jobs={jobs} />
                : <p className="alert alert-info">Sorry, no results were found!</p>
                }
                
            </Row>
        </Container>
    )
}

export default JobList;