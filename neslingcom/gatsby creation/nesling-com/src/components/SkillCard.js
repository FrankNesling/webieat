import React from "react";
import { Link } from "gatsby";
import "./SkillCard.css";

const SkillCard = ({ areaTitle, skills = [] }) => {
    return (
        <div className="skill-card">
            <h2>{areaTitle}</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}
                        dangerouslySetInnerHTML={{ __html: skill }}
                        />
                ))}
            </ul>
        </div>
    );
};

export default SkillCard;