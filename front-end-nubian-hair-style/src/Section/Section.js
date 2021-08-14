import React from 'react';
import './Section.css';
import image1 from "../images/canva-section.png";


export default function Section() {
    return (
        <div>
            <div className="div-section">
                <img src={image1} className="image-section"/>
            </div>
        </div>
    )
}
