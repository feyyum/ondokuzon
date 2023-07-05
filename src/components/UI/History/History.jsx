import { Transaction } from "../../";
import styles from "./History.module.css";

function History() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.header_title}>Transaction History</h1>
      </div>
      <Transaction />
      <Transaction />
    </div>
  );
}

export default History;
