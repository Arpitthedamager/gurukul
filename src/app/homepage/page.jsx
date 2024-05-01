import React from "react";
import Navbar from "../components/client-only/nevbar/Navbar";
import HeaderSec from "../components/client-only/headersec/HeaderSec";
import FeatureBox from "../components/client-only/featurebox/FeatureBox";
import Leaderboard from "../components/client-only/leader_bord/Leader_Bord";
import FeaturesSection from "../components/client-only/featuresection/FeatureSection";
import Footer from "../components/client-only/footer/Footer";
import Artical from "../components/client-only/artical/Artical";

export const metadata = {
  title: "Home Page",
  description: "Welcome to Homepage",
};

const HomePage = () => {
  return (
    <div className="relative">
      <Navbar />
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh] 2xl:h-[90vh] overflow-hidden mt-16">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
          >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <HeaderSec />
      </div>
      <div className="min-h-screen">
        <Artical />
        <FeatureBox />
        {/* <MidSection /> */}
        <Leaderboard />
        <FeaturesSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
