import React from 'react';
import './Feature.css';

const Feature = (props) => (
    <div className="feature-item">
        <div className="icon">
            <img src={props.icon} alt="whatever" />
        </div>
        <h3><span className="black">{props.black}</span> {props.normal}</h3>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
        </p>
        <button>read more</button>
    </div>
)

export default Feature;