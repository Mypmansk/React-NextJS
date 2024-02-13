import Button from "./button";
import { Open_Sans } from "next/font/google";
import styles from "./subscribe.module.scss";

const openSans = Open_Sans({ weight: "700", subsets: ["latin"] });

export default function Subscribe() {
  return (
    <form className={styles.formBox}>
      {/* <label for="name">Your email address </label> */}
      <div className={styles.inputBlock}>
        <span>Your email address</span>
        <input
          type="email"
          name="name"
          id="name"
          required
          pattern="[A-Za-z]+"
          placeholder="aliciliniavopir@gmail.com"
        />
      </div>

      <Button fontStyle={openSans.className}>Subscribe now</Button>
    </form>
  );
}
