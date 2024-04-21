import Navbar from "../components/client-only/nevbar/Navbar";
const not = () => {
  return (
    <>
      <Navbar />
      <div className=" text-center mt-64 text-4xl text-gray-600">
        <h2 >please wait for update</h2>
      </div>
    </>
  );
};

export default not;
