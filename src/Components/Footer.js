import React from 'react';
import './Footer.css';

const Footer = (props) => (
    <div className="footer">
        <div className="info">
            <div className="info-item">
                <h4>About us</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
                </p>
                <p>
                    123 Street Name <br />
                    Food Name<br />
                    London<br />
                    + 44 32987 823794
                </p>
            </div>
            <div className="info-item">
                <h4>About us</h4>
                <p>
                    <span className="white">@Janeet Luu</span> dolor sit amet, consectetur adipiscing elit. <span className="white">#ahointeger</span> nec odio. Praesent libero. Sed cursus ante dapibus diam. 
                </p>
                <p>
                    <span className="white">@Janeet Luu</span> dolor sit amet, consectetur adipiscing elit. <span className="white">#ahointeger</span> nec odio. Praesent libero. Sed cursus ante dapibus diam. 
                </p>
            </div>
            <div className="info-item">
                <h4>latest posts</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                </p>
                <p className="blue"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.               
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.
                </p>
            </div>
            <div className="info-item">
                <h4>Flickr</h4>
                <div className="flickr-list">
                    <div className="flickr"></div>
                    <div className="flickr"></div>
                    <div className="flickr"></div>
                    <div className="flickr"></div>
                    <div className="flickr"></div>
                    <div className="flickr"></div>
                    <div className="flickr"></div>
                    <div className="flickr"></div>
                </div>
            </div>
        </div>
        <div className="footer">
            <div className="media">
                <p>COPYRIGHT SOMETHING ALL RIGHT RESERVED</p>

                <div>
                    hello hi bonjour
                </div>
            </div>
        </div>        
    </div>
)

export default Footer;