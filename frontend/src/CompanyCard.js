import React from "react";
import { Link, useParams } from "react-router-dom"

const CompanyCard = () => {
    const { handle } = useParams();
    
    return (
        <Link to={`/companies`}>
            <div>{handle}</div>
        </Link>
    )
}

export default CompanyCard;