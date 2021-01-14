import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

const Card = ({ id, film }) => {
    return (
        <>
        <Link to={`films/${id}`}>
        <div className="Card">
                <h2>{ film.title }</h2>
            <div className="Card-text">
                <p><span>Directed by</span>: { film.director }</p>
            </div>
        </div>
        </Link>
        </>
    )
}

export default Card