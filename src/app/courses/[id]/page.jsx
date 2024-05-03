"use client";
import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Navbar from "../../components/client-only/nevbar/Navbar";
import Footer from "../../components/client-only/footer/Footer";
import { useParams } from "next/navigation";

const SilverPackage = () => {
  const scriptLoadedRef = useRef(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { status: data, data: session } = useSession();
  const router = useRouter();
  const param = useParams();
  // Define courseId from params
  const id = param.id;
  console.log(id);

  // Define side effects using useEffect
  
  useEffect(() => {
    // Dynamically load Razorpay script based on courseId
    if (!scriptLoadedRef.current && id) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id =
      id === "1"
      ? "pl_O1lSJYOUZy2XIZ"
      : "pl_O626nJcqnawAkg";
      script.onload = () => {
        scriptLoadedRef.current = true;
      };
      document.getElementById("razorpay-button-container").appendChild(script);
    }
  }, [id]); // Trigger effect when id changes
  useEffect(() => {
    // Redirect to login page if session is not available
    if (!session) {
      router.replace("/login");
    }
  }, [session, router]);

  // Define function to fetch course data based on id
  const fetchCourseData = (courseId) => {
    // Define course data based on courseId
    if (courseId === "1") {
      return {
        title: "Silver Course",
        description: "Description of Silver Course",
        price: 3499,
        originalPrice: 3999,
        includes: [
          { label: "52 hours on-demand video", icon: "🎥" },
          { label: "Full lifetime access", icon: "🔓" },
          { label: "Access on mobile and TV", icon: "📱" },
          { label: "Assignments", icon: "📝" },
          { label: "Certificate of Completion", icon: "🎓" },
        ],
        overviewDescription: "Overview description of Silver Course",
        otherBenefits: [
          "Huge Commission On Every Referral",
          "Access To All Live Training",
          "Valuable Bonuses",
        ],
        img: "/elite.jpeg",

      };
    } else if (courseId === "2") {
      return {
        title: "Elite Course",
        description: "Description of Elite Course",
        price: 4999,
        originalPrice: 5999,
        includes: [
          { label: "100 hours on-demand video", icon: "🎥" },
          { label: "Full lifetime access", icon: "🔓" },
          { label: "Access on mobile and TV", icon: "📱" },
          { label: "Assignments and quizzes", icon: "📝" },
          { label: "Certificate of Completion", icon: "🎓" },
        ],
        overviewDescription: "Overview description of Elite Course",
        otherBenefits: [
          "Huge Commission On Every Referral",
          "Access To All Live Training",
          "Valuable Bonuses",
        ],
        learnItems: [
          "Learn Item 1",
          "Learn Item 2",
          "Learn Item 3",
          "Learn Item 4",
          "Learn Item 5",
          "Learn Item 6",
        ],
        img: "/elite.jpeg",
      };
    }

    // Return empty object if courseId doesn't match
    return {};
  };

  // Fetch course data based on id
  const courseData = fetchCourseData(id);

  // Render the SilverPackage component
  return (
    <>
      <Navbar />
      <div className="pt-6">
        <div className="font-sans max-w-4xl mx-auto mt-16 px-4 py-8 border border-gray-200 rounded-lg shadow-lg bg-gradient-to-r from-gray-100 to-white">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4 text-gray-900">
              {courseData.title}
            </h1>
            <p className="text-lg text-gray-700">{courseData.description}</p>
          </div>

          <div className="flex flex-col lg:flex-row justify-center items-center mb-12 hover:scale-105 transition-transform duration-300">
            <div className="w-full lg:w-1/2 relative rounded-lg overflow-hidden shadow-md mb-4 lg:mb-0 transform transition-transform duration-300 hover:grayscale-0">
              {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-sky-500 opacity-80 lg:opacity-100 transition-opacity duration-300"></div> */}
              <img
                src={courseData.img}
                alt="Course Image"
                className="w-full h-64 object-cover hover:grayscale-0 transition-filter duration-300"
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
              <form id="razorpay-button-container"></form>
            </div>
          </div>
          {errorMessage && (
            <div className="text-center mb-4 text-red-600">{errorMessage}</div>
          )}

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

          <div className="text-center mb-12">
            <h2 className="text-3xl mb-6 text-gray-900">Course Overview</h2>
            <p className="text-lg text-gray-700">
              {courseData.overviewDescription}
            </p>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl mb-6 text-gray-900">
              What will you learn?
            </h2>
            <ul>
              {courseData.learnItems &&
                courseData.learnItems.map((item, index) => (
                  <li key={index} className="text-xl text-gray-700">
                    {item}
                  </li>
                ))}
            </ul>
          </div>

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
