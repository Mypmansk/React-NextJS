import styles from "./feature.module.scss";
import { Bebas_Neue } from "next/font/google";
import WrapperLayout from "@/app/wrapperLayout";

const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export default function FeaturePage() {
  return (
    <section id="feature" className={styles.featuresPage}>
      <WrapperLayout style={styles.featureWrapper}>
        <div className={styles.featureBlock}>
          <h3 className={bebas.className}>What’s so special?</h3>
          <h1 className={bebas.className}>features</h1>
          <ul>
            <li>
              <h2 className={bebas.className}>SURVIVE AT ALL COSTS</h2>
              <p>
                You have 30 minutes to find a relic, signal for extraction, and
                grab one of three spots on the rescue chopper.
              </p>
            </li>
            <li>
              <h2 className={bebas.className}>CREATE ALLIES AND ENEMIES</h2>
            </li>
            <li>
              <h2 className={bebas.className}>IMPRESS THE AUDIENCE</h2>
            </li>
          </ul>
        </div>
      </WrapperLayout>
    </section>
  );
}
