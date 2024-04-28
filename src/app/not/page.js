import Footer from "../components/client-only/footer/Footer";
import Navbar from "../components/client-only/nevbar/Navbar";
const not = () => {
  return (
    <>
      <Navbar />
      <div className=" text-center pt-64 text-4xl text-gray-600 mb-64">
        <h2 >please wait for update</h2>
      </div>
      <Footer/>
    </>
  );
};

export default not;
