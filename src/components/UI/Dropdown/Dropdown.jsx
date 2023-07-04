import Dropdown from "react-dropdown";

import styles from "./Dropdown.module.css";

import Arrow from "../../../assets/Arrow.svg";

function DropdownComponent(data = []) {
  const options = [
    "Turkish Lira - TRY",
    "US Dollar - USD",
    "Arab Emirates Dinar - AED",
    "Turkish Lira - TRY",
    "US Dollar - USD",
    "Arab Emirates Dinar - AED",
    "Turkish Lira - TRY",
    "US Dollar - USD",
    "Arab Emirates Dinar - AED",
  ];

  const defaultOption = data.length > 0 && data[0];

  return (
    <Dropdown
      options={data.length > 0 ? data : options}
      value={defaultOption}
      placeholder="Select an option"
      controlClassName={styles.container}
      placeholderClassName={styles.placeholder}
      arrowClassName={styles.arrow}
      menuClassName={styles.menu}
      arrowClosed={<img src={Arrow} alt="Arrow" />}
      arrowOpen={<img src={Arrow} alt="Arrow" />}
    />
  );
}

export default DropdownComponent;
