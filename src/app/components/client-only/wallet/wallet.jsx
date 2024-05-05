// wallet.jsx
"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const WalletPage = () => {
  const { data: session } = useSession();
  const [redeemAmount, setRedeemAmount] = useState("");
  const [upiId, setUpiId] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(session?.current_balance || 10);
  const [userId, setUserId] = useState(""); // State for user ID

  useEffect(() => {
    if (session?.current_balance !== undefined) {
      setBalance(session.current_balance);
      setUserId(session?.user?.id); // Set user ID from session
    } else {
      setBalance(10);
    }
  }, [session]);

  const handleRedeem = async (e) => {
    e.preventDefault();
    const amount = parseFloat(redeemAmount);
    if (!isNaN(amount) && amount > 0 && amount <= balance) {
      try {
        // Update balance after redemption
        setBalance((prevBalance) => prevBalance - amount);
        // Add transaction to history
        const transaction = {
          amount: -amount,
          timestamp: new Date().toLocaleString(),
        };
        setTransactions((prevTransactions) => [...prevTransactions, transaction]);
        // Reset redeem amount input
        setRedeemAmount("");

        // Make the API call to backend to store the transaction data
        console.log(amount);
        console.log(upiId); 
        console.log(userId);  // Include user ID in the request body
        const response = await fetch('/api/wallet', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ amount, upiId, userId })
        });
        const data =await response.json()
        console.log(data);

        if (!response.ok) {
          throw new Error('Failed to add transaction');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to redeem amount. Please try again later.');
        // Revert the balance and transaction history changes if there was an error
        setBalance((prevBalance) => prevBalance + amount);
        setTransactions((prevTransactions) => prevTransactions.slice(0, -1));
      }
    } else {
      alert("Please enter a valid amount to redeem.");
    }
  };

  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">My Wallet</h1>
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-600">Balance:</div>
              <div className="text-2xl font-bold text-blue-500">
                ₹{balance.toFixed(2)}
              </div>
            </div>
            <hr className="my-4" />
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Redeem Money
              </h2>
              <form onSubmit={handleRedeem}>
                <div className="mb-4">
                  <label
                    className="block text-sm font-semibold text-gray-600 mb-2"
                    htmlFor="amount"
                  >
                    Amount to redeem:
                  </label>
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
                <div className="mb-4">
                  <label
                    className="block text-sm font-semibold text-gray-600 mb-2"
                    htmlFor="upiId"
                  >
                    UPI Id:
                  </label>
                  <input
                    className="w-full px-4 py-2 border rounded-lg text-black focus:outline-none focus:border-blue-500"
                    type="text"
                    id="upiId"
                    name="upiId"
                    placeholder="Enter UPI Id"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    required
                  />
                </div>
                <div className="text-right">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg focus:outline-none focus:bg-blue-600 transition duration-300 ease-in-out">
                    Redeem
                  </button>
                </div>
              </form>
            </div>
            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                Transaction History
              </h2>
              <ul>
                {transactions.map((transaction, index) => (
                  <li key={index} className="text-gray-600 mb-2">
                    {transaction.amount < 0 ? (
                      <span className="text-red-500">
                        -₹{Math.abs(transaction.amount).toFixed(2)}
                      </span>
                    ) : (
                      <span className="text-green-500">
                        +₹{transaction.amount.toFixed(2)}
                      </span>
                    )}
                    <span className="ml-2 text-sm text-gray-400">
                      {transaction.timestamp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletPage;
