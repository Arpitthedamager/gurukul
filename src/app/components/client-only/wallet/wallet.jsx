"use client";
import React, { useState } from "react";

const WalletPage = () => {
  const [balance, setBalance] = useState(500); // Initial balance
  const [redeemAmount, setRedeemAmount] = useState(""); // State for redeem amount
  const [transactions, setTransactions] = useState([]); // State for transaction history

  const handleRedeem = (e) => {
    e.preventDefault();
    const amount = parseFloat(redeemAmount);
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
      // Update balance after redemption
      setBalance(prevBalance => prevBalance - amount);
      // Add transaction to history
      const transaction = {
        amount: -amount,
        timestamp: new Date().toLocaleString()
      };
      setTransactions(prevTransactions => [...prevTransactions, transaction]);
      // Reset redeem amount input
      setRedeemAmount("");
    } else {
      alert("Please enter a valid amount to redeem.");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="px-6 py-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">My Wallet</h1>
          <div className="flex justify-between items-center mb-4">
            <div className="text-sm text-gray-600">Balance:</div>
            <div className="text-2xl font-bold text-blue-500">₹{balance.toFixed(2)}</div>
          </div>
          <hr className="my-4" />
          <div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">Redeem Money</h2>
            <form onSubmit={handleRedeem}>
              <div className="mb-4">
                <label className="block text-sm font-semibold text-gray-600 mb-2" htmlFor="amount">Amount to redeem:</label>
                <input
                  className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:border-blue-500"
                  type="number"
                  id="amount"
                  name="amount"
                  placeholder="Enter amount"
                  min="0"
                  value={redeemAmount}
                  onChange={(e) => setRedeemAmount(e.target.value)}
                  required
                />
              </div>
              <div className="text-right">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out">Redeem</button>
              </div>
            </form>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-bold text-gray-800 mb-2">Transaction History</h2>
            <ul>
              {transactions.map((transaction, index) => (
                <li key={index} className="text-gray-600 mb-2">
                  {transaction.amount < 0 ? (
                    <span className="text-red-500">-₹{Math.abs(transaction.amount).toFixed(2)}</span>
                  ) : (
                    <span className="text-green-500">+₹{transaction.amount.toFixed(2)}</span>
                  )}
                  <span className="ml-2 text-sm text-gray-400">{transaction.timestamp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
