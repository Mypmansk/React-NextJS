"use client";
import Image from "next/image";
import xboxIcon from "../public/xbox icon.svg";
import steamIcon from "../public/steam icon.svg";
import styles from "./header.module.scss";
import Navigation from "./navigation";
import WrapperLayout from "@/app/wrapperLayout";
import Logo from "./Logo";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpened, setIsOpened] = useState(true);

  return (
    <header className={styles.header}>
      <WrapperLayout mode={"header"}>
        <Logo ImageHeight={55} ImageWidth={55} />
        <Navigation isOpened={isOpened} navPosition="header" />
        <div className={styles.langContactBlock}>
          <div className={styles.contactBlock}>
            <Link href="/popup">
              <Image
                src={xboxIcon}
                height={30}
                width={30}
                alt="xbox logo"
                className={styles.icon}
              />
            </Link>
            <Link href="/popup">
              <Image
                src={steamIcon}
                height={30}
                width={30}
                alt="staeam logo"
                className={styles.icon}
              />
            </Link>
          </div>
          <div
            className={styles.dropMenu}
            onClick={() => setIsOpened(!isOpened)}></div>
        </div>
      </WrapperLayout>
    </header>
  );
}
