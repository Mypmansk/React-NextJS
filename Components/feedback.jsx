import Image from "next/image";
import { Bebas_Neue } from "next/font/google";
import twitter from "@/public/twitter.svg";
import styles from "./feedback.module.scss";

const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });

export default function Feedback(props) {
  return (
    <div className={styles.feedbackBlock}>
      <div className={styles.feedbackUser}>
        <div className={styles.avatarBlock}>
          <Image src={props.avatar_url} height={65} width={65} alt="avatar" />
        </div>
        <div className={styles.nameBlock}>
          <div>
            <span className={bebas.className}>
              {props.name + " " + props.surname}
            </span>
            <p className={styles.feedbackGrey}>{props.profession}</p>
          </div>
          <Image src={twitter} height={18} width={18} alt="avatar" />
        </div>
      </div>
      <p>“{props.feedback}”</p>
      <p className={styles.feedbackGrey}>{props.date_feedback}</p>
    </div>
  );
}
