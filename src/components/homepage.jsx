import styles from "../styles/homepage.module.css";

export default function HomePage() {
    return (
        <div className={styles.homepage}>
            <h1>"Fresh, Authentic, Delicious"</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                lacinia odio vitae vestibulum vestibulum.
            </p>
            <button>Order Now</button>
        </div>
    );
}
