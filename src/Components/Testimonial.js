import React from 'react';
import './Testimonial.css';

const Testimonial = (props) => (
    <div className="testi-item item">
        <h5>{props.author}</h5>
        <p>{props.content}</p>
    </div>
)

export default Testimonial;