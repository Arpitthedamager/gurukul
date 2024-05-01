"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const My_subs = () => {
  // Mock data for subscriptions from MongoDB
  const subscriptionsFromDB = [
    { id: 1, referCode: "ABC123" },
    { id: 3, referCode: "XYZ789" },
    // Other subscription objects...
  ];

  const subscriptions = [
    {
      id: 1,
      name: "Basic",
      imageSrc: "/basic.jpeg",
      price: "INR 1999",
      description: "Dive into the world of technology with our expert-led courses.",
    },
    {
      id: 2,
      name: "Premium",
      imageSrc: "/Premium.jpeg",
      price: "INR 2999",
      description: "Join the financial revolution and master cutting-edge technologies.",
    },
    {
      id: 3,
      name: "Pro",
      imageSrc: "/pro.jpeg",
      price: "INR 3499",
      description: "Unlock the power of passive income with our comprehensive course.",
    },
  ];

  const [subscriptionsToShow, setSubscriptionsToShow] = useState([]);

  useEffect(() => {
    filterSubscriptions();
  }, []);

  const filterSubscriptions = () => {
    const filteredSubscriptions = subscriptions.filter((subscription) => {
      return subscriptionsFromDB.some(
        (dbSubscription) => dbSubscription.id === subscription.id
      );
    });
    setSubscriptionsToShow(filteredSubscriptions);
  };

  const handleBuyNow = (subscriptionId) => {
    console.log(`Buying subscription with ID ${subscriptionId}`);
  };

  const handleCopy = (subscriptionId) => {
    const subscription = subscriptionsFromDB.find(
      (sub) => sub.id === subscriptionId
    );
    if (subscription) {
      navigator.clipboard.writeText(subscription.referCode);
      console.log("Copied Refer Code:", subscription.referCode);
    } else {
      console.log("Subscription not found in DB for ID:", subscriptionId);
    }
  };

  const handleShare = async (subscriptionId) => {
    const subscription = subscriptionsFromDB.find(
      (sub) => sub.id === subscriptionId
    );
    if (subscription) {
      const url = `/refer/${subscription.referCode}`;
      try {
        await navigator.share({ url });
        console.log("Shared Refer Link:", url);
      } catch (error) {
        console.error("Sharing failed:", error.message);
      }
    } else {
      console.log("Subscription not found in DB for ID:", subscriptionId);
    }
  };

  return (
    <>
      <div className="container mx-auto py-8">
        <section className="pricing02">
          <div className="container mx-auto py-8">
            <div className="mb-10">
              <h4 className="text-center text-4xl md:text-5xl font-extrabold text-yellow-600">
                <strong>My Subscriptions</strong>
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {subscriptionsToShow.map((subscription) => (
               
                  <div key={subscription.id} className="item-wrapper border rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 h-full bg-white">
                    <div className="item-img h-72 overflow-hidden">
                      <img
                        src={subscription.imageSrc}
                        alt={subscription.name}
                        className="w-full h-full object-cover"
                        width={300} // Replace with the actual width of your images
                        height={200}
                      />
                    </div>
                    <div className="item-content p-6 bg-white">
                      <h5 className="item-title text-2xl font-semibold mb-4 text-yellow-600">
                        <strong>{subscription.name}</strong>
                      </h5>
                      <h6 className="item-subtitle text-lg text-yellow-500 mb-6">
                        {subscription.price}
                      </h6>
                      <p className="mbr-text text-base text-gray-700 mb-8">
                        {subscription.description}
                      </p>
                      <div className="item-footer">
                        <Link href={`/subcor/${subscription.id}`}>
                          <button
                            className="btn item-btn btn-primary text-lg bg-gradient-to-r from-rose-600 to-yellow-700 text-white py-3 px-8 rounded-full transition duration-300 ease-in-out hover:from-yellow-700 hover:to-yellow-800"
                            onClick={() => handleBuyNow(subscription.id)}
                          >
                            View Packages
                          </button>
                        </Link>
                        <div className="flex justify-between items-center mt-4">
                          <button
                            className="text-sm text-gray-500 hover:text-black focus:outline-none"
                            onClick={() => handleCopy(subscription.id)}
                          >
                            Copy Code
                          </button>
                          <button
                            className="text-sm text-gray-500 hover:text-black focus:outline-none"
                            onClick={() => handleShare(subscription.id)}
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
        </section>
      </div>
    </>
  );
};

export default My_subs;
