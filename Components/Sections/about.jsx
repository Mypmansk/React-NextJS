import styles from "./about.module.scss";
import WrapperLayout from "@/app/wrapperLayout";
import Slider from "@/Components/Slider/slider";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export default function AboutPage() {
  return (
    <section id="about" className={styles.aboutPage}>
      <WrapperLayout style={styles.adoutBlock}>
        <div className={styles.about}>
          <h3 className={bebas.className}>What is SOS?</h3>
          <h1 className={bebas.className}>social battle royale game</h1>
          <div className={styles.aboutTextBlock}>
            <p className={styles.aboutText}>
              Each round, you and 15 other contestants compete to escape a
              deadly island filled with monsters. The trick is: three people can
              survive. Will you run solo or form friendships with others to
              escape? <br />
              <br /> Making the right decisions could be the difference between
              life and death.
            </p>
          </div>
        </div>
        <Slider />
      </WrapperLayout>
    </section>
  );
}
