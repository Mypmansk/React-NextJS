import { useState } from "react";
import Button from "./button";
import styles from "./popup.module.scss";
import cn from "classnames";

export default function Popup(props) {
  const [hidden, setHidden] = useState(props.hidden);
  const hideWindow = () => {
    return setHidden(!hidden);
  };

  return (
    <div className={hidden ? cn(styles.popup, hidden) : styles.hidden}>
      <div className={styles.popupText}>Is coming soon...</div>
      <Button onClick={hideWindow}>
        <span>Ok</span>
      </Button>
    </div>
  );
}
