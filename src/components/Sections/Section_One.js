import React from 'react';
import './Section_One.css';

function Section_One() {
    return (
        <>
            <div className="container-fluid banner">
                <div className="logo">
                    <img src="https://www.dropofchangecoin.com/header_logo.png" width="120px" alt="logo" />
                </div>
                <div className="content-text">
                    <h1 style={{ color: '#fff', wordSpacing: '0.2rem' }}>DC Coin | To Make An Impact</h1>
                    <div className="mt-5 sub-text">
                        <h5 style={{ color: '#fff', fontSize: '19px', wordSpacing: '0.2rem' }}>Charity Token with a robust Charitable Strategy</h5>
                    </div>
                </div>


                <div className="py-5 buttons d-flex justify-content-center">
                    <div className="mr-5 btn bg-light btn1">JOIN PRE-SALE</div>
                    <div className="ms-5 btn bg-light btn2">WHITE PAPER</div>
                </div>

                <div class="ml-auto my-5  container cards">
                    <div class="row no-gutters  justify-content-center">
                        <div class="col-xl-4 cards1 bg-light col-md-5 p-3">
                            <div class="token-countdown-wrapper split split-left split-md-left">
                                <h5 class="title-sm">Pre-Sale - Phase 2  Starts <br /> on November 15th.   </h5>
                                <div class="countdown-small countdown-s3 countdown" data-date="2021/08/10" data-day-text="D" data-hour-text="H" data-min-text="M" data-sec-text="S"></div>
                            </div>
                        </div>
                        <div class="col-xl-6 p-3 cards2 col-md-7">
                            <div class="token-status token-status-s1 bg-theme tc-light text-left split split-right split-md-right">
                                <h5 class="title-sm">Pre Sale - Phase II</h5>
                                <div class="progress-bar progress-bar-s1">
                                    <div class="progress-percent progress-percent-s1 bg-theme-grad-alt" data-percent="0" style={{ width: "0%;" }}></div>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                <div class="progress-points py-2 d-flex justify-content-around"><span>Soft Cap</span> <span>Hard Cap</span></div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Section_One;
