"use client";
import { motion } from "framer-motion";
import styles from "./slider.module.scss";
import { useState } from "react";
import Image from "next/image";
import firstImage from "../../public/img/Slider/image1.png";
import fsecondImage from "../../public/img/Slider/image2.png";
import thirdImage from "../../public/img/Slider/image3.png";
import ArrowButton from "../arrowButton";

export default function Slider() {
  const [firsBlockPosition, setFirsBlockPosition] = useState({
    x: 0,
    zIndex: 3,
    scale: 1,
  });
  const [secondBlockPosition, setSecondBlockPosition] = useState({
    x: 50,
    zIndex: 2,
    scale: 0.9,
  });
  const [thirdBlockPosition, setThirdBlockPosition] = useState({
    x: 100,
    zIndex: 1,
    scale: 0.8,
  });

  function changePosition(position) {
    switch (position.x) {
      case 0:
        position.x = 100;
        position.zIndex = 1;
        position.scale = 0.8;
        break;
      case 50:
        position.x = 0;
        position.zIndex = 3;
        position.scale = 1;
        break;
      case 100:
        position.x = 50;
        position.zIndex = 2;
        position.scale = 0.9;
        break;
      default:
        break;
    }
    return { x: position.x, zIndex: position.zIndex, scale: position.scale };
  }

  return (
    <section className={styles.sliderBlock}>
      <div className={styles.sliderBox}>
        <motion.div className={styles.sliderItem} animate={firsBlockPosition}>
          <Image src={firstImage} fill alt="logo" />
        </motion.div>
        <motion.div className={styles.sliderItem} animate={secondBlockPosition}>
          <Image src={fsecondImage} fill alt="logo" />
        </motion.div>
        <motion.div className={styles.sliderItem} animate={thirdBlockPosition}>
          <Image src={thirdImage} fill alt="logo" />
        </motion.div>
      </div>
      <ArrowButton
        orientasion={true}
        onClick={() => {
          setFirsBlockPosition(changePosition(firsBlockPosition));
          setSecondBlockPosition(changePosition(secondBlockPosition));
          setThirdBlockPosition(changePosition(thirdBlockPosition));
        }}
      />
    </section>
  );
}
