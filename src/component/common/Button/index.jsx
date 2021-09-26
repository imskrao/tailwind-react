import React from "react";
import classnames from "classnames";
import styles from "./style.module.css";

export default function Button(props) {
  const { btnType, btnText } = props;
  return (
    <div className={classnames(styles.btn, styles[btnType])}>{btnText}</div>
  );
}
