import WrapperLayout from "@/app/wrapperLayout";
import styles from "./footer.module.scss";
import Navigation from "./navigation";
import Socials from "./socials";
import Logo from "./Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <WrapperLayout mode={"footer"}>
        <div className={styles.footerNav}>
          <Logo ImageHeight={90} ImageWidth={90} />
          <Navigation navPosition="footer" />
          <Socials />
        </div>
        <div className={styles.copyrightBlock}>
          <p>© 2018 Outpost Games, Inc. All Rights Reserved</p>
          <ul className={styles.copyrightList}>
            <li>
              <Link href="/popup">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/popup">Terms of Services</Link>
            </li>
            <li>
              <Link href="/popup">Code of Conduct</Link>
            </li>
          </ul>
        </div>
      </WrapperLayout>
    </footer>
  );
}
