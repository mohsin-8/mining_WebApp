import React from 'react';
import about from '../../images/about.jpg';

function About() {
    return (
        <>
            <div className="container my-5">
                <div class="row featurette d-flex justify-content-center align-items-center">
                    <div class="col-md-7 my-4">
                        <h2 style={{ color: '#f1a730' }} class="featurette-heading">About SHEEDA Coin</h2>
                        <p class="lead"><b>SHEEDA is a charity token with a robust charitable strategy designed to maximize profitability for investors and social impact reach in the world.</b></p>
                        <h4 style={{ color: '#f1a730' }} className="featurette-heading">
                            Mission
                        </h4>
                        <p class="lead">To provide multiple utilities for DC coin holders and make it a native asset that is interoperable across the charity and the social media ecosystem.</p>
                    </div>
                    <div class="col-md-5 my-4">
                        <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" src={about} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
