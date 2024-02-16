import styles from "./button.module.scss";
import cn from "classnames";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ weight: ["700"], subsets: ["latin"] });

export default function Button(props) {
  return (
    <button
      className={cn(openSans.className, props.style, styles.button)}
      type="button"
      onClick={props.onClick}>
      {props.children}
    </button>
  );
}
