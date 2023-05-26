import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import Homepage from "./Homepage";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import PrivateRoute from "./PrivateRoute";
import ProfileForm from "./ProfileForm";

const Routing = ({ login, signup }) => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<LoginForm login={login} />} />
                <Route path="/signup" element={<SignupForm signup={signup} />} />
                <Route path="/companies" element={<PrivateRoute><CompanyList /></PrivateRoute>} />
                <Route path="/companies/:handle" element={<PrivateRoute><CompanyDetail /></PrivateRoute>} />
                <Route path="/jobs" element={<PrivateRoute><JobList /></PrivateRoute>} />
                <Route path="/profile" element={<PrivateRoute><ProfileForm /></PrivateRoute>}/>
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
        </div>
    )
}

export default Routing;