import cn from "classnames";
import styles from "./navigation.module.scss";

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
          <a href="#main">Main</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#feature">Game features</a>
        </li>
        <li>
          <a href="#requirements">System requirements</a>
        </li>
        <li>
          <a href="#quotes">Quotes</a>
        </li>
        <li>
          <a href="#subscribe">Subscribe</a>
        </li>
      </ul>
    </nav>
  );
}
