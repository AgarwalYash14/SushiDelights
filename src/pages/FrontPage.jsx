import HomePage from "../components/homepage";
import Navbar from "../components/navbar";
import styles from "../styles/home.module.css";

export default function Home() {
    return (
        <div className={styles.main}>
            <Navbar />
            <HomePage />
        </div>
    );
}
