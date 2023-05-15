import React, { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import JoblyApi from "./JoblyApi";

const CompanyList = () => {

    const [companies, setCompanies] = useState([null]);

    useEffect(() => {
        getCompanies();
    }, []);
    
    const getCompanies = async (name) => {
        let companies = await JoblyApi.getCompanies(name);
        setCompanies(companies);
    }

    return (
        <div>
            <CompanyCard />
        </div>
    )
}

export default CompanyList;

