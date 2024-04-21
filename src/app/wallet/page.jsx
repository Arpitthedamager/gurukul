import Navbar from "../components/client-only/nevbar/Navbar";
import WalletPage from "../components/client-only/wallet/wallet";
const Wallet = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <WalletPage/>
      </div>
    </>
  );
};

export default Wallet;
