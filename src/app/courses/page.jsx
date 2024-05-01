"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/client-only/nevbar/Navbar";
import { useSession } from "next-auth/react";
// import Typewriter from "typewriter-effect";
import Link from "next/link";
import My_Courses from "../components/client-only/mycourses/MyCourses";
import Footer from "../components/client-only/footer/Footer";
import Image from "next/image";


// const titles = [
  //   "Ignite Your Passion with Our Elite Courses",
  //   "Unlock Your Potential with Cutting-Edge Tech Courses",
  //   "Explore the Future of Learning with Gurucul Skills",
  // ];
  
  const CoursesPage = () => {
  const { status: data, data: session } = useSession(); 
  const coursesData = [
    {
      id: 1,
      title: "Elite Package",
      onelinedescription:
        "Master the art of web development with HTML, CSS, and JavaScript. Get access to live QnA support.",
      image: "/elite.jpeg",
      level: "Elite",
      prize: " INR 999",
    },
    {
      id: 2,
      title: "Bronze Package",
      onelinedescription:
        "Dive into the world of React and craft interactive UIs. Receive a Gurukul Skills certificate upon completion.",
      image: "/bronze.jpeg",
      level: "Bronze",
      prize: "INR 1499",
    },
    {
      id: 3,
      title: "Silver Package",
      onelinedescription:
        "Build robust and scalable web applications with Node.js and Express. Elite level income potential.",
      image: "/silver.jpeg",
      level: "Silver",
      prize: "INR 2199",
    },
    {
      id: 4,
      title: "Gold Package",
      onelinedescription:
        "Unlock the power of Python and embark on your coding journey. Get certified with Gurukul Skills.",
      image: "/gold.jpeg",
      level: "gold",
      prize: "INR 4299",
    },
    {
      id: 5,
      title: "Platinum Package",
      onelinedescription:
        "Delve into data science and harness the potential of Python. Live QnA support available.",
      image: "/platinum.jpeg",
      level: "platinum",
      prize: "INR 6999",
    },
    {
      id: 6,
      title: "Diamond Package",
      onelinedescription:
        "Explore the world of UI design with Next.js and create captivating interfaces. Earn a Gurukul Skills certificate.",
      image: "/diamond.jpeg",
      level: "diamond",
      prize: "INR 8999",
    },
  ];

  const handleBuyNow = (courseTitle) => {
    console.log(`Buying ${courseTitle}`);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 md:px-10 py-10 md:py-20">
        <h4 className="text-center text-5xl font-extrabold text-yellow-600 pt-14 md:py-8">
          <strong>Courses</strong>
        </h4>
        {/* <p className="text-xl font-extrabold text-center mb-10 md:mb-20 text-white-600">
          <Typewriter
            options={{
              strings: titles,
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 50,
            }}
          />
        </p> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10 md:gap-20">
          {coursesData.map((course, index) => (
            <div
              key={course.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-gradient-to-tr from-blue-700 via-purple-700 to-pink-700 rounded-lg overflow-hidden shadow-4xl transition duration-300 transform hover:scale-105 h-full ease-in-out"
            >
              <div className="item-wrapper border rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 h-full ">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 md:h-64 object-cover shadow-md"
                  width="O"
                  height="O"
                />
                <div className="p-6 md:p-8 bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-b-lg">
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold mb-4 md:mb-6 text-white">
                    {course.title}
                  </h2>
                  <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-2">
                    {course.onelinedescription}
                  </p>
                  <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-2">
                    - Live QnA support
                  </p>
                  <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-2">
                    - Gurukul Skills certificate
                  </p>
                  <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-8 ">
                    - {course.level} level income
                  </p>
                  <p className="text-2xl md:text-base text-rose-700 mb-4 md:mb-8 ">
                    - {course.prize}
                  </p>

                  <Link href={`/courses/${course.id}`}>
                    <button
                      className="w-full bg-white text-purple-800 py-2 md:py-4 px-6 md:px-14 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50  hover:from-yellow-700 hover:to-yellow-800"
                      onClick={() => handleBuyNow(course.title)}
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {session &&
      <My_Courses />
      }
      <Footer />
    </>
  );
};

export default CoursesPage;
