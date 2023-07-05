import styles from "./Dashboard.module.css";

import { Dropdown, History, Stats } from "../";

function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.header_title}>Overview</h1>
        <Dropdown />
      </div>
      <div className={styles.stats}>
        <Stats />
      </div>
      <div className={styles.history}>
        <History />
      </div>
    </div>
  );
}

export default Dashboard;
