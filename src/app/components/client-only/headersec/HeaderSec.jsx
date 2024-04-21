"use client";
import React, { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

const HeaderSec = () => {
  const titles = [
    'Unlock Your Potential with Cutting-Edge Tech Courses.',
    'Dive into the Future Today!'
  ];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000); // Change title every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        <strong>Gurucul Skills</strong>
      </h1>
      <Typewriter
        options={{
          strings: titles,
          autoStart: true,
          loop: true,
          deleteSpeed: 50, // Speed of deleting characters in milliseconds
        }}
      />
      <div className="mbr-section-btn pt-6">
        <a
          className="btn btn-white-outline text-xl px-8 py-4 rounded-full border-2 border-white hover:bg-white hover:text-black transition duration-300 ease-in-out"
          href="/subscription"
        >
          Enroll Now
        </a>{' '} {/* Insert space here */}
      </div>
    </section>
  );
};

export default HeaderSec;
