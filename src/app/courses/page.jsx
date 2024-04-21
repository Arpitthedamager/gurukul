"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/client-only/nevbar/Navbar";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import My_Courses from "../components/client-only/mycourses/MyCourses";

const titles = [
  "Ignite Your Passion with Our Elite Courses",
  "Unlock Your Potential with Cutting-Edge Tech Courses",
  "Explore the Future of Learning with Gurucul Skills",
];

const CoursesPage = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const coursesData = [
    {
      id: 1,
      title: "Web Development",
      onelinedescription:
        "Master the art of web development with HTML, CSS, and JavaScript. Get access to live QnA support.",
      image: "/bronze.jpeg",
      level: "Bronze",
      prize: "999",
    },
    {
      id: 2,
      title: "React Fundamentals",
      onelinedescription:
        "Dive into the world of React and craft interactive UIs. Receive a Gurukul Skills certificate upon completion.",
      image: "/bronze.jpeg",
      level: "Bronze",
      prize: "999",
    },
    {
      id: 3,
      title: "Node.js and Express",
      onelinedescription:
        "Build robust and scalable web applications with Node.js and Express. Elite level income potential.",
      image: "/bronze.jpeg",
      level: "Bronze",
      prize: "999",
    },
    {
      id: 4,
      title: "Python Programming",
      onelinedescription:
        "Unlock the power of Python and embark on your coding journey. Get certified with Gurukul Skills.",
      image: "/platinum.jpeg",
      level: "platinum",
      prize: "1999",
    },
    {
      id: 5,
      title: "Data Science with Python",
      onelinedescription:
        "Delve into data science and harness the potential of Python. Live QnA support available.",
      image: "/platinum.jpeg",
      level: "platinum",
      prize: "1999",
    },
    {
      id: 6,
      title: "UI with Next.js",
      onelinedescription:
        "Explore the world of UI design with Next.js and create captivating interfaces. Earn a Gurukul Skills certificate.",
      image: "/platinum.jpeg",
      level: "platinum",
      prize: "1999",
    },
  ];

  const handleBuyNow = (courseTitle) => {
    console.log(`Buying ${courseTitle}`);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 md:px-10 py-10 md:py-20">
        <h4 className="text-center text-5xl font-extrabold text-yellow-600  ">
          <strong>Courses</strong>
        </h4>
        <p className="text-xl font-extrabold text-center mb-10 md:mb-20 text-white-600">
          <Typewriter
            options={{
              strings: titles,
              autoStart: true,
              loop: true,
              delay: 50,
              deleteSpeed: 50,
            }}
          />
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10 md:gap-20">
          {coursesData.map((course, index) => (
            <motion.div
              key={course.id}
              whileTap={{ scale: 1 }}
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
                  <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-8 hover:bg-sky-700">
                    - {course.level} level income
                  </p>
                  <Link href={`/courses/${course.id}`}>
                  <button
                    className="w-full bg-white text-purple-800 py-2 md:py-4 px-6 md:px-14 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50  hover:from-yellow-700 hover:to-yellow-800"
                    onClick={() => handleBuyNow(course.title)}
                  >
                      Elevate Now
                  </button>
                      </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <My_Courses/>
    </>
  );
};

export default CoursesPage;
