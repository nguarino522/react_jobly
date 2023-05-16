import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import JoblyApi from "./JoblyApi";

const CompanyDetail = () => {
    const { handle } = useParams();

    const [company, setCompany] = useState(null);

    return (
        <div>
            temp HOLD: {handle}
        </div>
    )

}

export default CompanyDetail;