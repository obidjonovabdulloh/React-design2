import "./style.css"
import { useState } from "react"

function Navbar() {

    const [modal, setModal] = useState(false)
    return (
        <>
            <nav>
                <div className="container">
                    <div className="navbar">
                        <h1>Web.Dev</h1>
                        <ul>
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">About</a>
                            </li>
                            <li>
                                <a href="#">Testimonials</a>
                            </li>
                            <li>
                                <a href="#">Contact</a>
                            </li>
                            <li>
                                <a href="#">Sign in</a>
                            </li>
                            <li>
                                <button onClick={() => setModal(true)}>Sign up</button>
                            </li>
                        </ul>
                    </div>
                    {modal ? (<>
                        <div className="modal">
                            <div className="iks">
                                <button className="iks" onClick={() => setModal(false)}><ion-icon name="close-outline"></ion-icon></button>
                            </div>
                            <form>
                                <h3>Name</h3>
                                <input type="text" placeholder="name..." />

                                <h3>Email</h3>
                                <input type="email" placeholder="email..." />

                                <h3>Password</h3>
                                <input type="password" placeholder="password..." />

                                <br />

                                <button className="sing">Sing Up</button>
                            </form>
                        </div>
                    </>) : null}
                </div>
            </nav>
        </>
    );
}


export default Navbar;