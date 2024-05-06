"use client"
import React from "react";
import { useState } from "react";
import Image from "next/image";

const Leaderboard = () => {
  // Sample leaderboard data
  const leaderboardData = [
    { id: 2, name: "Arpit Gupta", referrals: 136, prize: 500000, photo: "/jane.jpg" },
    { id: 3, name: "Uday Chauhan", referrals: 124, prize: 200000, photo: "/book.jpeg" },
    { id: 4, name: "Shivang ", referrals: 118, prize: 100000, photo: "/pop.webp" },
    { id: 5, name: "Rahul Bhagel", referrals: 112, prize: 50000, photo: "/bob.jpg" },
    { id: 1, name: "Abhishek Singh", referrals: 154, prize: 1000000, photo: "/pop.webp" },
    { id: 6, name: "Jane zaid", referrals: 108, prize: 30000, photo: "/jane.jpg" },
    { id: 7, name: "Doj kabir", referrals: 98, prize: 20000, photo: "/doe.jpg" },
    { id: 8, name: "Diksha", referrals: 94, prize: 10000, photo: "/alice.jpg" },
    { id: 9, name: "Bob Sharma", referrals: 85, prize: 8000, photo: "/bob.jpg" },
    { id: 0, name: "Sonu ", referrals: 81, prize: 6000, photo: "/jane.jpg" },
    { id: 11, name: "Sahil Khanna", referrals: 78, prize: 5000, photo: "/doe.jpg" },
    { id: 12, name: "Nisha kalan", referrals: 75, prize: 5000, photo: "/pop.webp" },
    { id: 13, name: "Bobby ", referrals: 74, prize: 5000, photo: "/bob.jpg" },
    { id: 14, name: "kannnu", referrals: 68, prize: 5000, photo: "/jane.jpg" },
    { id: 15, name: "Nikita Jain", referrals: 62, prize: 5000, photo: "/doe.jpg" },
    { id: 16, name: "Alice", referrals: 2, prize: 16, photo: "/alice.jpg" },
    { id: 17, name: "Bob", referrals: 1, prize: 20, photo: "/bob.jpg" },
    // ... add more data /for top 10
  ];

  // Sort leaderboard data by prize in descending order
  const sortedData = [...leaderboardData].sort(
    (a, b) => b.referrals - a.referrals
  );

  let topThree = sortedData.slice(0, 3);

  // Reorder topThree array to position users as required
  [topThree[0], topThree[1], topThree[2]] = [
    topThree[1],
    topThree[0],
    topThree[2],
  ];

  // Remove top three users from sortedData
  const remainingData = sortedData.slice(3);

  return (
    <div className="container mx-auto px-6 py-12 rounded-lg shadow-lg ">
      {/* Leaderboard Heading */}
      <h1 className="text-4xl font-bold text-center mb-8">Leaderboard</h1>

      {/* Top Three Entries */}
      <div className="flex flex-row overflow-auto  md:flex-row justify-center mb-12 space-y-0 md:space-y-0 md:space-x-8 ">
        {/* First most referrals in the center */}
        {topThree.map((user, index) => (
          <div key={user.id} className="flex flex-col items-center space-y-1 space-x-0 md:space-x-3">
            <span role="img" aria-label="Crown" className="text-2xl mb-2">
              {index === 0 ? "🥈" : index === 1 ? "👑" : "🥉"}
            </span>
            <div className="rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={user.photo}
                alt={user.name}
                className="w-24 h-24 object-cover"
                width={100}
                height={100}
              />
            </div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-sm">Referrals: {user.referrals}</p>
            <p className="text-sm">Prize: ₹ {user.prize}</p>
          </div>
        ))}
      </div>

      
      {/* Top Ten Table */}
      <div className="overflow-x-auto max-h-96 ">
        <table className="min-w-full bg-white border-collapse border border-gray-300 rounded-lg overflow-hidden shadow-md">
          <thead >
             

            <tr className="bg-gray-800 text-white sticky top-0">
              <th className="border border-gray-300 px-4 py-2">Rank</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">
                Number of Referrals
              </th>
              <th className="border border-gray-300 px-4 py-2">Prize Win</th>
            </tr>
          </thead>
          <tbody>
            {remainingData.map((user, index) => (
              <tr
                key={user.id}
                className={
                  index % 2 === 0
                    ? "bg-gray-100 text-gray-700"
                    : "bg-white text-gray-700"
                }
              >
                <td className="border border-gray-300 px-4 py-2">
                  {index + 4}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.referrals}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                ₹ {user.prize}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
