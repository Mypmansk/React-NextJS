"use client";
import styles from "./page.module.scss";
import Header from "../Components/header";
import Footer from "@/Components/footer";

import MainPage from "@/pages/main";
import AboutPage from "@/pages/about";
import FeaturePage from "@/pages/feature";
import RequirementsPage from "@/pages/requirements";
import QuotesPage from "@/pages/quotes";
import SubscribePage from "@/pages/subscribe";
import { useRef } from "react";

export default function Home() {
  const inputRef = useRef(null);
  return (
    <>
      <Header />
      <main className={styles.main}>
        <MainPage inputRef={inputRef} />
        {/* <AboutPage ref={inputRef} /> */}
        <FeaturePage />
        <RequirementsPage />
        <QuotesPage />
        <SubscribePage />
      </main>
      <Footer />
    </>
  );
}
