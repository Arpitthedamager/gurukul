"use client";
import {useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

const FeatureBox = () => {
  const scriptLoadedRef = useRef(false);
  const { data: session } = useSession();
  const { status: sessionStatus } = useSession();

  let email;
  if (session) {
    email = session.user.email;
    console.log(email);
  }
  // const subscriptionsFromDB =
  //   session && session.Subscription
  //     ? session.Subscription.map((sub) => ({
  //         id: parseInt(sub.Subscriptionid), // Update the property name
  //         referCode: sub.sub_refer,
  //       }))
  //     : [];
  // https://gurukulskills.site/buysub/1?payment_id=pay_O7tpTTwbEwqn2F
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
  const subscriptionsFromDB = coursesformateFromDB.map((course) => ({
    id: course.Subscriptionid,
    referCode: course.Subscription_refer,
  }));

  const subscriptions = [
    {
      id: 1,
      name: "Basic",
      imageSrc: "/basic.jpeg",
      price: "₹ 399",
      link: "https://next-auth.js.org/v3/tutorials/creating-a-database-adapter#required-methods",
      description:
        "Dive into the world of technology with our expert-led courses.",
    },
    {
      id: 2,
      name: "Premium",
      imageSrc: "/Premium.jpeg",
      price: "₹ 599",
      link: "",
      description:
        "Join the financial revolution and master cutting-edge technologies.",
    },
    {
      id: 3,
      name: "Pro",
      imageSrc: "/pro.jpeg",
      price: "₹ 699",
      link: "",
      description:
        "Unlock the power of passive income with our comprehensive course.",
    },
  ];

  const filteredSubscriptions = subscriptions.filter(
    (subscription) =>
      !subscriptionsFromDB.some(
        (dbSubscription) => dbSubscription.id === subscription.id
      )
  );
  
  useEffect(() => {
    // Dynamically load Razorpay script based on courseId
    filteredSubscriptions.forEach((subscription) => {
      if (!scriptLoadedRef.current && subscription.id) {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/payment-button.js";
        script.async = true;

        // Mapping course IDs to payment button IDs
        const paymentButtonIds = {
          1: "pl_O9CjZMAWzkzatM",
          2: "pl_O9CmZHA4bA03E9",
          3: "pl_O9CqAwAEg905Rc",
          // Add more mappings as needed
        };

        // Check if the subscription ID has a corresponding payment button ID
        const paymentButtonId = paymentButtonIds[subscription.id];

        if (paymentButtonId) {
          script.dataset.payment_button_id = paymentButtonId;
          script.onload = () => {
            scriptLoadedRef.current = true;
          };
          const containerId = `razorpay-button-container-${subscription.id}`;
          const container = document.getElementById(containerId);

          if (container) {
            container.appendChild(script);
          } else {
            console.error("Container element not found:", containerId);
          }
        } else {
          console.error(
            "No payment button ID found for subscription ID:",
            subscription.id
          );
        }
      }
    });
  }, [filteredSubscriptions]);


  return (
    <div className="container mx-auto py-8">
      <section className="pricing02">
        <div className="container mx-auto py-8">
          <div className="mb-10">
            <h4 className="text-center text-4xl md:text-5xl font-extrabold text-yellow-600  ">
              <strong>Subscriptions</strong>
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {filteredSubscriptions.map((subscription, index) => (
              <div
                key={subscription.id}
                className="item-wrapper border rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 h-full bg-white"
              >
                <div className="item-img  overflow-hidden" >
                  <Image
                    src={subscription.imageSrc}
                    alt={subscription.name}
                    className="w-full h-full object-cover"
                    width={10}
                    height={10}
                    layout="responsive"
                  />
                </div>
                <div className="item-content p-6 bg-white">
                  <h5 className="item-title text-2xl font-semibold mb-4 text-yellow-600">
                    <strong>{subscription.name}</strong>
                  </h5>
                  <h6 className="item-subtitle text-lg text-rose-500 mb-6">
                    {subscription.price}
                  </h6>
                  <div className="">
                    {sessionStatus === "authenticated"&&(

                  <form id={`razorpay-button-container-${subscription.id}`}></form>
                    )||(<Link href="/login" className="btn item-btn btn-primary text-lg bg-gradient-to-r from-rose-600 to-yellow-700 text-white py-3 px-8 rounded-full transition duration-300 ease-in-out hover:from-yellow-700 hover:to-yellow-800">please login first</Link>)}

                  </div>
                  <p className="mbr-text text-base text-gray-700 mt-6">
                    {subscription.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureBox;
