import cn from "classnames";
import styles from "./navigation.module.scss";
import Link from "next/link";
export default function Navigation(props) {
  let stylesheet;

  if (props.navPosition === "header") {
    stylesheet = props.isOpened
      ? styles.menuListHeader
      : cn(styles.menuListHeader, styles.opennedHeader);
  } else {
    stylesheet = styles.menuListFooter;
  }

  return (
    <nav className={styles.navigation}>
      <ul className={stylesheet}>
        <li>
          <Link href="#main">Main</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#feature">Game features</Link>
        </li>
        <li>
          <Link href="#requirements">System requirements</Link>
        </li>
        <li>
          <Link href="#quotes">Quotes</Link>
        </li>
        <li>
          <Link href="#subscribe">Subscribe</Link>
        </li>
      </ul>
    </nav>
  );
}
