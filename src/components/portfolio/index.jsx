import "./style.css"
import img from "../../assets/portfolio/portfolioImg.png"

function Portfolio() {

    return (
        <>
            <section className="portfolio">
                <div className="container">
                    <div className="portfol">
                        <h3 className="port_h3">Our Work</h3>
                        <h2>Our Portfolio</h2>
                        <div className="infors">
                            <div className="ports">
                                <div className="port1">
                                    <img src={img} alt="photo" />
                                    <div className="texts">
                                        <h3>Fashion Landing page</h3>
                                        <a href="#">View Details</a>
                                    </div>
                                </div>
                                <div className="port1">
                                    <img src={img} alt="photo" />
                                    <div className="texts">
                                        <h3>Furniture Shop</h3>
                                        <a href="#">View Details</a>
                                    </div>
                                </div>
                            </div>
                            <div className="ports ppp">
                                <div className="port1">
                                    <img src={img} alt="photo" />
                                    <div className="texts">
                                        <h3>IT Solution Provider</h3>
                                        <a href="#">View Details</a>
                                    </div>
                                </div>
                                <div className="port1">
                                    <img src={img} alt="photo" />
                                    <div className="texts">
                                        <h3>Fashion Landing page</h3>
                                        <a href="#">View Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="buttons">
                            <button>All Projects</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Portfolio;