import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Tokenomics</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Whitepaper</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Our Technology</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Roadmap</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Faqs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <button class="btn btn-outline-secondary">JOIN PRE-SALE</button>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <button class="btn btn-outline-secondary">BUY TOKEN</button>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
