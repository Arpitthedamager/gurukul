import Image from "next/image";

const FeaturesSection = () => {
  return (
    <div>
      {/* Horizontal Line Section */}
      <section className="py-8 text-center border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center md:justify-between gap-8">
            <h4 className="text-4xl font-bold">
              <strong>10K+ Happy Learners</strong>
            </h4>
            <h4 className="text-4xl font-bold">
              <strong>100+ Courses Available</strong>
            </h4>
            <h4 className="text-4xl font-bold">
              <strong>24/7 Support Team</strong>
            </h4>
          </div>
        </div>
      </section>

      {/* Sleek Course Marketplace Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <Image
            className="rounded-md"
            src="/members.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div className="mb-8">
            <h4 className="text-4xl font-bold mb-2">
              <strong>Sleek Course Marketplace</strong>
            </h4>
            <p className="text-lg">
              Explore a futuristic course selling platform with a user-friendly
              interface and a vibrant color scheme.
            </p>
          </div>
        </div>
      </section>

      {/* Personalized User Dashboard Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <Image
            className="rounded-md md:order-last"
            src="/user.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div className="mb-8">
            <h4 className="text-4xl font-bold mb-2">
              <strong>Personalized User Dashboard</strong>
            </h4>
            <p className="text-lg">
              Access your courses, subscriptions, referrals, wallet balance, and
              more in a sleek and intuitive dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Responsive Design Mastery Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
          <Image
            className="rounded-md"
            src="/marketplace.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div className="mb-8">
            <h4 className="text-4xl font-bold mb-2">
              <strong>Responsive Design Mastery</strong>
            </h4>
            <p className="text-lg">
              Experience seamless browsing on both mobile and desktop devices
              with our cutting-edge responsive design.
            </p>
          </div>
        </div>
      </section>

      {/* Discover Your Potential Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h4 className="text-4xl font-bold mb-2">
              <strong>Discover Your Potential</strong>
            </h4>
          </div>
          <div className="flex justify-center">
            <div className="w-full md:w-2/3">
              <div className="video-wrapper">
                <video
                  className="w-full h-64 md:h-96 rounded-lg border-2 border-gray-300"
                  src="/video.mp4"
                  allowFullScreen
                  controls={false}
                  autoPlay
                  loop
                  muted
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Minds Ask Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h4 className="text-4xl font-bold mb-2">
              <strong>Creative Minds Ask</strong>
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="item">
              <h5 className="text-2xl font-semibold mb-3">
                <strong>How I get free refferals from Gurukul Skills?</strong>
              </h5>
              <p className="text-lg mb-3">
                For free refferals just e-mail with your details just after enrolled in our courses or subscriptions within 48 hours you get upto 10 refferals.
              </p>
            </div>
            <div className="item">
              <h5 className="text-2xl font-semibold mb-3">
                <strong>Can I cancel a subscription anytime?</strong>
              </h5>
              <p className="text-lg mb-3">
                Absolutely! You have the freedom to cancel your subscription at
                any time without any hassle. Your satisfaction is our priority!
              </p>
            </div>
            <div className="item">
              <h5 className="text-2xl font-semibold mb-3">
                <strong>What is the referral program about?</strong>
              </h5>
              <p className="text-lg mb-3">
                Our referral program rewards you for spreading the knowledge!
                Refer friends and earn 87% commisssion, Exciting rewards, Trips and other rewards.
              </p>
            </div>
            <div className="item">
              <h5 className="text-2xl font-semibold mb-3">
                <strong>Did GuruKul Skills gave refferals to it&apos;s enrolled members?</strong>
              </h5>
              <p className="text-lg mb-3">
               Yes, GuruKul Skills provides minimum 10 refferals to each enrolled member per month.
              </p>
            </div>
            <div className="item">
              <h5 className="text-2xl font-semibold mb-3">
                <strong>What is the benefits of Leader-Board ranking?</strong>
              </h5>
              <p className="text-lg mb-3">
                The main benefits from this Leader-Board, you will get cash prizes according to your refferals ranks and for more see our blogs.
              </p>
            </div>
            <div className="item">
              <h5 className="text-2xl font-semibold mb-3">
                <strong>How secure is my payment information?</strong>
              </h5>
              <p className="text-lg mb-3">
                Your security is our top priority! We use advanced encryption
                methods to protect your payment information and ensure safe
                transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unleash Your Learning Journey Section */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h4 className="text-4xl font-bold mb-2">
              <strong>Unleash Your Learning Journey</strong>
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="item">
              <p className="text-lg mb-3">
                Embark on a digital adventure with our cutting-edge course
                marketplace. Dive into a world of knowledge and growth like
                never before!
              </p>
            </div>
            <div className="item">
              <p className="text-lg mb-3">
                Navigate through your personalized user dashboard, where every
                click opens doors to new opportunities. Stay ahead of the curve
                with our innovative features and seamless design.
              </p>
            </div>
            <div className="item">
              <p className="text-lg mb-3">
                Unlock your full potential with our 24/7 support team by your
                side. Let your curiosity lead the way and explore a wide range
                of courses tailored to your interests and goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesSection;
