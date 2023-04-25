import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CompanyCard from "./CompanyCard";

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" />
                <Route path="/login" />
                <Route path="/signup" />
                <Route path="/companies" />
                <Route path="/companies/:handle" element={<CompanyCard />} />
                <Route path="/jobs" />
                <Route path="/profile" />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </div>
    )
}

export default Routing;