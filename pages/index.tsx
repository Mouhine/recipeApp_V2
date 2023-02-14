import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import InteroSection from "../components/InteroSection";
import TrendyRecipes from "../components/TrendyRecipes";
import Cuisins from "../components/Cuisins";
import Blogs from "../components/Blogs";
import EmailSubscription from "../components/EmailSubscription";
import FeaturedRecipes from "../components/FeaturedRecipes";
export default function Home() {
  return (
    <div className={styles.container}>
      <InteroSection />
      <TrendyRecipes />
      <Cuisins />
      <Blogs />
      <EmailSubscription />
      <FeaturedRecipes />
    </div>
  );
}
