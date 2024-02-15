import WrapperLayout from "@/app/wrapperLayout";
import styles from "./footer.module.scss";
import Navigation from "./navigation";
import Socials from "./socials";
import Logo from "./Logo";

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
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Services</a>
            </li>
            <li>
              <a href="#">Code of Conduct</a>
            </li>
          </ul>
        </div>
      </WrapperLayout>
    </footer>
  );
}
