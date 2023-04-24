import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Routing = () => {
    return (
        <Routes>
            <Route exact path="/" />
            <Route exact path="/login" />
            <Route eact path="/signup" />
            <Route path="/companies" />
            <Route path="/companies/:handle" />
            <Route path="/jobs" />
            <Route path="/profile" />
            <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
    )
}

export default Routing;