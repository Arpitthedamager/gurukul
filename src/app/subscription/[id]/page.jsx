import Footer from "@/app/components/client-only/footer/Footer";
import Navbar from "@/app/components/client-only/nevbar/Navbar";
import React from "react";

const SubscriptionPackage = () => {
  // Define dynamic data
  const subscriptionData = {
    title: "Silver Package",
    description:
      "This subscription package is designed to help you build a strong narrative in the professional realm. If you want to make your career in social media marketing, then this package is for you. With a wide range of topics, this package makes you a prominent leader in the business sector. From enhancing your professional skills to improving your mental flexibility, this package is a game-changer for your overall growth.",
    price: "$99",
    originalPrice: "$199",
    includes: [
      { label: "52 hours on-demand video", icon: "🎥" },
      { label: "Full lifetime access", icon: "🔓" },
      { label: "Access on mobile and TV", icon: "📱" },
      { label: "Assignments", icon: "📝" },
      { label: "Certificate of Completion", icon: "🎓" },
    ],
    overviewDescription:
      "Who doesn't love to make a strong social media presence? If you are an entrepreneur or beginner who dreams of creating a revolutionary impact, then this package best fits your needs. With this package, you can be confident in making a difference by learning social media trends that help you stand out.",
    imageSrc: "/silver_package_image.jpg",
  };

  return (
    <>
      <Navbar />
      <div className="pt-8"></div>
      <div className="font-sans max-w-4xl mt-16 pt-16 mx-auto px-4 py-8 border border-gray-200 rounded-lg shadow-lg bg-gradient-to-r from-gray-100 to-white">
        {/* Title and Description */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            {subscriptionData.title}
          </h1>
          <p className="text-lg text-gray-700">
            {subscriptionData.description}
          </p>
        </div>

        {/* Price and Image */}
        <div className="flex flex-col lg:flex-row justify-center items-center mb-8 hover:scale-105 transition-transform duration-300">
          <div className="w-full lg:w-1/2 relative rounded-lg overflow-hidden shadow-md mb-4 lg:mb-0 transform transition-transform duration-300 hover:grayscale-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-sky-500 opacity-80 lg:opacity-100 transition-opacity duration-300"></div>
            <Image
              src={subscriptionData.imageSrc}
              alt="Subscription Package Image"
              className="w-full h-64 object-cover filter grayscale hover:grayscale-0 transition-filter duration-300"
            />
          </div>
          <div className="max-w-md text-center lg:w-1/2">
            <div className="text-3xl font-bold mb-2 text-gray-900">
              <span className="mr-2">{subscriptionData.price}</span>
              <span className="text-lg text-gray-500 line-through">
                {subscriptionData.originalPrice}
              </span>
            </div>
            <a href="https://rzp.io/l/qX6tDX4A">
              <button className="bg-blue-500 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300">
                Buy Now
              </button>
            </a>
          </div>
        </div>

        {/* Includes Section */}
        <div className="text-center mb-12 overflow-x-auto">
          <h2 className="text-3xl mb-6 text-gray-900">Includes</h2>
          <div className="flex justify-center flex-wrap gap-8">
            {subscriptionData.includes.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center w-48 p-4 bg-white rounded-lg shadow-md transform transition-transform duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="text-6xl mb-4 text-blue-500">{item.icon}</div>
                <div className="text-lg text-gray-900">{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Subscription Overview */}
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-6 text-gray-900">Subscription Overview</h2>
          <p className="text-lg text-gray-700">
            {subscriptionData.overviewDescription}
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SubscriptionPackage;
