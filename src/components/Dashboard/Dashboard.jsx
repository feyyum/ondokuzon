import styles from "./Dashboard.module.css";

import Dropdown from "../UI/Dropdown/Dropdown";

function Dashboard() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.header_title}>Overview</h1>
        <Dropdown />
      </div>
    </div>
  );
}

export default Dashboard;
