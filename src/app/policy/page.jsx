import React from 'react';
import Navbar from '../components/client-only/nevbar/Navbar';
import Footer from '../components/client-only/footer/Footer';

const Policy = () => {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto px-6 py-12 mt-16 mb-16">
      <h2 className="text-2xl text-center font-semibold mb-4 ">Our Policy</h2>
      
      <p className="text-gray-600 z-50 mb-4">
        1. We issue refunds for the purchases within 2 hours of the original purchase of the packages.
              </p>

      <p className="text-gray-600 z-50 mb-4">
        2. A payment gateway fee @ 2% of the paid amount and processing fee @5% of the paid amount will be deducted from the amount to be refunded.
      </p>

      <p className="text-gray-600 z-50 mb-4">
        3. No Refund will be given to the customer for the purchase of any package made by the customer directly from the "www.gurukulskills.site" or through the affiliate link of the person who referred him to the Gurukulskills website after 2 hours of the purchase under any circumstances.
              </p>

      <p className="text-gray-600 z-50 mb-4">
        4. For the refund, you need to mail at <a href='#'className=' text-blue-900 '>gurukulskiils57@gmail.com/</a> with registered e-mail ID only
              </p>

      <p className="text-gray-600 z-50 mb-4">
        5.Full Name Registered e-mail IDRegistration dateScreen shot of Payment Invoice with date and time
              </p>

      <p className="text-gray-600 z-50">
      No refund request will be accepted without above mentioned details.
            </p>
            <p className="text-rose-500 z-50">
            Please note that for the "Refund" you need to mail us only at gurukulskills57@gmail.com
            </p>
    </div>
    <Footer/>
    </>
  );
};

export default Policy;
