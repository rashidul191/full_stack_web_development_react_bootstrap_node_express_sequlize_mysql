import React from "react";
import AboutUsSection from "./AboutPageSectiono/AboutUsSection";
import TeamSection from "./HomePageSection/TeamSection";
import ActivitySection from "./HomePageSection/ActivitySection";
import ClientBrandSection from "./HomePageSection/ClientBrandSection";
import ClientReviewSection from "./HomePageSection/ClientReviewSection";
import BannerSection from "../../Components/BannerSection";

export default function AboutPage() {
  return (
    <>

     <BannerSection></BannerSection>

      <AboutUsSection></AboutUsSection>
      <TeamSection></TeamSection>
      <ClientReviewSection></ClientReviewSection>
      <ActivitySection></ActivitySection>
      <ClientBrandSection></ClientBrandSection>
    </>
  );
}
