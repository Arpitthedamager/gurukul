import Navbar from "../components/client-only/nevbar/Navbar";
import FeatureBox from "../components/client-only/featurebox/FeatureBox";
import My_subs from "../components/client-only/subscription/Subscription";
import Footer from "../components/client-only/footer/Footer";
const SubscriptionPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <FeatureBox />
      </div>
      <My_subs />
      <Footer />
    </>
  );
};

export default SubscriptionPage;
