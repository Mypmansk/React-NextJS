import styles from "./quotes.module.scss";
import WrapperLayout from "@/app/wrapperLayout";
import { Bebas_Neue } from "next/font/google";
import Button from "@/Components/button";
import FeedbackBlock from "@/Components/feedbackBlock";

const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export default function QuotesPage() {
  return (
    <section id="quotes" className={styles.quotesPage}>
      <WrapperLayout style={styles.adoutBlock}>
        <div className={styles.quotes}>
          <h3 className={bebas.className}>What people think?</h3>
          <h1 className={bebas.className}>Press quotes</h1>
          <p>
            Our goal is to create a product and service that you’re satisfied
            with and use it every day. This is why we’re constantly working on
            our services to make it better every day and really listen to what
            our users has to say.
          </p>
          <Button style={styles.byyy}>
            <span>Read more testimonials</span>
          </Button>
        </div>
        <FeedbackBlock />
      </WrapperLayout>
    </section>
  );
}
