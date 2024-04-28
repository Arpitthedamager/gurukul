import Footer from "../components/client-only/footer/Footer";
import Navbar from "../components/client-only/nevbar/Navbar";
import WalletPage from "../components/client-only/wallet/wallet";
const Wallet = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <WalletPage/>
      </div>
      <Footer/>
    </>
  );
};

export default Wallet;
