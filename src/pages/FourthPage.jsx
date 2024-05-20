// import styles from "../styles/popularmenu.module.css";
import StatsCard from "../components/stats";
import { stats } from "../cardData/statistics";
import styles from "..//styles/FourthPage.module.css";
import {
    vector_1,
    vector_2,
    vector_3,
    vector_4,
    vector_5,
    vector_6,
} from "../assets";

export default function FourthPage() {
    return (
        <>
            <div className={styles.Assets}>
                <div className={styles.FourthPage}>
                    <div>
                        <h1>Statistics</h1>
                        <p className={styles.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vivamus lacinia odio vitae vestibulum
                            vestibulum.
                        </p>
                    </div>
                    <div className={styles.stats}>
                        {stats.map((item, index) => (
                            <StatsCard
                                key={index}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </div>
                    <img src={vector_1} alt="" className={styles.vector_1} />
                    <img src={vector_2} alt="" className={styles.vector_2} />
                    <img src={vector_3} alt="" className={styles.vector_3} />
                    <img src={vector_4} alt="" className={styles.vector_4} />
                    <img src={vector_5} alt="" className={styles.vector_5} />
                    <img src={vector_6} alt="" className={styles.vector_6} />
                </div>
            </div>
        </>
    );
}
