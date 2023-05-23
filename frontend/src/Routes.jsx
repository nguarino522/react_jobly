import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import Homepage from "./Homepage";
import JobList from "./JobList";

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={< Homepage />} />
                <Route path="/login" />
                <Route path="/signup" />
                <Route path="/companies" element={<CompanyList />} />
                <Route path="/companies/:handle" element={<CompanyDetail />} />
                <Route path="/jobs" element={<JobList />}/>
                <Route path="/profile" />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </div>
    )
}

export default Routing;