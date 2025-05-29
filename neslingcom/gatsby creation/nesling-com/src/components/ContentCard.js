import React from "react";
import { Link } from "gatsby";
import "./ContentCard.css";

const ContentCard = ({ title, content }) => {
    return (
        <div className="content-card">
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default ContentCard;