import React from 'react';
import './Work.css';

const Work = (props) => (
    <div className="work-item item">
        <img src={props.imagePath} alt="wherever" />
        <div className="work-content">
            <h5>{props.title}</h5>
            <p>
                {props.content}
            </p>
        </div>
    </div>
)

export default Work;