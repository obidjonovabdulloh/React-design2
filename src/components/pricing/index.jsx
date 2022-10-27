import "./style.css"

function Pricing() {
    return (
        <>
            <section className="pricing">
                <div className="container">
                    <div className="pri">
                        <h3 className="pri_h3">
                            Pricing
                        </h3>
                        <h2 className="pri_h2">Pricing Policy</h2>

                        <ul>
                            <li>
                                <h3>For Starter</h3>
                                <h2>$1499 </h2>
                                <p><ion-icon name="checkmark-outline"></ion-icon> Feedback Categorization</p>
                                <p><ion-icon name="checkmark-outline"></ion-icon> Features prioritization</p>
                                <p><ion-icon name="checkmark-outline"></ion-icon> Real-time collaboration</p>
                                <p><ion-icon name="checkmark-outline"></ion-icon> Feedback loop notifications</p>
                                <p><ion-icon name="checkmark-outline"></ion-icon> Essential dev tools integrations</p>
                                <div className="buttons">
                                    <button>Request Demo</button>
                                </div>
                            </li>
                            <li>
                                <h3>For Teams</h3>
                                <h2>$2999</h2>
                                <p><ion-icon name="checkmark-outline"></ion-icon> Feedback Categorization</p>
                                <p><ion-icon name="checkmark-outline"></ion-icon> Features prioritization</p>
                                <p><ion-icon name="checkmark-outline"></ion-icon> Real-time collaboration</p>
                                <p><ion-icon name="checkmark-outline"></ion-icon> Feedback loop notifications</p>
                                <p><ion-icon name="checkmark-outline"></ion-icon> Essential dev tools integrations</p>
                                <div className="buttons">
                                    <button>Request Demo</button>
                                </div>
                            </li>
                            <li>
                                <h3>For Company</h3>
                                <h2>Custom</h2>
                                <p><ion-icon name="checkmark-outline"></ion-icon> Feedback Categorization</p>
                                <p><ion-icon name="checkmark-outline"></ion-icon> Feedback loop notifications</p>
                                <p><ion-icon name="checkmark-outline"></ion-icon> Essential dev tools integrations</p>
                                <div className="buttons">
                                    <button className="but">Contact Us</button>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="need">
                        <h2>Need a little more
                            <br/>
                            home to grow?</h2>
                            <div className="buttons">
                                <button>Contact Us</button>
                            </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Pricing;