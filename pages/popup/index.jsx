import Link from "next/link";
import styles from "./index.module.scss";

export default function Popup() {
  return (
    <div className={styles.popup}>
      <div className={styles.popupText}>Is coming soon...</div>
      <Link href="/">
        <button>
          <span>Ok</span>
        </button>
      </Link>
    </div>
  );
}
