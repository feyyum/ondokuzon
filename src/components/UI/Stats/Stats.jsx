import Chart from "../Chart/Chart";
import styles from "./Stats.module.css";

function Stats() {
  return (
    <div className={styles.container}>
      <div className={styles.chart_container}>
        <Chart />
      </div>
      <div className={styles.stats_container}>
        <div className={styles.stat}>
          <h3 className={styles.stat_title}>Total Assets Value:</h3>
          <p className={styles.stat_desc}>1923 TRY</p>
        </div>
        <div className={styles.stat}>
          <h3 className={`${styles.stat_title} ${styles.stat_title_secondary}`}>
            Total Income:
          </h3>
          <p className={styles.stat_desc}>1923 TRY</p>
        </div>
        <div className={styles.stat}>
          <h3 className={`${styles.stat_title} ${styles.stat_title_secondary}`}>
            Total Expense:
          </h3>
          <p className={styles.stat_desc}>1923 TRY</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
