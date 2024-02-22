import styles from "./subscribe.module.scss";
import { Bebas_Neue } from "next/font/google";
import WrapperLayout from "@/app/wrapperLayout";
import Image from "next/image";
import SubscribeImg from "../../public/img/subscribe.png";
import SubscribeSection from "@/Components/subscribeSection";

const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export default function SubscribePage() {
  return (
    <section id="subscribe" className={styles.subscribePage}>
      <WrapperLayout style={styles.subscribeBlock}>
        <Image
          className={styles.subscribeImg}
          src={SubscribeImg}
          alt="subscribe image"
          layout="responsive"
        />
        <div className={styles.subscribeBlockItem}>
          <h3 className={bebas.className}>Want to stay in touch?</h3>
          <h1 className={bebas.className}>newsletter SUBSCRIBE </h1>

          <p>
            In order to start receiving our news, all you have to do is enter
            your email address. Everything else will be taken care of by us. We
            will send you emails containing information about game. We don’t
            spam.
          </p>
          <SubscribeSection />
        </div>
      </WrapperLayout>
    </section>
  );
}
