import * as React from "react";
import styles from "./styles.module.scss";

const HighlightBox = ({children}) => {
  return <div className={styles.highlightBox}>{children}</div>
}

export default HighlightBox;