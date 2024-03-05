import Image from "next/image";
import arrowIcon from "@/public/arrowDown.svg";
import styles from "./arrowButton.module.scss";
import cn from "classnames";

export default function ArrowButton(props) {
  return (
    <button type="button" className={styles.button} onClick={props.onClick}>
      <Image
        className={
          props.orientasion
            ? cn(styles.button, styles.rightTurned)
            : styles.button
        }
        src={arrowIcon}
        height={8}
        width={20}
        alt="arrow down"
      />
    </button>
  );
}
