// pages/companyBlog.js
"use client";
import React from "react";
import { useState } from "react";
import Navbar from "../components/client-only/nevbar/Navbar";
import Footer from "../components/client-only/footer/Footer";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const data = [
  {
    title: "Card 1",
    question: "But Why I Choose GuruKul Skills ?",
    shortAnswer:
      "",
    longAnswer:
      "Because, we have best expert and consultancy to course enrolled members. we provide courses at best and valuable prices and gave free guidance for their financially and knowledegable growth.",
  },
  {
    title: "Card 2",
    question: "what is leaderboard? ",
    shortAnswer:
      "",
    longAnswer:
      "It is a board where all courses and subscription enrolled members rank according to their Number  of referrals.",
  },
  {
    title: "Card 3",
    question: "What's about the prize of leaders board.",
    shortAnswer:" ",
        longAnswer:
      "The Prizes of lakhs and thousand of rupees are given to their rank-holders and Prize distributed at after every six month.",
  },
  {
    title: "Card 4",
    question: "What is GuruKul Skills ?",
    shortAnswer:
      "",
    longAnswer:
      "GuruKul  skills provides online courses tought by India's top experts in hindi and from U.S.A top experts English also, to designed and develop stills and knowledge for entrepreneurship and investment with market trendy Success skills, with worldwide accessibility to help individual start and grow their startups or businese or make smart Investment decisions",
  },
  {
    title: "Card 5",
    question: "What Kind of Courses does guruKul Skills offers ?",
    shortAnswer:
      "",
    longAnswer:
      "GuruKul Skills is an educational platform offering expert-designed courses in entrepreneurship, investing, trading, Algo trading, Highly advanced marketing, easy sales or leads, personal development any many more. we also connect these courses with affiliate  and network marketing that also makes mney for you.",
  },
  {
    title: "Card 6",
    question: "Is there any a refund policy for Gurukul Skills courses and subscription ? ",
    shortAnswer:
      "",
    longAnswer:
      "Yes, GuruKul Skills offers refund policy for their courses and also for subscription to their customers.",
  },
  {
    title: "Card 7",
    question: "side",
    shortAnswer:
      "How to enroll in our courses and subscription ?",
    longAnswer:
      "Follow the steps to enroll in our courses and subscription. - Go to GuruKul Skills website.  - Register or Login.  - Choose your favourite your course and subscription.  - Fill in the blanks and Enroll.",
      
  },
  {
    title: "Card 8",
    question: "Will I get Completion certificate ?",
    shortAnswer:
      "",
    longAnswer:
      "Yes, you will get the completion certificate and also put in your resume. ",
  },
  {
    title: "Card 9",
    question: "What's the maximum and minimum prizes in leaderboard  to their rank-holders ?",
    shortAnswer:
      "",
    longAnswer:
      "The first prize is INR 10 lakh for first rank and last rank is INR 2000 (total ranks 65000).",
  },
  {
    title: "Card 10",
    question: "Did GuruKul Skills provides referrals to it's enrolled members ?",
    shortAnswer:
      "",
    longAnswer:
      "Yes, Gurukul Skills provides upto 10 referaals per month to each enrolled members.",
  },

];

function CompanyBlog() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false); // State to track card expansion

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsExpanded(true);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  const goToPreviousSet = () => {
    const newStartIndex = Math.max(0, startIndex - 3);
    setStartIndex(newStartIndex);
  };

  const goToNextSet = () => {
    const newStartIndex = Math.min(startIndex + 3, data.length - 3);
    setStartIndex(newStartIndex);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20 flex flex-col md:flex-row ">
        <div className="md:w-3/4 p-4 overflow-y-auto relative">
          <div className="max-w-4xl w-full mx-auto ">
            <h1 className="text-4xl font-bold text-center mb-8 text-gray- 100">
              Explore Our Company Blog
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {data.slice(startIndex, startIndex + 3).map((card, index) => (
                <div
                  key={index}
                  className="col-span-1 relative cursor-pointer rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                  onClick={() => handleCardClick(card)}
                >
                  <div className="bg-white p-6 rounded-lg ">
                    <h2 className="text-xl font-semibold mb-2 text-center text-gray-800">
                      {card.title}
                    </h2>
                    <h3 className="text-base font-semibold mb-2 text-center text-gray-600">
                      {card.question}
                    </h3>
                    <p className="text-sm text-gray-700">
                      {card.shortAnswer}
                    </p>
                  </div>
                    
                {isExpanded && selectedCard === card && (
                  <div className=" inset-0 bg-black opacity-75 md:hidden rounded-lg flex justify-center items-center">
                    <div className="text-white text-center ">
  
                      <p className="text-sm ">{card.longAnswer}</p>
                      
                    </div>
                  </div>
                )}
                </div>
              
                
              ))}
            </div>
            <div className="pt-4 left-0 right-0 bottom-4 flex justify-center">
              <button
                onClick={goToPreviousSet}
                disabled={startIndex === 0}
                className="bg-blue-500 text-white px-4 py-2 rounded-md mr-4 disabled:opacity-50"
              >
                <FiArrowLeft className="inline-block mr-2" /> Previous
              </button>
              <button
                onClick={goToNextSet}
                disabled={startIndex + 3 >= data.length}
                className="bg-blue-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
              >
                Next <FiArrowRight className="inline-block ml-2" />
              </button>
            </div>
          </div>
        </div>
        {/* Hide the right side on small screens */}
        <div className="md:w-1/4 bg-gray-200 h-auto p-4 hidden md:block">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
              Selected Card
            </h2>
            {selectedCard && (
              <>
                <h2 className="text-lg font-semibold mb-2 text-center text-gray-800">
                  {selectedCard.title}
                </h2>
                <div className="text-gray-700">
                  <h3 className="text-base font-medium mb-2 text-gray-700">
                    Answer
                  </h3>
                  <p className="text-sm">{selectedCard.longAnswer}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CompanyBlog;