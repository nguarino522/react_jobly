import React, { useState } from "react";
import "./SearchForm.css";

const SearchForm = ({ searchFor }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();
        searchFor(searchTerm || undefined);
        setSearchTerm(searchTerm);
    }

    const handleChange = (evt) => {
        setSearchTerm(evt.target.value)
    }

    return (
        <div className="SearchForm mb-4">
            <form className="form-inline" onSubmit={handleSubmit}>
                <input
                    className="form-control form-control-lg flex-grow-1"
                    name="searchTerm"
                    placeholder="Enter search term.."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button type="submit" className="btn btn-lg btn-primary m-2">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default SearchForm;