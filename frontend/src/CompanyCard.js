import React from "react";
import { Link, useParams } from "react-router-dom"

const CompanyCard = () => {
    const { handle } = useParams();

    return (
        <div>
            <Link to={`/companies`}>
                <div>{handle}</div>
            </Link>
        </div>
    )
}

export default CompanyCard;