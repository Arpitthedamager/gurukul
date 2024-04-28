import React from 'react';
import Navbar from '../components/client-only/nevbar/Navbar';
import Footer from '../components/client-only/footer/Footer';

const Disclaimer = () => {
  return (
    <>
    <Navbar/>
    <div >
    <div className="container mx-auto px-6 py-12 mt-16">
      <h2 className="text-2xl text-center font-semibold mb-4 ">Disclaimer</h2>
      
      <p className="text-gray-600 z-50 mb-4">
        1. The sum that a client pays at Gurukul Skills site is just for the online courses gave in the Product bought by the client.
      </p>

      <p className="text-gray-600 z-50 mb-4">
        2. No amount is paid by the client to turn into an affiliate with Gurukul Skills.
      </p>

      <p className="text-gray-600 z-50 mb-4">
        3. Although we make every effort to ensure that we accurately reflect all of the goods and services reviewed on this website and their income potential, it should be noted that earnings and income statements made by Gurukulskills.site advertisers / sponsors are projections only of what we assume you might earn. There is no assurance that you will make those income levels and you accept the risk that individual earnings and income statements will vary.
      </p>

      <p className="text-gray-600 z-50 mb-4">
        4. The purchase made by the consumer directly from the Gurukul Skills website or via the affiliate connection of the individual who referred the purchaser to the Gurukul Skills website for his / her desired product does not guarantee any profit or financial return whatsoever.
      </p>

      <p className="text-gray-600 z-50 mb-4">
        5. Through use of our information, products and services should be focused on your own proper research and you acknowledge that Gurukul Skills is not responsible for any successes and failures of your company which is directly or indirectly linked to the purchase and use of our information, products and services reviewed or promoted on this website.
      </p>

      <p className="text-gray-600 z-50">
        There is no assurance that examples of past earnings can be duplicated in the future. We cannot guarantee your future results and/or success. There are some unknown risks in business and on the internet that we cannot foresee which could reduce the results you experience. We are not responsible for your actions.
      </p>
    </div>
    </div>
    <Footer/>
    </>
  );
};

export default Disclaimer;
