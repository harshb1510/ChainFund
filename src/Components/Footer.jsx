import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div class="footer">
            <div class="container-footer">
                <div class="footer-content">
                    <div
                        id="w-node-c957b258-05bd-2967-a186-b3acfa2cb4e0-fa2cb4dd"
                        class="footer-nav-2"
                    >
                        <div class="_600px footer-hor">
                            <ul role="list" class="footer-links w-list-unstyled">
                                <li class="list-item-2 first-item">
                                    <div class="label-2">About</div>
                                </li>
                                <li class="list-item-2">
                                    <Link
                                        to=""
                                        target="_blank"
                                        class="nav-link white"
                                    >
                                        Careers
                                    </Link>
                                </li>
                                <li class="list-item-2">
                                    <Link to="/press" class="nav-link white">
                                        Press Kit
                                    </Link>
                                </li>
                                <li class="list-item-2">
                                    <Link to="/blog" class="nav-link white">
                                        Blog
                                    </Link>
                                </li>
                            </ul>
                            <ul role="list" class="footer-links w-list-unstyled">
                                <li class="list-item-2 first-item">
                                    <div class="label-2">Learn more</div>
                                </li>
                                <li class="list-item-2">
                                    <Link
                                        to=""
                                        target="_blank"
                                        class="nav-link white"
                                    >
                                        Creators
                                    </Link>
                                </li>
                                <li class="list-item-2">
                                    <Link
                                        to=""
                                        target="_blank"
                                        class="nav-link white"
                                    >
                                        Developers
                                    </Link>
                                </li>
                                <li class="list-item-2">
                                    <Link
                                        to=""
                                        target="_blank"
                                        class="nav-link white"
                                    >
                                        GitHub
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div class="_600px footer-hor">
                            <ul role="list" class="footer-links w-list-unstyled">
                                <li class="list-item-2 first-item">
                                    <div class="label-2">Legal</div>
                                </li>
                                <li class="list-item-2">
                                    <Link to="/privacy-policy" class="nav-link white">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li class="list-item-2">
                                    <Link to="/terms-disclaimer" class="nav-link white">
                                        Terms &amp;&nbsp;Disclaimer
                                    </Link>
                                </li>
                                <li class="list-item-2">
                                    <Link to="/bounty-program" class="nav-link white">
                                        Bounty Program
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        id="w-node-c957b258-05bd-2967-a186-b3acfa2cb51a-fa2cb4dd"
                        class="contact-form"
                    ></div>
                </div>
            </div>
        </div>
    )
}
export default Footer