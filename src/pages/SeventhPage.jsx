import styles from "../styles/SeventhPage.module.css";
import {
    third_page,
    vector_1_III,
    vector_2_III,
    vector_3_III,
    vector_4_III,
    vector_5_III,
} from "../assets";

export default function SeventhPage() {
    return (
        <>
            <div className={styles.assets}>
                <div className={styles.SeventhPage}>
                    <div>
                        <h1>Title Here</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consecte-tur adipiscing
                            elit. Vi-vamus lacinia odio vitae vestibulum
                            vestibulum.
                        </p>
                        <div className={styles.subscribe}>
                            <input
                                type="email"
                                name=""
                                id=""
                                placeholder="Your Email"
                            />
                            <button>SUBSCRIBE</button>
                        </div>
                        <img
                            src={vector_5_III}
                            alt=""
                            className={styles.vector_5_VII}
                        />
                    </div>
                </div>
                <img
                    src={vector_1_III}
                    alt=""
                    className={styles.vector_1_III}
                />
                <img
                    src={vector_2_III}
                    alt=""
                    className={styles.vector_2_III}
                />
                <img
                    src={vector_3_III}
                    alt=""
                    className={styles.vector_3_III}
                />
                <img
                    src={vector_4_III}
                    alt=""
                    className={styles.vector_4_III}
                />
                <img src={vector_3_III} alt="" className={styles.vector_3_VI} />
            </div>
        </>
    );
}
