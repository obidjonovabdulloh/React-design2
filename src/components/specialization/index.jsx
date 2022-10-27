import Img from "../../assets/specialization/logos.png"
import "./style.css"

function specialization() {
    return (
        <>
            <section className="specia">
                <div className="container">
                    <img className="sec_img" src={Img} alt="photo logos" />
                    <div className="spec">
                        <h3 className="spec_h3">What we Do?</h3>
                        <h2>Our Specialization</h2>
                        <ul>
                            <li>
                                <div className="logo">
                                    <ion-icon class="ww" name="logo-wordpress"></ion-icon>
                                    <h3>Webflow Development</h3>
                                </div>
                                <p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                                <a href="#">Read More</a>
                            </li>
                            <li>
                                <div className="logo">
                                    <i class='bx bxl-shopify shop'></i>
                                    <h3>Shopify Development</h3>
                                </div>
                                <p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                                <a href="#">Read More</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <div className="logo">
                                    <ion-icon class="fig" name="logo-figma"></ion-icon>
                                    <h3>Figma Web Designing</h3>
                                </div>
                                <p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                                <a href="#">Read More</a>
                            </li>
                            <li>
                                <div className="logo">
                                    <i class='bx bxl-php php'></i>
                                    <h3>Php Development</h3>
                                </div>
                                <p>Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush. Merits behind on afraid or warmly.</p>
                                <a href="#">Read More</a>
                            </li>
                        </ul>
                        <div className="buttons">
                            <button>Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default specialization;