import styles from "..//styles/FourthPage.module.css";

const StatsCard = ({ title, description }) => {
    return (
        <div className={styles.StatsCard}>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default StatsCard;