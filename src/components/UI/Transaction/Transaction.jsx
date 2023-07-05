import styles from "./Transaction.module.css";

import Edit from "../../../assets/Edit.svg";
import Delete from "../../../assets/Delete.svg";

function Transaction() {
  return (
    <div className={styles.container}>
      <p className={`${styles.description} ${styles.expense}`}>
        Income - 60 USD
      </p>
      <div className={styles.buttons}>
        <div className={styles.button_container}>
          <img src={Edit} alt="Edit Button" width={18} />
        </div>
        <div className={styles.button_container}>
          <img src={Delete} alt="Delete Button" width={14} />
        </div>
      </div>
    </div>
  );
}

export default Transaction;
