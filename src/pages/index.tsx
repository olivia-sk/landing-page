import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Product from "@/components/ProductSection";
import SubBannerSection from "@/components/SubBannerSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <Product />
      <SubBannerSection />
      <Footer />
      
    </main>
  );
}
