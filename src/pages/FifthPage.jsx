import styles from "../styles/FifthPage.module.css";
import {
    fifth_page,
    vector_1_V,
    vector_2_V,
    vector_3_V,
    vector_4_V,
    vector_5_V,
} from "../assets";

export default function FifthPage() {
    return (
        <>
            <div className={styles.assets}>
                <div className={styles.FifthPage}>
                    <div className={styles.fifthpage}>
                        <img
                            src={vector_3_V}
                            alt=""
                            className={styles.vector_3_V}
                        />
                        <h1>Title Here</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consecte-tur adipiscing
                            elit. Vivamus lacinia odio vitae vestibulum
                            vestibulum.
                        </p>
                        <button>Order Now</button>
                    </div>
                    <img src={fifth_page} alt="" className={styles.fifth_page_img}/>
                </div>
                <img src={vector_1_V} alt="" className={styles.vector_1_V} />
                <img src={vector_2_V} alt="" className={styles.vector_2_V} />

                <img src={vector_4_V} alt="" className={styles.vector_4_V} />
                <img src={vector_5_V} alt="" className={styles.vector_5_V} />
            </div>
        </>
    );
}
