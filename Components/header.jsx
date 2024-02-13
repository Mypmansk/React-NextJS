"use client";
import Image from "next/image";
import xboxIcon from "../public/xbox icon.svg";
import steamIcon from "../public/steam icon.svg";
import styles from "./header.module.scss";
import Navigation from "./navigation";
import WrapperLayout from "@/app/wrapperLayout";
import Logo from "./Logo";
import { useState } from "react";

export default function Header() {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <header className={styles.header}>
      <WrapperLayout mode={"header"}>
        <Logo ImageHeight={55} ImageWidth={55} />
        <Navigation isOpened={isOpened} />
        <div className={styles.langContactBlock}>
          <div className={styles.langBlock}>
            <label htmlFor="lang-select" style={{ display: "none" }}>
              Choose a leng:
            </label>
            <select name="lang" id="lang-select" style={{ cursor: "pointer" }}>
              <option value="english">ENG</option>
              <option value="russian">RUS</option>
              <option value="franch">FRA</option>
              <option value="deutch">DEU</option>
            </select>
          </div>
          <div className={styles.contactBlock}>
            <a href="#">
              <Image
                src={xboxIcon}
                height={30}
                width={30}
                alt="xbox logo"
                className={styles.icon}
              />
            </a>
            <a href="#">
              <Image
                src={steamIcon}
                height={30}
                width={30}
                alt="staeam logo"
                className={styles.icon}
              />
            </a>
          </div>
          <div
            className={styles.dropMenu}
            onClick={() => setIsOpened(!isOpened)}></div>
        </div>
      </WrapperLayout>
    </header>
  );
}
