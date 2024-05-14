import Navbar from "./components/client-only/nevbar/Navbar";
import Footer from "./components/client-only/footer/Footer";
import Leaderboard from "./components/client-only/leader_bord/Leader_Bord";
import FeatureBox from "./components/client-only/featurebox/FeatureBox";
import HeaderSec from "./components/client-only/headersec/HeaderSec";
import Artical from "./components/client-only/artical/Artical";
import FeatureSection from "./components/client-only/featuresection/FeatureSection";

export const metadata = {
  title: "Home Page",
  description: "Welcome to Homepage",
 
};
const keywords = [
  "Gurukul Skills",
  "online courses",
  "skill development",
  "skill enhancement",
  "professional development",
  "learning hub",
  "educational empowerment",
  "mastery workshops",
  "expert-led courses",
  "learning community",
  "knowledge enrichment",
  "competency development",
  "vocational training",
  "practical learning",
  "career advancement courses",
  "hands-on learning",
  "personal growth courses",
  "talent development",
  "lifelong learning",
  "professional skills training",
  "industry-relevant courses",
  "interactive learning",
  "career skills development",
  "practical knowledge",
  "career enhancement",
  "expert guidance",
  "career skills workshops",
  "educational enrichment",
  "learning solutions",
  "professional certification",
  "expert-led workshops",
  "knowledge enhancement",
  "skill-based education",
  "industry-specific training",
  "learning experience",
  "learning modules",
  "career skills advancement",
  "knowledge expansion",
  "talent enrichment",
  "practical training",
  "professional learning",
  "practical skill development",
  "career skills mastery",
  "industry skills training",
  "career-focused training",
  "professional skillsets",
  "career skills empowerment",
  "expert-led seminars",
  "career skills development",
  "expert-led workshops",
  "skill mastery workshops",
  "career skills mastery",
  "industry-focused courses",
  "career skills seminars",
  "career skills advancement",
  "practical skill workshops",
  "career skills mastery",
  "industry skills training",
  "practical skill acquisition",
  "expert-led seminars",
  "career skills empowerment",
  "industry-specific skill development",
  "career skills development pathways",
  "practical skill mastery",
  "career skills empowerment programs",
  "expert skill-building workshops"
];


// Convert keywords array to a string separated by commas
const keywordsString = keywords.join(", ");
const HomePage = () => {
  return (
  <div className="relative">
    <head>   <meta
          name="keywords"
          content={keywordsString}
        />
        </head>
      <Navbar />
      <div className="relative h-[50vh] md:h-[70vh] lg:h-[70vh] xl:h-[80vh] 2xl:h-[90vh] overflow-hidden mt-16">
        <video
          className="absolute top-0 left-0 b w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
          >
          <source src="/video.mp4" type="video/mp4" />
        </video>
        <HeaderSec />
      </div>
      <div className="min-h-screen">
        <div className=" px-8 py-8">
        <Artical />

        <FeatureBox />
        </div>
        {/* <MidSection /> */}
        <Leaderboard />
        <FeatureSection />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
