import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";

const My_subs = () => {
  const { status: data, data: session } = useSession();
  const [coursesformateFromDB, setcoursesformateFromDB] = useState([]);

  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch("/api/getsubuser");
        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }
        const data = await res.json();
        // console.log(data,"data");
        setcoursesformateFromDB(data); // Accessing the 'course' array
        setUserData(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchUserData();
  }, []);
  // console.log(coursesformateFromDB, "cor");
  // console.log(userData, "user");
  // const coursesFromDB = [
  //   { id: 1, referCode: "ABC123" },
  //   { id: 3, referCode: "XYZ789" },
  // ];
  const subscriptionsFromDB = coursesformateFromDB.map((course) => ({
    id: course.Subscriptionid,
    referCode: course.Subscription_refer,
  }));
  // const subscriptionsFromDB = session && session.Subscription
  //   ? session.Subscription.map((sub) => ({
  //       id: parseInt(sub.Subscriptionid), // Update the property name
  //       referCode: sub.Subscription_refer,
  //     }))
  //   : [];
    // console.log(subscriptionsFromDB);
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
  }, [userData]);
  const filterSubscriptions = () => {
    const filteredSubscriptions = subscriptions.map((subscription) => {
      const foundSubscription = subscriptionsFromDB.find(
        (dbSubscription) => dbSubscription.id === subscription.id
      );
      if (foundSubscription) {
        return {
          ...subscription,
          blurred: false,
        };
      } else {
        return {
          ...subscription,
          blurred: true,
        };
      }
    });
    
    // Filter out the subscriptions that are not found in subscriptionsFromDB
    const subscriptionsToShow = filteredSubscriptions.filter(subscription => !subscription.blurred);
    
    setSubscriptionsToShow(subscriptionsToShow);
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
      // Update the copied state for the clicked subscription
      const updatedSubscriptions = subscriptionsToShow.map((sub) =>
        sub.id === subscriptionId ? { ...sub, copied: true } : sub
      );
      setSubscriptionsToShow(updatedSubscriptions);

      // Reset the copied state after 2 seconds
      setTimeout(() => {
        const resetSubscriptions = updatedSubscriptions.map((sub) =>
          sub.id === subscriptionId ? { ...sub, copied: false } : sub
        );
        setSubscriptionsToShow(resetSubscriptions);
      }, 2000);
    } else {
      console.log("Subscription not found in DB for ID:", subscriptionId);
    }
  };

  const handleShare = async (subscriptionId) => {
    const subscription = subscriptionsFromDB.find(
      (sub) => sub.id === subscriptionId
    );
    if (subscription) {
      const url = `https://gurukulskills.site/subscription`;
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
              {subscriptionsFromDB.length === 0 && (
          <div className="text-center text-gray-500 my-8">
            <p>You do not have any courses.</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block"
              onClick={() => console.log("Buy Now clicked")}
            >
              Buy Now
            </button>
          </div>
        )}

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
              {subscriptionsToShow.map((subscription) => (
                  <div key={subscription.id} className={`item-wrapper border rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 h-full bg-white ${subscription.blurred ? 'filter blur-lg' : ''}`}>
                    <div className="item-img h-72 overflow-hidden">
                      <Image
                        src={subscription.imageSrc}
                        alt={subscription.name}
                        className="w-full h-full object-cover"
                        width={300} // Replace with the actual width of your images
                        height={200}
                      />
                    </div>
                    <div className="item-content p-6 bg-opacity-90 backdrop-filter backdrop-blur-lg rounded-b-lg">
                      <h5 className="item-title text-2xl font-semibold mb-4 text-yellow-600">
                        <strong>{subscription.name}</strong>
                      </h5>
                      <h6 className="item-subtitle text-lg text-rose-500 mb-6">
                        {subscription.price}
                      </h6>
                      <p className="mbr-text text-base text-gray-700 mb-8">
                        {subscription.description}
                      </p>
                      <div className="item-footer">
                        <Link href={`/subcor/${subscription.id}`}>
                          <button
                            className={`btn item-btn btn-primary text-lg bg-gradient-to-r from-rose-600 to-yellow-700 text-white py-3 px-8 rounded-full transition duration-300 ease-in-out hover:from-yellow-700 hover:to-yellow-800 ${subscription.blurred ? 'pointer-events-none opacity-50' : ''}`}
                            onClick={() => handleBuyNow(subscription.id)}
                            disabled={subscription.blurred}
                          >
                            View Packages
                          </button>
                        </Link>
                        <div className="flex justify-between items-center mt-4">
                          <button
                            className={`text-sm text-gray-500 hover:text-black focus:outline-none ${subscription.blurred ? 'pointer-events-none opacity-50' : ''}`}
                            onClick={() => handleCopy(subscription.id)}
                            disabled={subscription.blurred}
                          >
                          {subscription.copied ? "Copied!" : "Copy Code"}
                          </button>
                          <button
                            className={`text-sm text-gray-500 hover:text-black focus:outline-none ${subscription.blurred ? 'pointer-events-none opacity-50' : ''}`}
                            onClick={() => handleShare(subscription.id)}
                            disabled={subscription.blurred}
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
