import React from "react";
import { Link, useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';

const CompanyCard = () => {
    const { handle } = useParams();

    return (
        <div>
            <Link to={`/companies/${handle}`}>
                <div>{handle}</div>
            </Link>
        </div>
    )
}

export default CompanyCard;