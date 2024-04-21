"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const My_Courses = () => {
  // Mock data for courses from MongoDB
  const coursesFromDB = [
    { id: 1, referCode: "ABC123" },
    { id: 3, referCode: "XYZ789" },
    // Other course objects...
  ];

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
    // Add other course objects here...
  ];

  const [coursesToShow, setCoursesToShow] = useState([]);

  useEffect(() => {
    filterCourses();
  }, []);

  const filterCourses = () => {
    const filteredCourses = coursesData.filter((course) => {
      return coursesFromDB.some((dbCourse) => dbCourse.id === course.id);
    });
    setCoursesToShow(filteredCourses);
  };

  const handleBuyNow = (courseTitle) => {
    console.log(`Buying ${courseTitle}`);
  };

  const handleCopy = (referCode) => {
    navigator.clipboard.writeText(referCode);
    console.log("Copied Refer Code:", referCode);
  };

  const handleShare = async (referCode) => {
    const url = `/refer/${referCode}`;
    try {
      await navigator.share({ url });
      console.log("Shared Refer Link:", url);
    } catch (error) {
      console.error("Sharing failed:", error.message);
    }
  };

  return (
    <>
      <div className="container mx-auto px-4 md:px-10 py-10 md:py-20">
        <h4 className="text-center text-5xl font-extrabold my-10 text-yellow-600">
          <strong>My Courses</strong>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20">
          {coursesToShow.map((course) => (
            <div
              key={course.id}
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
                  <Link href={`/not`}>
                    <button
                      className="w-full bg-white text-purple-800 py-2 md:py-4 px-6 md:px-14 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50  hover:from-yellow-700 hover:to-yellow-800"
                      onClick={() => handleBuyNow(course.title)}
                    >
                      Learn now
                    </button>
                  </Link>
                  <div className="flex justify-between items-center mt-4">
                    <button
                      className="text-sm text-gray-300 hover:text-white focus:outline-none"
                      onClick={() => handleCopy(course.referCode)}
                    >
                      Copy Code
                    </button>
                    <button
                      className="text-sm text-gray-400 hover:text-white focus:outline-none"
                      onClick={() => handleShare(course.referCode)}
                    >
                      Share Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default My_Courses;
