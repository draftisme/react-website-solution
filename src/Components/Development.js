import React from 'react';
import './Development.css';

const Development = (props) => (
    <div className="dev-item item">
        <div className="dev-content">
            <h5>{props.title}</h5>
            <p>{props.content}</p>
            <button>Read more</button>
        </div>
    </div>
)

export default Development;