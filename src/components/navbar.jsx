import { hambuger, logo, search } from "../assets";
import styles from "../styles/navbar.module.css";

export default function Navbar() {
    return (
        <>
            <nav id="HomePage">
                <a href="">
                    <img src={logo} alt="" className={styles.logo} />
                    <h1>SUSHI DELIGHTS</h1>
                </a>

                <ul>
                    <li>
                        <a href="#HomePage">Home</a>
                    </li>
                    <li>
                        <a href="#SecondPage">Product</a>
                    </li>
                    <li>
                        <a href="#ThirdPage">Promo</a>
                    </li>
                    <li>
                        <a href="#ContactUs">About</a>
                    </li>
                    <li>
                        <a href="#ContactUs">Contact</a>
                    </li>
                </ul>
                <a href="">
                    <img src={search} alt="" className={styles.search} />
                    <img src={hambuger} alt="" className={styles.hamburger} />
                </a>
            </nav>
        </>
    );
}
