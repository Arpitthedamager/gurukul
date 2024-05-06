"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";

const FeatureBox = () => {
  const { data: session } = useSession();

  const subscriptionsFromDB =
    session && session.Subscription
      ? session.Subscription.map((sub) => ({
          id: parseInt(sub.Subscriptionid), // Update the property name
          referCode: sub.sub_refer,
        }))
      : [];

  const subscriptions = [
    {
      id: 1,
      name: "Basic",
      imageSrc: "/basic.jpeg",
      price: "₹ 1999",
      description: "Dive into the world of technology with our expert-led courses.",
    },
    {
      id: 2,
      name: "Premium",
      imageSrc: "/Premium.jpeg",
      price: "₹ 2999",
      description: "Join the financial revolution and master cutting-edge technologies.",
    },
    {
      id: 3,
      name: "Pro",
      imageSrc: "/pro.jpeg",
      price: "₹ 3499",
      description: "Unlock the power of passive income with our comprehensive course.",
    },
  ];

  const filteredSubscriptions = subscriptions.filter(subscription => !subscriptionsFromDB.some(dbSubscription => dbSubscription.id === subscription.id));

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
              <div key={subscription.id} className="item-wrapper border rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:scale-105 h-full bg-white">
                <div className="item-img  overflow-hidden">
                  <Image
                    src={subscription.imageSrc}
                    alt={subscription.name}
                    className="w-full h-full object-cover"
                    width={10}
                    height={1000}
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
                  <p className="mbr-text text-base text-gray-700 mb-8">
                    {subscription.description}
                  </p>
                  <div className="item-footer">
                    <Link
                     href="pament "
                      className="btn item-btn btn-primary text-lg bg-gradient-to-r from-rose-600 to-yellow-700 text-white py-3 px-8 rounded-full transition duration-300 ease-in-out hover:from-yellow-700 hover:to-yellow-800"
                    >
                      Join us
                    </Link>
                  </div>
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
