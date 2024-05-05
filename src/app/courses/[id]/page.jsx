// app/courses/[id]/page.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Navbar from "../../components/client-only/nevbar/Navbar";
import Footer from "../../components/client-only/footer/Footer";

const SilverPackage = () => {
  const scriptLoadedRef = useRef(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { status: data, data: session } = useSession();
  const router = useRouter();
  const param = useParams();
  // Define courseId from params
  const id = param.id;
  const email = session.user.email;
  console.log(email);

  // Define side effects using useEffect

  useEffect(() => {
    // Dynamically load Razorpay script based on courseId
    if (!scriptLoadedRef.current && id) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id =
        id === "1" ? "pl_O1lSJYOUZy2XIZ" : "pl_O626nJcqnawAkg";
      script.onload = () => {
        scriptLoadedRef.current = true;
      };
      document.getElementById("razorpay-button-container").appendChild(script);
    }
  }, [id]); // Trigger effect when id changes
  // useEffect(() => {
  //   // Redirect to login page if session is not available
  //   if (!session) {
  //     router.replace("/login");
  //   }
  // }, [session, router]);
  const handleAddCourse = async () => {
    try {
      const data = {
        email,
        courseId: id,
      };
      console.log("fuck", data);
      const response = await fetch("../../api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to add course. Server responded with error.");
      }

      const responseData = await response.text();
      if (responseData) {
        const jsonData = JSON.parse(responseData);
        console.log(jsonData);
        // Handle the JSON data
      } else {
        console.log("fuck");
        // Handle empty response
      }
      console.log(responseData.message); // Assuming the backend API returns a success message
    } catch (error) {
      console.error("There was a problem with the request:", error);
      setErrorMessage("Failed to add course. Please try again later.");
    }
  };

  // Define function to fetch course data based on id
  const fetchCourseData = (courseId) => {
    // Define course data based on courseId
    if (courseId === "1") {
      return {
        title: "Elite Package",
        description:
          "The Affiliate Elite Package provides comprehensive tools and strategies for maximizing affiliate marketing success. With advanced analytics, targeted training, and exclusive resources, it empowers affiliates to optimize their campaigns and boost their earnings to the next level.",
        price: 999,
        originalPrice: 1499,
        includes: [
          { label: "20 hours on-demand video", icon: "🎥" },
          { label: "Full lifetime access", icon: "🔓" },
          { label: "Access on mobile and TV", icon: "📱" },
          { label: "Assignments", icon: "📝" },
          { label: "Certificate of Completion", icon: "🎓" },
        ],
        overviewDescription: "Overview description of Elite Course",
        otherBenefits: [
          "Huge Commission On Every Referral upto 87%",
          "Access To All Live Training",
          "Valuable Bonuses",
        ],
        learnItems: [
          "Networking",
          "Mentorship",
          "Technical Skills",
          "Online Growth Coaching",
          "Basic Financial Management",
        ],
        img: "/elite.jpeg",
      };
    } else if (courseId === "2") {
      return {
        title: "Bronze  Package",
        description:
          "Our Bronze Package is meticulously crafted to empower your growth in the dynamic professional landscape. If you aspire to thrive in fields like MS-Office tools, cracking Interview or in any business sector, this course bundle is your gateway to success. With a diverse range of topics, this comprehensive package positions you as a standout leader in your chosen field. From honing your professional skills to enhancing your mental flexibility, the Bronze Package is poised to be a transformative force driving your overall growth.",
        price: 1499,
        originalPrice: 2500,
        includes: [
          { label: "40 hours on-demand video", icon: "🎥" },
          { label: "Full lifetime access", icon: "🔓" },
          { label: "Access on mobile and TV", icon: "📱" },
          { label: "Assignments and quizzes", icon: "📝" },
          { label: "Certificate of Completion", icon: "🎓" },
        ],
        overviewDescription:
          "Overview for Bronze Package Unlock a world of opportunities with our carefully curated Bronze Course Bundle, designed to equip you with essential skills that are indispensable in today's professional landscape. Whether you're a student looking to bolster your resume or a seasoned professional aiming to enhance your proficiency, this comprehensive package has something for everyone. We've carefully selected courses that cover essential skills demanded by employers across industries. With hands-on training and practical insights, you'll be well-prepared for real-world challenges. Our courses are led by industry experts who bring their knowledge and experience to the virtual classroom, ensuring you receive top-notch education. We believe in making quality education accessible to all. The Bronze Course Bundle offers incredible value for your investment in personal and professional growth. Take the first step toward a brighter future with Gurukul Skills.",
        otherBenefits: [
          "Huge Commission On Every Referral upto 87%",
          "Access To All Live Training",
          "Valuable Bonuses",
        ],
        learnItems: [
          "Ms Word Course",
          "Ms Excel Course",
          "Time Management",
          "Comunication Skills",
          "Ms Powerpoint Course",
          "Interview Mastery Course",
          "Freelancing Mastery Course",
        ],
        img: "/bronze.jpeg",
      };
    } else if (courseId === "3") {
      return {
        title: "Silver Package",
        description:
          "This course is designed to help you build a strong narrative in the professional realm. If you want to make your career in social media marketing, then this course is for you. Having a wide range of topics, this course makes you a prominent leader in the business sector. From enhancing your professional skills to improving your mental flexibility, this course is going to be a game-changer for your overall growth.",
        price: 1999,
        originalPrice: 2999,
        includes: [
          { label: "60 hours on-demand video", icon: "🎥" },
          { label: "Full lifetime access", icon: "🔓" },
          { label: "Access on mobile and TV", icon: "📱" },
          { label: "Assignments and quizzes", icon: "📝" },
          { label: "Certificate of Completion", icon: "🎓" },
        ],
        overviewDescription:
          "Who doesn't love to make a strong social media presence? If you are an entrepreneur or a beginner who dreams to create a revolutionary impact then this package best fits your needs. With this course, now you can be confident in making a difference and learning social media trends that help you stand out.",
        otherBenefits: [
          "Huge Commission On Every Referral upto 87%",
          "Access To All Live Training",
          "Valuable Bonuses",
        ],
        learnItems: [
          "Finance",
          "Facebook ADS",
          "Digital Marketing",
          "Affiliate Marketing",
          "Social Media Mastery",
          "Personal Development",
          "VN Mobile Video Editing",
          "Content Creation Mastery",
          "Instagram Growth Mastery",
          "Organic Affiliate Marketing",
        ],
        img: "/silver.jpeg",
      };
    } else if (courseId === "4") {
      return {
        title: "Gold Course",
        description:
          "With the ever-evolving industry, upgrading yourself to the latest trends and technologies is necessary. This package is designed to impart the learners with essential soft skills. To bring a transformation in your field of expertise requires an evidence-based teaching pedagogy that is best suited for your professional and personal growth. This course package will help you to reach your ultimate goal and receive satisfactory results in your personality in a short span of time.",
        price: 2999,
        originalPrice: 5000,
        includes: [
          { label: "85 hours on-demand video", icon: "🎥" },
          { label: "Full lifetime access", icon: "🔓" },
          { label: "Access on mobile and TV", icon: "📱" },
          { label: "Assignments and quizzes", icon: "📝" },
          { label: "Certificate of Completion", icon: "🎓" },
        ],
        overviewDescription:
          "Nothing comes easy as the saying goes. It takes a lot of effort to manifest your footing in the professional industry. With everyone competing to make it to the top, it becomes essential to upgrade yourself with the necessary skill set for your growth. Gurukul introduces you to a variety of courses that help you in taking your career to a higher level. This course covers everything from teaching Personality Development, Communication Skills, Spoken English Mastery, Interview Mastery, Leadership, and Time Management, and How to network with people. So what are you waiting for? This is your opportunity to become a leader of your realm.",
        otherBenefits: [
          "Huge Commission On Every Referral upto 87%",
          "Access To All Live Training",
          "Valuable Bonuses",
        ],
        learnItems: [
          "Sales Funnel Creation",
          "Facebook Ads Mastery",
          "Spoken English Mastery",
          "Public Speaking Mastery",
          "Email Marketing Mastery",
          "Communication Mastery",
          "Advanced Affiliate Marketing",
        ],
        img: "/bronze.jpeg",
      };
    } else if (courseId === "2") {
      return {
        title: "Bronze  Course",
        description:
          "Our Bronze Package is meticulously crafted to empower your growth in the dynamic professional landscape. If you aspire to thrive in fields like MS-Office tools, cracking Interview or in any business sector, this course bundle is your gateway to success. With a diverse range of topics, this comprehensive package positions you as a standout leader in your chosen field. From honing your professional skills to enhancing your mental flexibility, the Bronze Package is poised to be a transformative force driving your overall growth.",
        price: 1499,
        originalPrice: 2500,
        includes: [
          { label: "100 hours on-demand video", icon: "🎥" },
          { label: "Full lifetime access", icon: "🔓" },
          { label: "Access on mobile and TV", icon: "📱" },
          { label: "Assignments and quizzes", icon: "📝" },
          { label: "Certificate of Completion", icon: "🎓" },
        ],
        overviewDescription:
          "Overview for Bronze Package Unlock a world of opportunities with our carefully curated Bronze Course Bundle, designed to equip you with essential skills that are indispensable in today's professional landscape. Whether you're a student looking to bolster your resume or a seasoned professional aiming to enhance your proficiency, this comprehensive package has something for everyone. We've carefully selected courses that cover essential skills demanded by employers across industries. With hands-on training and practical insights, you'll be well-prepared for real-world challenges. Our courses are led by industry experts who bring their knowledge and experience to the virtual classroom, ensuring you receive top-notch education. We believe in making quality education accessible to all. The Bronze Course Bundle offers incredible value for your investment in personal and professional growth. Take the first step toward a brighter future with Gurukul Skills.",
        otherBenefits: [
          "Huge Commission On Every Referral upto 87%",
          "Access To All Live Training",
          "Valuable Bonuses",
        ],
        learnItems: [
          "Ms Word Course",
          "Ms Excel Course",
          "Time Management",
          "Comunication Skills",
          "Ms Powerpoint Course",
          "Interview Mastery Course",
          "Freelancing Mastery Course",
        ],
        img: "/bronze.jpeg",
      };
    } else if (courseId === "2") {
      return {
        title: "Bronze  Course",
        description:
          "Our Bronze Package is meticulously crafted to empower your growth in the dynamic professional landscape. If you aspire to thrive in fields like MS-Office tools, cracking Interview or in any business sector, this course bundle is your gateway to success. With a diverse range of topics, this comprehensive package positions you as a standout leader in your chosen field. From honing your professional skills to enhancing your mental flexibility, the Bronze Package is poised to be a transformative force driving your overall growth.",
        price: 1499,
        originalPrice: 2500,
        includes: [
          { label: "100 hours on-demand video", icon: "🎥" },
          { label: "Full lifetime access", icon: "🔓" },
          { label: "Access on mobile and TV", icon: "📱" },
          { label: "Assignments and quizzes", icon: "📝" },
          { label: "Certificate of Completion", icon: "🎓" },
        ],
        overviewDescription:
          "Overview for Bronze Package Unlock a world of opportunities with our carefully curated Bronze Course Bundle, designed to equip you with essential skills that are indispensable in today's professional landscape. Whether you're a student looking to bolster your resume or a seasoned professional aiming to enhance your proficiency, this comprehensive package has something for everyone. We've carefully selected courses that cover essential skills demanded by employers across industries. With hands-on training and practical insights, you'll be well-prepared for real-world challenges. Our courses are led by industry experts who bring their knowledge and experience to the virtual classroom, ensuring you receive top-notch education. We believe in making quality education accessible to all. The Bronze Course Bundle offers incredible value for your investment in personal and professional growth. Take the first step toward a brighter future with Gurukul Skills.",
        otherBenefits: [
          "Huge Commission On Every Referral upto 87%",
          "Access To All Live Training",
          "Valuable Bonuses",
        ],
        learnItems: [
          "Ms Word Course",
          "Ms Excel Course",
          "Time Management",
          "Comunication Skills",
          "Ms Powerpoint Course",
          "Interview Mastery Course",
          "Freelancing Mastery Course",
        ],
        img: "/bronze.jpeg",
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
          <button className=" bg-black" onClick={handleAddCourse}>
            add courses
          </button>
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
