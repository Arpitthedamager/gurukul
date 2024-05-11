"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../components/client-only/nevbar/Navbar";
import Footer from "../../components/client-only/footer/Footer";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";
const My_sub = () => {
  const { status: data, data: session } = useSession();
  const param = useParams();
  const id = param.id;

  const subcode = session
    ? session.Subcourse.map((Subcourse) => ({
        id: parseInt(Subcourse.Subcourseid), // Convert to integer if needed
        referCode: Subcourse.Subcourse_refer,
      }))
    : [];
  console.log(id);
  console.log(subcode);

  // const subcode = [
  //   { id: 1, referCode: "ABC123" },
  //   { id: 2, referCode: "XYZ789" },
  //   { id: 4, referCode: "XYZ789" },
  //   { id: 5, referCode: "XYZ789" },
  //   { id: 6, referCode: "XYZ789" },
  // ];

  const coursesData = (id) => {
    if (id === "1") {
      return [
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
      ];
    } else if (id === "2") {
      return [
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
      ];
    } else if (id === "3") {
      return [
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
          level: "gold",
          prize: "INR 4299",
        },
        {
          id: 5,
          title: "Platinum Package",
          onelinedescription:
            "Propel career to new heights, conquer tech. Master essential skills and lead the pack with this comprehensive package for success.",
          image: "/platinum.jpeg",
          level: "platinum",
          prize: "INR 6999",
        },
      ];
    }
    // Add other course objects here...
  };

  const [coursesToShow, setCoursesToShow] = useState([]);

  useEffect(() => {
    filterCourses();
  }, [id]); // Trigger useEffect when id changes

  const filterCourses = () => {
    if (id) {
      const courseData = coursesData(id);
      if (Array.isArray(courseData)) {
        // If courseData is an array, filter courses based on subcode
        const filteredCourses = courseData.filter((course) => {
          return subcode.some((dbCourse) => dbCourse.id === course.id);
        });
        setCoursesToShow(filteredCourses);
      } else {
        // If courseData is not an array, check if it exists in subcode
        const existsInSubcode = subcode.some(
          (dbCourse) => dbCourse.id === courseData.id
        );
        if (existsInSubcode) {
          setCoursesToShow([courseData]);
        } else {
          setCoursesToShow([]);
        }
      }
    } else {
      setCoursesToShow([]);
    }
  };

  const handleBuyNow = (courseTitle) => {
    console.log(`Buying ${courseTitle}`);
  };

  const handleCopy = (courseId) => {
    const course = subcode.find((c) => c.id === courseId);
    if (course) {
      navigator.clipboard.writeText(course.referCode);
      console.log("Copied Refer Code:", course.referCode);
    } else {
      console.log("Course not found in DB for ID:", courseId);
    }
  };

  const handleShare = async (courseId) => {
    const course = subcode.find((c) => c.id === courseId);
    if (course) {
      const url = `https://gurukulskills.site/courses`;
      try {
        await navigator.share({ url });
        console.log("Shared Refer Link:", url);
      } catch (error) {
        console.error("Sharing failed:", error.message);
      }
    } else {
      console.log("Course not found in DB for ID:", courseId);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 md:px-10 py-10 md:py-20">
        <h4 className="text-center text-5xl font-extrabold my-10 mb-16 text-yellow-600">
          <strong>My Package Links</strong>
        </h4>

        {coursesToShow.length === 0 && (
          <div className="text-center text-gray-500 my-8">
            <p>You do not have any courses.</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block"
              onClick={() => console.log("Buy Now clicked")}
            >
              Buy Now
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-20">
          {coursesToShow.map((course) => (
            <div
              key={course.id}
              className={`bg-gradient-to-tr from-blue-700 via-purple-700 to-pink-700 rounded-lg overflow-hidden shadow-4xl transition duration-300 transform hover:scale-105 h-full ${
                course.blurred ? "filter blur-lg" : ""
              }`}
            >
              <div className="item-wrapper border rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 h-full ">
                <Image
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 md:h-64 object-cover shadow-md"
                  height={0}
                  width={1000}
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

                  <div className="flex justify-between items-center mt-4">
                    <button
                      className={`text-sm text-gray-300 hover:text-white focus:outline-none ${
                        subcode.length === 0
                          ? "pointer-events-none opacity-50"
                          : ""
                      }`}
                      onClick={() => handleCopy(course.id)}
                      disabled={subcode.length === 0}
                    >
                      Copy Code
                    </button>
                    <button
                      className={`text-sm text-gray-400 hover:text-white focus:outline-none ${
                        subcode.length === 0
                          ? "pointer-events-none opacity-50"
                          : ""
                      }`}
                      onClick={() => handleShare(course.id)}
                      disabled={subcode.length === 0}
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
      <Footer />
    </>
  );
};

export default My_sub;
