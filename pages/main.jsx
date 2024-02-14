import styles from "./main.module.scss";
import Button from "@/Components/button";
import ArrowButton from "@/Components/arrowButton";
import { Bebas_Neue } from "next/font/google";

const bebas = Bebas_Neue({ weight: ["400"], subsets: ["latin"] });

export default function MainPage(props) {
  const handleClick = () => {
    props.inputRef.current.scrollIntoView();
  };

  return (
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
        <ArrowButton onClick={handleClick} />
      </div>
    </section>
  );
}
