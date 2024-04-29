import React, { useState, useEffect } from "react";
import Link from "next/link";

const My_Courses = () => {
  const coursesFromDB = [
    { id: 1, referCode: "ABC123" },
    { id: 3, referCode: "XYZ789" },
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
    // Add other course objects here...
  ];

  const [coursesToShow, setCoursesToShow] = useState([]);

  useEffect(() => {
    filterCourses();
  }, []);

  const filterCourses = () => {
    if (coursesFromDB.length === 0) {
      const blurredCourses = coursesData.map((course) => ({
        ...course,
        blurred: true,
      }));
      setCoursesToShow(blurredCourses);
    } else {
      const filteredCourses = coursesData.filter((course) => {
        return coursesFromDB.some((dbCourse) => dbCourse.id === course.id);
      });
      setCoursesToShow(filteredCourses);
    }
  };

  const handleBuyNow = (courseTitle) => {
    console.log(`Buying ${courseTitle}`);
  };

  const handleCopy = (courseId) => {
    const course = coursesFromDB.find((c) => c.id === courseId);
    if (course) {
      navigator.clipboard.writeText(course.referCode);
      console.log("Copied Refer Code:", course.referCode);
    } else {
      console.log("Course not found in DB for ID:", courseId);
    }
  };

  const handleShare = async (courseId) => {
    const course = coursesFromDB.find((c) => c.id === courseId);
    if (course) {
      const url = `/refer/${course.referCode}`;
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
      <div className="container mx-auto px-4 md:px-10 py-10 md:py-20">
        <h4 className="text-center text-5xl font-extrabold my-10 mb-16 text-yellow-600">
          <strong>My Courses</strong>
        </h4>

        {coursesFromDB.length === 0 && (
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
                  <Link href={`/not`}>
                    <button
                      className={`w-full bg-white text-purple-800 py-2 md:py-4 px-6 md:px-14 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50  hover:from-yellow-700 hover:to-yellow-800 ${
                        coursesFromDB.length === 0
                          ? "pointer-events-none opacity-50"
                          : ""
                      }`}
                      onClick={() => handleBuyNow(course.title)}
                      disabled={coursesFromDB.length === 0}
                    >
                      Learn now
                    </button>
                  </Link>
                  <div className="flex justify-between items-center mt-4">
                    <button
                      className={`text-sm text-gray-300 hover:text-white focus:outline-none ${
                        coursesFromDB.length === 0
                          ? "pointer-events-none opacity-50"
                          : ""
                      }`}
                      onClick={() => handleCopy(course.id)}
                      disabled={coursesFromDB.length === 0}
                    >
                      Copy Code
                    </button>
                    <button
                      className={`text-sm text-gray-400 hover:text-white focus:outline-none ${
                        coursesFromDB.length === 0
                          ? "pointer-events-none opacity-50"
                          : ""
                      }`}
                      onClick={() => handleShare(course.id)}
                      disabled={coursesFromDB.length === 0}
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
