import styles from "./page.module.scss";
import Header from "@/Components/header";
import Footer from "@/Components/footer";

import MainPage from "@/Components/Sections/main";
import AboutPage from "@/Components/Sections/about";
import FeaturePage from "@/Components/Sections/feature";
import RequirementsPage from "@/Components/Sections/requirements";
import QuotesPage from "@/Components/Sections/quotes";
import SubscribePage from "@/Components/Sections/subscribe";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <MainPage />
        <AboutPage />
        <FeaturePage />
        <RequirementsPage />
        <QuotesPage />
        <SubscribePage />
      </main>
      <Footer />
    </>
  );
}
