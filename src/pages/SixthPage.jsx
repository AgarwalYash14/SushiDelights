import { photo } from "../assets";
import styles from "../styles/SixthPage.module.css";

export default function SixthPage() {
    return (
        <>
            <div className={styles.assets}>
                <div className={styles.SixthPage}>
                    <img src={photo} alt="" />
                    <p>
                        If you are a culinary fan, if you like to spend time in
                        your kitchen, you likely find yourself looking for
                        reliable resources through which you can
                    </p>
                    <h1>Phoebe Frazier</h1>
                </div>
            </div>
        </>
    );
}
