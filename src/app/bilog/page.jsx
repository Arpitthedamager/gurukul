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
    question: "side",
    shortAnswer:
      "Our company mission is to provide innovative solutions that empower our customers.",
    longAnswer:
      "Our company mission is to provide innovative solutions that empower our customers. We aim to revolutionize the industry by delivering cutting-edge products and services.",
  },
  {
    title: "Card 2",
    question: "side",
    shortAnswer:
      "Customer satisfaction is our top priority, and we strive to exceed their expectations in every interaction.",
    longAnswer:
      "Customer satisfaction is our top priority, and we strive to exceed their expectations in every interaction. We value customer feedback and continuously improve our offerings.",
  },
  {
    title: "Card 3",
    question: "side",
    shortAnswer:
      "We follow an agile methodology, iterating quickly based on user feedback to deliver high-quality products.",
    longAnswer:
      "We follow an agile methodology, iterating quickly based on user feedback to deliver high-quality products. Our approach enables us to stay ahead of the curve and respond effectively to market demands.",
  },
  {
    title: "Card 4",
    question: "side",
    shortAnswer:
      "Quality assurance is built into every step of our product development process, from design to testing and deployment.",
    longAnswer:
      "Quality assurance is built into every step of our product development process, from design to testing and deployment. We adhere to strict quality standards to ensure that our products meet the highest levels of reliability and performance.",
  },
  {
    title: "Card 5",
    question: "side",
    shortAnswer:
      "We are focused on expanding our market reach through strategic partnerships and continuous innovation.",
    longAnswer:
      "We are focused on expanding our market reach through strategic partnerships and continuous innovation. By collaborating with industry leaders and leveraging emerging technologies, we aim to capture new opportunities and drive sustainable growth.",
  },
  {
    title: "Card 6",
    question: "side?",
    shortAnswer:
      "We prioritize employee well-being and offer opportunities for growth and development through training and mentorship programs.",
    longAnswer:
      "We prioritize employee well-being and offer opportunities for growth and development through training and mentorship programs. Our goal is to foster a supportive work environment where employees can thrive and realize their full potential.",
  },
  {
    title: "Card 7",
    question: "side",
    shortAnswer:
      "We are dedicated to reducing our environmental impact through sustainable practices and initiatives.",
    longAnswer:
      "We are dedicated to reducing our environmental impact through sustainable practices and initiatives. From reducing waste to conserving energy, we strive to minimize our carbon footprint and contribute to a greener future.",
  },
  {
    title: "Card 8",
    question: "side",
    shortAnswer:
      "We actively participate in community events and support local organizations to give back to the communities where we operate.",
    longAnswer:
      "We actively participate in community events and support local organizations to give back to the communities where we operate. By engaging with the community, we aim to make a positive impact and build meaningful relationships.",
  },
  {
    title: "Card 9",
    question: "side",
    shortAnswer:
      "Our commitment to innovation, quality, and customer satisfaction sets us apart and drives our success.",
    longAnswer:
      "Our commitment to innovation, quality, and customer satisfaction sets us apart and drives our success. We strive to push the boundaries of what's possible and deliver exceptional value to our customers.",
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
            <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
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
                    <div className=" inset-0 bg-black opacity-75 rounded-lg flex justify-center items-center">
                      <div className="text-white text-center  P-6 pb-0">
                        <h3 className="text-xl font-semibold mb-2">
                          Answer
                        </h3>
                        <p className="text-sm ">{card.shortAnswer}</p>
                        
                      </div>
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