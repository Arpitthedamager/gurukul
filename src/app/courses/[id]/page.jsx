"use client";
import Footer from "@/app/components/client-only/footer/Footer";
import Navbar from "@/app/components/client-only/nevbar/Navbar";
import React from "react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
const SilverPackage = () => {
  const scriptLoadedRef = useRef(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!scriptLoadedRef.current) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_O1lSJYOUZy2XIZ";
      script.onload = () => {
        scriptLoadedRef.current = true;
      };
      document.getElementById("razorpay-button-container").appendChild(script);
    }
  }, []);

  const handlePaymentEvents = () => {
    if (window.Razorpay) {
      const razorpay = new window.Razorpay({});
      razorpay.on("payment.failed", function (response) {
        setPaymentStatus("Payment failed: " + response.error.description);
      });
      razorpay.on("payment.success", function (response) {
        setPaymentStatus(
          "Payment successful! Payment ID: " + response.razorpay_payment_id
        );
      });
      razorpay.on("payment.pending", function (response) {
        setPaymentStatus("Payment pending: " + response.error.description);
      });
    }
  };

  // Define dynamic data
  const courseData = {
    title: "Silver Package",
    description:
      "This course is designed to help you build a strong narrative in the professional realm. If you want to make your career in social media marketing, then this course is for you. With a wide range of topics, this course makes you a prominent leader in the business sector. From enhancing your professional skills to improving your mental flexibility, this course is a game-changer for your overall growth.",
    price: 3499,
    originalPrice: 3999,
    includes: [
      { label: "52 hours on-demand video", icon: "🎥" },
      { label: "Full lifetime access", icon: "🔓" },
      { label: "Access on mobile and TV", icon: "📱" },
      { label: "Assignments", icon: "📝" },
      { label: "Certificate of Completion", icon: "🎓" },
    ],
    overviewDescription:
      "Who doesn't love to make a strong social media presence? If you are an entrepreneur or beginner who dreams of creating a revolutionary impact, then this package best fits your needs. With this course, you can be confident in making a difference by learning social media trends that help you stand out.",
    learnItems: [
      "Advanced Affiliate Marketing",
      "Content Creation Mastery",
      "VN Mobile Video Editing",
      "Instagram Growth Mastery",
      "Social Media Mastery",
      "Organic Affiliate Marketing",
    ],
    otherBenefits: [
      "Huge Commission On Every Referral",
      "Access To All Live Training",
      "Valuable Bonuses",
    ],
  };

  return (
    <>
      <Navbar />
      <div className=" pt-6">
        <div className="font-sans max-w-4xl mx-auto mt-16 px-4 py-8 border border-gray-200 rounded-lg shadow-lg bg-gradient-to-r from-gray-100 to-white">
          {/* Title and Description */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4 text-gray-900">
              {courseData.title}
            </h1>
            <p className="text-lg text-gray-700">{courseData.description}</p>
          </div>

          {/* Price and Image */}
          <div className="flex flex-col lg:flex-row justify-center items-center mb-12 hover:scale-105 transition-transform duration-300">
            <div className="w-full lg:w-1/2 relative rounded-lg overflow-hidden shadow-md mb-4 lg:mb-0 transform transition-transform duration-300 hover:grayscale-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-sky-500 opacity-80 lg:opacity-100 transition-opacity duration-300"></div>
              <Image
                src="/course_image.jpg"
                alt="Course Image"
                className="w-full h-64 object-cover filter grayscale hover:grayscale-0 transition-filter duration-300"
                width="O"
                height="O"
              />
            </div>
            <div className="max-w-md text-center lg:w-1/2">
              <div className="text-3xl font-bold mb-4 text-gray-900">
                ₹{courseData.price}{" "}
                <span className="text-lg text-gray-500 line-through">
                  ₹{courseData.originalPrice}
                </span>
              </div>
              <div id="razorpay-button-container"></div>
              {/* <button className="bg-blue-500 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">Buy Now</button> */}
            </div>
          </div>
          {errorMessage && (
            <div className="text-center mb-4 text-red-600">{errorMessage}</div>
          )}

          {/* Includes Section */}
          <div className="text-center mb-12 overflow-x-auto">
            <h2 className="text-3xl mb-6 text-gray-900">Includes</h2>
            <div className="flex justify-center flex-wrap gap-8">
              {courseData.includes.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-48 p-4 bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="text-6xl mb-4 text-blue-500">{item.icon}</div>
                  <div className="text-lg text-gray-900">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Course Overview */}
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-6 text-gray-900">Course Overview</h2>
            <p className="text-lg text-gray-700">
              {courseData.overviewDescription}
            </p>
          </div>

          {/* What will you learn? */}
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-6 text-gray-900">
              What will you learn?
            </h2>
            <ul>
              {courseData.learnItems.map((item, index) => (
                <li key={index} className="text-xl text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Other Benefits */}
          <div className="text-center">
            <h2 className="text-3xl mb-6 text-gray-900">Other Benefits</h2>
            <ul>
              {courseData.otherBenefits.map((item, index) => (
                <li key={index} className="text-xl text-gray-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SilverPackage;
