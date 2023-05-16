import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" />
                <Route path="/login" />
                <Route path="/signup" />
                <Route path="/companies" element={<CompanyList />} />
                <Route path="/companies/:handle" element={<CompanyDetail />} />
                <Route path="/jobs" />
                <Route path="/profile" />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </div>
    )
}

export default Routing;