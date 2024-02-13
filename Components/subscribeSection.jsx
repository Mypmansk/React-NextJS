import Button from "./button";
import styles from "./subscribeSection.module.scss";

export default function SubscribeSection() {
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
          autoComplete="email"
        />
      </div>
      <Button>Subscribe now</Button>
    </form>
  );
}
