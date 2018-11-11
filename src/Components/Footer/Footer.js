import React, { Component } from 'react';

import './Footer.css';

class Footer extends Component {
    render () {
        return (
            <div className="Footer">
                <div className="footer-content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="footer-box">
                                    <h3>About LT Restaurant</h3>
                                    <p>LT Restaurant is premium single & clear Joomla! template for restaurant website. This template support strong template framework, powerful page builder, fully responsive layout and unlimited positions. It builds with latest <span className="highlight">Bootstrap CSS Framework</span>, and support <span className="highlight">Font Awesome</span>, extended <span className="highlight">K2 style</span> and so on.</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="footer-box footer-line">
                                    <h3>Latest News</h3>
                                    <p>Jerky shank chicken boudin<br />
                                    02 February 2015</p>
                                    <p>Leberkas tail swine pork<br />
                                    02 February 2015</p>
                                    <p>Meatball kevin beef ribs shoulder<br />
                                    02 February 2015</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="footer-box footer-line">
                                    <h3>Masterchef</h3>
                                    <p><i className="fas fa-angle-right"></i>&ensp;Steve Stegner</p>
                                    <p><i className="fas fa-angle-right"></i>&ensp;Camala Haddon</p>
                                    <p><i className="fas fa-angle-right"></i>&ensp;Eva Savits</p>
                                    <p><i className="fas fa-angle-right"></i>&ensp;Mark Johnson</p>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="footer-box footer-line">
                                    <h3>Services Offer</h3>
                                    <p><i className="fas fa-angle-right"></i>&ensp;
                                    Wedding</p>
                                    <p><i className="fas fa-angle-right"></i>&ensp;
                                    Birthday Party</p>
                                    <p><i className="fas fa-angle-right"></i>&ensp;
                                    Comapny</p>
                                    <p><i className="fas fa-angle-right"></i>&ensp;
                                    Anniversary Party</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;