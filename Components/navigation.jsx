import cn from "classnames";
import styles from "./navigation.module.scss";

export default function Navigation(props) {
  return (
    <nav className={styles.navigation}>
      <ul
        className={
          props.isOpened ? styles.menuList : cn(styles.menuList, styles.openned)
        }>
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
      </ul>
    </nav>
  );
}
