// app/courses/[id]/page.jsx

"use client";
import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Navbar from "../../components/client-only/nevbar/Navbar";
import Footer from "../../components/client-only/footer/Footer";
import Image from "next/image";
import Link from "next/link";

const SilverPackage = () => {
  const [popupContent, setPopupContent] = useState(null); // Define state for popup content
  const scriptLoadedRef = useRef(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { status: data, data: session } = useSession();
  const router = useRouter();
  const param = useParams();
  // Define courseId from params
  const id = param.id;
  let email;
  if (session) {
    email = session.user.email;
  }
  useEffect(() => {
    console.log("Session:", data);
    console.log("Router:", router);
    // Redirect to login page if session is not available
  if (data==="unauthenticated") {
      setPopupContent("Redirecting to login page...");
      router.replace("/login");
    }
  }, [data, router]);


  // Define side effects using useEffect
  useEffect(() => {
    // Dynamically load Razorpay script based on courseId
    if (!scriptLoadedRef.current && id) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;

      // Mapping course IDs to payment button IDs
      const paymentButtonIds = {
        1: "pl_O7WNjAdOgbIYA4",
        2: "pl_O7WQdofQ9sMuFu",
        3: "pl_O7WeGCVFZ6VM96",
        4: "pl_O7WfzDGFPdVpgB",
        5: "pl_O7WU3Rmh7gVIBC",
        6: "pl_O7WW2MxWCDvoox",
      };

      // Check if the course ID has a corresponding payment button ID
      const paymentButtonId = paymentButtonIds[id];

      if (paymentButtonId) {
        script.dataset.payment_button_id = paymentButtonId;
        script.onload = () => {
          scriptLoadedRef.current = true;
        };
        document
          .getElementById("razorpay-button-container")
          .appendChild(script);
      } else {
        console.error("No payment button ID found for course ID:", id);
      }
    }
  }, [id]);

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
        price: 2199,
        originalPrice: 3499,
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
        price: 3999,
        originalPrice: 7000,
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
          "Ui Design Mastery",
          "Artificial Intelligence",
          "Sales Funnel Creation",
          "Facebook Ads Mastery",
          "Spoken English Mastery",
          "Public Speaking Mastery",
          "Email Marketing Mastery",
          "Communication Mastery ",
          "Chat GPt and other A.I Tools ",
          "Advanced Affiliate Marketing",
        ],
        img: "/gold.jpeg",
      };
    } else if (courseId === "5") {
      return {
        title: "Platinum Package",
        description:
          "Designed specifically for students and entrepreneurs who aspire to be a digital marketer. With this course, now you can become a master of your own field. Covering a wide range of topics, now you can gain a lot of insight about the professional world. If you are someone who makes every possible effort to update themselves with the latest techniques, then this course is perfect for you. What are you waiting for? Get acquainted with the trending tools and latest technologies to make the best of your professional career.",
        price: 5499,
        originalPrice: 10000,
        includes: [
          { label: "100 hours on-demand video", icon: "🎥" },
          { label: "Full lifetime access", icon: "🔓" },
          { label: "Access on mobile and TV", icon: "📱" },
          { label: "Assignments and quizzes", icon: "📝" },
          { label: "Certificate of Completion", icon: "🎓" },
        ],
        overviewDescription:
          "In the ever-changing world, it is quintessential to equip yourself with the latest marketing trends to mark your strong foothold in the professional environment. Gurukul Skills makes you understand the most significant concepts of digital marketing with utmost interest. If you want to gain in-depth knowledge of digital marketing, then this course is for you.",
        otherBenefits: [
          "Huge Commission On Every Referral upto 87%",
          "Access To All Live Training",
          "Valuable Bonuses and Free Trips",
          "Free Silver Course",
        ],
        learnItems: [
          "U.X Designing",
          "Easy Sales or leads",
          "No Code Programming",
          "Chat Bot Development",
          " Advanced Copywriting",
          "Institutional Digital Marketing",
          "Institutional Affiliate Marketing ",
          "Chatgpt and All Al tools course free",
          "Youtube growth with Youtube coach",
          "Instagram growth with Instagram coach",
        ],
        img: "/platinum.jpeg",
      };
    } else if (courseId === "6") {
      return {
        title: "Diamond  Package",
        description:
          "Tailored for students and aspiring professionals looking to excel in the world of finance, this course is your key to mastering the field. It comprehensively covers a broad spectrum of topics, offering valuable insights into the financial industry. If you're dedicated to staying up- to-date with the latest financial techniques and strategies, this course is your ideal choice. Don't hesitate any longer. Dive into the world of trending financial tools and cutting-edge technologies to elevate your career in finance to new heights.",
        price: 6999,
        originalPrice: 15000,
        includes: [
          { label: "200 hours on-demand video", icon: "🎥" },
          { label: "Full lifetime access", icon: "🔓" },
          { label: "Access on mobile and TV", icon: "📱" },
          { label: "Assignments and quizzes", icon: "📝" },
          { label: "Certificate of Completion", icon: "🎓" },
        ],
        overviewDescription:
          "Delve into the fundamentals of personal finance, including budgeting, savings strategies, debt management, and long- term financial planning. Learn how to set and achieve financial goals, ensuring a secure financial future.These are the key points which are included in this course which will help you in your journey of managing personal finance.BudgetingSetting and achieving your financial goalsSaving, Investing rules, Loans, Bonds, Mutual Funds, FDs, Insurance Taxation, Emergency Funds, Roadmap of making 1cr snf and Online Startups.Stock Market for Beginners: Embark on an enlightening journey through the intricacies of the stock market. We'll demystify stock market terminology, introduce you to key concepts, and provide you with practical insights into stock analysis, investment strategies, and risk management.",
        otherBenefits: [
          "Huge Commission On Every Referral upto 87%",
          "Access To All Live Training",
          "Valuable Bonuses",
        ],
        learnItems: [
          "No Code  Software Development",
          "Zero Code Web Development",
          "Digital Marketing Online startup",
          "Advance Graphics Designing",
          "Video Production",
          "Cyber Security Tech",
          "And Many other High Technical Skills",
        ],
        img: "/diamond.jpeg",
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
      {popupContent && <div className="popup">{popupContent}</div>}
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
              <Image
                src={courseData.img}
                alt="Course Image"
                className="w-full h-64 object-cover hover:grayscale-0 transition-filter duration-300"
                height={0}
                width={1000}
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
