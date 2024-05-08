import React from "react";
import Navbar from "../components/client-only/nevbar/Navbar";
import Footer from "../components/client-only/footer/Footer";

const Refund = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="container mx-auto px-6 py-12 mt-16">
          <h2 className="text-2xl text-center font-semibold mb-4 ">
            Refund Policy
          </h2>

          <p className="text-white z-50 mb-4">
             We issue refunds for the purchases within 2 hours of the original purchase of the packages.
          </p>

          <p className="text-white z-50 mb-4">
             A payment gateway fee @ 2% of the paid amount and processing fee @5% of the paid amount will be deducted from the amount to be refunded.
          </p>

          <p className="text-white-600 z-50 mb-4">
          No Refund will be given to the customer for the purchase of any package made by the customer directly from the Gurukul Skills website <a href="" className="text-blue-400 mr-1 hover:text-rose-700">
            www.Gurukul.site   
            </a>
                or through the affiliate link of the person who referred him to the LeadsGuru website after 2 hours of the purchase under any circumstances.
          </p>

          <p className="text-white-600 z-50 mb-4">
          For the refund, you need to mail at requests Email:
              <a
                href="mailto:gurukulskills57@gmail.com "
                className=" hover:text-blue-400 transition duration-300 ease-in-out m-1"
              >
                gurukulskills57@gmail.com
              </a> In the following format with registered e-mail ID only.
          </p>

          <p className="text-white-600 z-50 mb-1">
          1. Full Name
          </p>

          <p className="text-white-600 z-50 mb-1">
          2. Registered e-mail ID
          </p>
          <p className="text-white-600 z-50 mb-1">
          3. Registration date
          </p> <p className="text-white-600 z-50 mb-1">
          4. Screen shot of Payment Invoice with date and time (You must have received on e-mail/message when you paid)
          </p> <p className="text-white-600 z-50 mb-1">
          5. Reason for refund
          </p>
          <p className="text-white-600 z-50 mb-3">
          No refund request will be accepted without above mentioned details.
          </p><p className="text-white-600 z-50 mb-3">
          5. Reason for refund
          </p><p className="text-rose-600 z-50 mb-3">
          Please note that for the “Refund” you need to mail us only at requests
          <a
                href="mailto:gurukulskills57@gmail.com "
                className="text-blue-400 hover:text-red-400 transition duration-300 ease-in-out m-1"
              >
                gurukulskills57@gmail.com
              </a>.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Refund;