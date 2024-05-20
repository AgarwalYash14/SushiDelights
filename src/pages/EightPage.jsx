import { facebook, instagram, twitter, whatsapp } from "../assets";
import styles from "../styles/EightPage.module.css";

export default function EightPage() {
    return (
        <>
            <div className={styles.EightPage} id="ContactUs">
                <div className={styles.EightPageMain}>
                    <div>
                        <h2>Title Here</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consecte-tur adipiscing
                            elit. Aliquam at dignis-sim nunc, id maximus ex.
                            Etiam nec dignissim elit, at dignissim enim.{" "}
                        </p>
                    </div>
                    <div className={styles.SocialMedia}>
                        <img src={instagram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={whatsapp} alt="" />
                    </div>
                </div>
                <div className={styles.EightPageII}>
                    <div>
                        <h2>About</h2>
                        <ul>
                            <li>
                                <a href="">History</a>
                            </li>
                            <li>
                                <a href="">Our Team</a>
                            </li>
                            <li>
                                <a href="">Brand Guidelines</a>
                            </li>
                            <li>
                                <a href="">Terms & Conditon</a>
                            </li>
                            <li>
                                <a href="">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>Services</h2>
                        <ul>
                            <li>
                                <a href="">How to Order</a>
                            </li>
                            <li>
                                <a href="">Our Product</a>
                            </li>
                            <li>
                                <a href="">Order Status</a>
                            </li>
                            <li>
                                <a href="">Promo</a>
                            </li>
                            <li>
                                <a href="">Payment Method</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2>Other</h2>
                        <ul>
                            <li>
                                <a href="">Contact Us</a>
                            </li>
                            <li>
                                <a href="">Help</a>
                            </li>
                            <li>
                                <a href="">Privacy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
