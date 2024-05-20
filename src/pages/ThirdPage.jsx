import styles from "../styles/thirdpage.module.css";
import {
    third_page,
    vector_1_III,
    vector_2_III,
    vector_3_III,
    vector_4_III,
    vector_5_III,
} from "../assets";

export default function ThirdPage() {
    return (
        <>
            <div className={styles.assets}>
                <div className={styles.ThirdPage} id="ThirdPage">
                    <img src={third_page} alt="" className={styles.third_page_img}/>
                    <div className={styles.thirdpage}>
                        <img
                            src={vector_3_III}
                            alt=""
                            className={styles.vector_3_III}
                        />
                        <h1>Title Here</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consecte-tur adipiscing
                            elit. Vivamus lacinia odio vitae vestibulum
                            vestibulum.
                        </p>
                        <button>Order Now</button>
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
                    src={vector_4_III}
                    alt=""
                    className={styles.vector_4_III}
                />
                <img
                    src={vector_5_III}
                    alt=""
                    className={styles.vector_5_III}
                />
            </div>
        </>
    );
}
