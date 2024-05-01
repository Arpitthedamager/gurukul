"use client"
import React from "react";
import { useState } from "react";

const Leaderboard = () => {
  // Sample leaderboard data
  const leaderboardData = [
    { id: 1, name: "John", referrals: 5, prize: 50, photo: "/pop.webp" },
    { id: 2, name: "Jane", referrals: 4, prize: 40, photo: "/jane.jpg" },
    { id: 3, name: "Doe", referrals: 3, prize: 30, photo: "/book.jpeg" },
    { id: 4, name: "Alice", referrals: 2, prize: 60, photo: "/pop.webp" },
    { id: 5, name: "Bob", referrals: 1, prize: 20, photo: "/bob.jpg" },
    { id: 6, name: "Jane", referrals: 4, prize: 40, photo: "/jane.jpg" },
    { id: 7, name: "Doe", referrals: 3, prize: 30, photo: "/doe.jpg" },
    { id: 8, name: "Alice", referrals: 2, prize: 60, photo: "/alice.jpg" },
    { id: 9, name: "Bob", referrals: 1, prize: 20, photo: "/bob.jpg" },
    { id: 0, name: "Jane", referrals: 4, prize: 40, photo: "/jane.jpg" },
    { id: 11, name: "Doe", referrals: 3, prize: 30, photo: "/doe.jpg" },
    { id: 12, name: "Alice", referrals: 2, prize: 60, photo: "/pop.webp" },
    { id: 13, name: "Bob", referrals: 1, prize: 20, photo: "/bob.jpg" },
    { id: 14, name: "Jane", referrals: 4, prize: 40, photo: "/jane.jpg" },
    { id: 15, name: "Doe", referrals: 3, prize: 30, photo: "/doe.jpg" },
    { id: 16, name: "Alice", referrals: 2, prize: 60, photo: "/alice.jpg" },
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
      <div className="flex flex-row md:flex-row justify-center mb-12 space-y-8 md:space-y-0 md:space-x-8">
        {/* First most referrals in the center */}
        {topThree.map((user, index) => (
          <div key={user.id} className="flex flex-col items-center space-y-2">
            <span role="img" aria-label="Crown" className="text-2xl mb-2">
              {index === 0 ? "🥈" : index === 1 ? "👑" : "🥉"}
            </span>
            <div className="rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src={user.photo}
                alt={user.name}
                className="w-24 h-24 object-cover"
              />
            </div>
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-sm">Referrals: {user.referrals}</p>
            <p className="text-sm">Prize: ${user.prize}</p>
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
                  ${user.prize}
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
