"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/client-only/nevbar/Navbar";
import { useSession } from "next-auth/react";
import Link from "next/link";
import My_Courses from "../components/client-only/mycourses/MyCourses";
import Footer from "../components/client-only/footer/Footer";
import Image from "next/image";

const CoursesPage = () => {
  const { status: data, data: session } = useSession();
  const coursesFromDB = session
    ? session.course.map((course) => parseInt(course.courseid)) // Convert to integer if needed
    : [];

  const coursesData = [
    {
      id: 1,
      title: "Elite Package",
      onelinedescription:
        "Unleash your potential with essential skills. Dominate the digital realm and thrive with this comprehensive package for success.",
      image: "/elite.jpeg",
      level: "Elite",
      prize: " INR 999",
    },
    {
      id: 2,
      title: "Bronze Package",
      onelinedescription:
        " Elevate your career with core skills. Empower your journey with this essential package for professional growth.",
      image: "/bronze.jpeg",
      level: "Bronze",
      prize: "INR 1499",
    },
    {
      id: 3,
      title: "Silver Package",
      onelinedescription:
        "Transform your presence with advanced expertise. Dominate the digital landscape confidently with this comprehensive package for success.",
      image: "/silver.jpeg",
      level: "Silver",
      prize: "INR 2199",
    },
    {
      id: 4,
      title: "Gold Package",
      onelinedescription:
        "Shape tomorrow's world with cutting-edge courses. Become a digital pioneer and innovate with this essential package for professional growth.",
      image: "/gold.jpeg",
      level: "Gold",
      prize: "INR 4299",
    },
    {
      id: 5,
      title: "Platinum Package",
      onelinedescription:
        "Propel career to new heights, conquer tech. Master essential skills and lead the pack with this comprehensive package for success.",
      image: "/platinum.jpeg",
      level: "Platinum",
      prize: "INR 6999",
    },
    {
      id: 6,
      title: "Diamond Package",
      onelinedescription:
        "Command the future, secure the top spot! Elevate your career and lead the way with this essential package for professional growth.",
      image: "/diamond.jpeg",
      level: "Diamond",
      prize: "INR 8999",
    },
  ];

  const coursesToShow = coursesData.filter((course) => !coursesFromDB.includes(course.id));

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-10 md:gap-20 p-8">
          {coursesToShow.map((course, index) => (
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
      {session && <My_Courses />}
      <Footer />
    </>
  );
};

export default CoursesPage;
