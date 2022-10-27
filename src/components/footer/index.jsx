import "./style.css"

function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="foot">
                        <ul>
                            <li>
                                <h2>Web.Dev</h2>
                                <p>You’ll find your next home loan valu
                                    <br/>
                                     you prefer.</p>
                                <div className="foot_icons">
                                    <ion-icon name="logo-facebook"></ion-icon>
                                    <ion-icon name="logo-twitter"></ion-icon>
                                    <ion-icon name="logo-linkedin"></ion-icon>
                                </div>
                            </li>
                            <li>
                                <h3>Resources</h3>
                                <p>Our Agents</p>
                                <p>Member Stories</p>
                                <p>Video</p>
                                <p>Free trial</p>
                            </li>
                            <li>
                                <h3>Company</h3>
                                <p>Patnerships</p>
                                <p>Terms of use</p>
                                <p>Privacy</p>
                                <p>Sitemap</p>
                            </li>
                            <li>
                                <h3>Get in touch</h3>

                                <div>
                                    <input type="text" placeholder="your email... " />
                                    <ion-icon name="arrow-forward-circle-outline"></ion-icon>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <p className="last_p">Copyright 2021 ©Web.Dev  All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;