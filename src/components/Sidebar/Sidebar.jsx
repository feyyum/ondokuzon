import styles from "./Sidebar.module.css";

// SVG Imports
import Transaction from "../../assets/Transaction.svg";

function Sidebar() {
  return (
    <div>
      <div className={styles.top_container}>
        <div className={styles.logo}>finker.</div>
        <div className={styles.element_container}>
          <div className={styles.element_header_container}>
            <img
              src={Transaction}
              alt="Transaction Icon"
              className={styles.element_header_icon}
            />
            <h3 className={styles.element_header_text}>Transactions</h3>
          </div>
          <div className={styles.element_content_container}>
            <h5 className={styles.element_content_text}>Declare Income</h5>
            <h5 className={styles.element_content_text}>Declare Expense</h5>
          </div>
        </div>
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.api_status_container}>
          <h5 className={styles.api_status_text}>
            Exchange Rate API:{" "}
            <span className={styles.api_status_text_secondary}>ON</span>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
