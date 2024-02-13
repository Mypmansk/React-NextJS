import Image from "next/image";
import styles from "./page.module.scss";
import Header from "../Components/header";
import Footer from "@/Components/footer";
import { Bebas_Neue } from "next/font/google";
import ArrowButton from "@/Components/arrowButton";
import WrapperLayout from "./wrapperLayout";
import Button from "@/Components/button";
import FeedbackBlock from "../Components/feedbackBlock";
import SubscribeImg from "../public/img/subscribe.png";
import SubscribeSection from "@/Components/subscribeSection";
import Slider from "@/Components/Slider/slider";

const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <section id="main" className={styles.mainPage}>
          <div>
            <h1 className={bebas.className}>SURVIVE AT ALL COSTS</h1>
            <h3 className={bebas.className}>
              Experience new social battle royale game
            </h3>
            <Button style={styles.button}>
              <span>Buy Now on Steam</span>
              <span>$14.99</span>
            </Button>
          </div>
          <div className={styles.storyButton}>
            <p>The story</p>
            <ArrowButton />
          </div>
        </section>
        {/* <section id="about" className={styles.aboutPage}>
          <WrapperLayout style={styles.adoutBlock}>
            <div className={styles.about}>
              <h3 className={bebas.className}>What is SOS?</h3>
              <h1 className={bebas.className}>social battle royale game</h1>
              <div className={styles.aboutTextBlock}>
                <p className={styles.aboutText}>
                  Each round, you and 15 other contestants compete to escape a
                  deadly island filled with monsters. The trick is: three people
                  can survive. Will you run solo or form friendships with others
                  to escape? <br />
                  <br /> Making the right decisions could be the difference
                  between life and death.
                </p>
              </div>
            </div>
            <Slider />
          </WrapperLayout>
        </section> */}
        <section id="feature" className={styles.featuresPage}>
          <WrapperLayout style={styles.featureWrapper}>
            <div className={styles.featureBlock}>
              <h3 className={bebas.className}>What’s so special?</h3>
              <h1 className={bebas.className}>features</h1>
              <ul>
                <li>
                  <h2 className={bebas.className}>SURVIVE AT ALL COSTS</h2>
                  <p>
                    You have 30 minutes to find a relic, signal for extraction,
                    and grab one of three spots on the rescue chopper.
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
        <section id="requirements" className={styles.requirementsPage}>
          <WrapperLayout>
            <div className={styles.requirementsHeader}>
              <h3 className={bebas.className}>
                Can My Computer Run this game?
              </h3>
              <h1 className={bebas.className}>system requirements</h1>
            </div>
            <table className={styles.requirementsTable}>
              <tbody>
                <tr>
                  <td>
                    <h3 className={bebas.className}>OS:</h3>
                    <p>Windows 7 64-bit only (No OSX support at this time)</p>
                  </td>
                  <td>
                    <h3 className={bebas.className}>PROCESSOR:</h3>
                    <p>Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3 className={bebas.className}>MEMORY:</h3>
                    <p>8 GB RAM</p>
                  </td>
                  <td>
                    <h3 className={bebas.className}>storage:</h3>
                    <p>8 GB available space</p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <h3 className={bebas.className}>GRAPHICS:</h3>
                    <p>
                      NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB
                      DirectX11 (Shader Model 5)
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </WrapperLayout>
        </section>
        <section id="quotes" className={styles.quotesPage}>
          <WrapperLayout style={styles.adoutBlock}>
            <div className={styles.quotes}>
              <h3 className={bebas.className}>What people think?</h3>
              <h1 className={bebas.className}>Press quotes</h1>
              <p>
                Our goal is to create a product and service that you’re
                satisfied with and use it every day. This is why we’re
                constantly working on our services to make it better every day
                and really listen to what our users has to say.
              </p>
              <Button>
                <span>Read more testimonials</span>
              </Button>
            </div>
            <FeedbackBlock />
          </WrapperLayout>
        </section>
        <section className={styles.subscribePage}>
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
                In order to start receiving our news, all you have to do is
                enter your email address. Everything else will be taken care of
                by us. We will send you emails containing information about
                game. We don’t spam.
              </p>
              <SubscribeSection />
            </div>
          </WrapperLayout>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}
