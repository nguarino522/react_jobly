import React from "react";
import JobCard from "./JobCard";

const JobCardList = ({ jobs }) => {
    return (
        <>
            {jobs.map(j => (
                <JobCard
                    key={j.id}
                    id={j.id}
                    title={j.title}
                    salary={j.salary}
                    equity={j.equity}
                    companyName={j.companyName}
                />
            ))}
        </>
    )
}

export default JobCardList;