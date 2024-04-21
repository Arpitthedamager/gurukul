// @ts-nocheck
// @use-client

import React from "react";

const subscriptionPlans = [
  {
    id: 1,
    title: "Subscription Plan 1",
    description: "Unlock exclusive features and benefits tailored for you.",
    link: "/subscription-plan-1",
  },
  {
    id: 2,
    title: "Subscription Plan 2",
    description: "Dive deeper with premium content and personalized insights.",
    link: "/subscription-plan-2",
  },
  {
    id: 3,
    title: "Subscription Plan 3",
    description: "Experience unparalleled access and priority support.",
    link: "/subscription-plan-3",
  },
];

const MidSection = () => {
  return (
    <section className="py-20 text-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-extrabold text-center mb-16">
          Discover Our Premium Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {subscriptionPlans.map((plan) => (
            <div key={plan.id} className="relative overflow-hidden">
              <a
                href={plan.link}
                className="block bg-white p-10 rounded-lg shadow-xl transform transition duration-300 hover:scale-105"
              >
                <h3 className="text-3xl font-semibold mb-6 text-gray-800">
                  {plan.title}
                </h3>
                <p className="text-gray-700 mb-8">{plan.description}</p>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-semibold text-lg hover:underline">
                    Explore
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MidSection;
