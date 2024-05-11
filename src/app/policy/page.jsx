import React from "react";
import Navbar from "../components/client-only/nevbar/Navbar";
import Footer from "../components/client-only/footer/Footer";
import Head from "next/head";



const Policy = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20">
      <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Privacy Policy - Gurukul Skills</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4 ">Privacy Policy</h1>
      <p className="mb-8">This Privacy Policy describes how Gurukul Skills (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) collects, uses, and shares information when you use our learning courses website (the &quot;Service&quot;).</p>

      <h2 className="text-xl font-bold mb-4">Information We Collect</h2>
      <p className="mb-8">We may collect personal information such as names, email addresses, and payment information when you register or make purchases on our website.</p>

      <h2 className="text-xl font-bold mb-4">How We Use Information</h2>
      <p className="mb-8">We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you about your account and promotions.</p>

      <h2 className="text-xl font-bold mb-4">Sharing of Information</h2>
      <p className="mb-8">We may share your personal information with third-party service providers who assist us in delivering our services. We may also disclose information when required by law or to protect our rights.</p>

      <h2 className="text-xl font-bold mb-4">Data Security</h2>
      <p className="mb-8">We take reasonable measures to protect the security of your personal information, but no method of transmission over the internet or electronic storage is 100% secure.</p>

      <h2 className="text-xl font-bold mb-4">Your Choices</h2>
      <p className="mb-8">You can choose not to provide certain information, but this may limit your ability to use certain features of the Service.</p>

      <h2 className="text-xl font-bold mb-4">Changes to This Privacy Policy</h2>
      <p className="mb-8">We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

      <h2 className="text-xl font-bold mb-4">Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:gurukulskills57@gmail.com" className="text-blue-500">gurukulskills57@gmail.com</a>.</p>
    </div>
      </div>
      <Footer />
    </>
  );
};

export default Policy;
