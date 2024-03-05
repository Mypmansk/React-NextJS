import styles from "./button.module.scss";
import cn from "classnames";
import { Open_Sans } from "next/font/google";
import Link from "next/link";

const openSans = Open_Sans({ weight: ["700"], subsets: ["latin"] });

export default function Button(props) {
  return (
    <Link href="/popup">
      <button
        className={cn(openSans.className, props.style, styles.button)}
        type="button">
        {props.children}
      </button>
    </Link>
  );
}
