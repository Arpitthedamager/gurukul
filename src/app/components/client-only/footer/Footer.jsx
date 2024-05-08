// components/Footer.jsx
import { FaYoutube, FaInstagram, FaTwitter, FaFacebookF, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="relative py-12">
      {/* Stars Background */}
      <hr className="my-8 border-t-2 overflow-hidden border-gray-300" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-wrap justify-between">
          {/* Footer Links */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul>
              <li className="mb-3">
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="/courses"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Courses
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="#"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Subscriptions
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="/disclaimer"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Disclaimer
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="/bilog"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Blog
                </a>
              </li>
              <li className="mb-3">
                <a
                  href="/refund"
                  className="hover:text-gray-300 transition duration-300"
                >
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://youtube.com/@gurukulskills57?si=QnsVkihJVWl9oZnC"
                  className="text-xl text-white hover:text-gray-300 transition duration-300"
                >
                  <FaYoutube className="text-4xl hover:text-red-500 transition duration-300 ease-in-out" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/gurukul_skills57?igsh=YzljYTk1ODg3Zg=="
                  className="text-xl text-white hover:text-gray-300 transition duration-300"
                >
                  <FaInstagram className="text-4xl hover:text-pink-500 transition duration-300 ease-in-out" />
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/GurukulSkills57?t=ZLVKupqbz9OfR9015smO7w&s=08"
                  className="text-xl text-white hover:text-gray-300 transition duration-300"
                >
                  <FaTwitter className="text-4xl hover:text-blue-400 transition duration-300 ease-in-out" />
                </a>
              </li>
              <li>
                <a
                  href=" https://www.facebook.com/profile.php?id=61558517696487&mibextid=ZbWKwL"
                  className="text-xl text-white hover:text-gray-300 transition duration-300"
                >
                  <FaFacebookF className="text-4xl hover:text-blue-600 transition duration-300 ease-in-out" />
                </a>
              </li>
              <li>
                <a
                  href="https://chat.whatsapp.com/G4Ht4GHmtTZ2Xhlbgs462v"
                  className="text-xl text-white hover:text-gray-300 transition duration-300"
                >
                  <FaWhatsapp className="text-4xl hover:text-green-600 transition duration-300 ease-in-out" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
            <p className="mb-3">
              <a href="https://www.google.com/maps?q=latitude,longitude" className="hover:text-blue-600">
                MIG-B-622 Kalindi vihar, Agra, India
              </a>
            </p>
            <p className="mb-3">
              Phone:
              <a
                href="tel:9310902451 "
                className=" hover:text-blue-400 transition duration-300 ease-in-out m-1"
              >
                {" "}
                9310902451
              </a>
            </p>

            <p>
              Email:
              <a
                href="mailto:gurukulskills57@gmail.com "
                className=" hover:text-blue-400 transition duration-300 ease-in-out m-1"
              >
                gurukulskills57@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center">
          <p>
            &copy; {new Date().getFullYear()}  Gurukul skills. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
