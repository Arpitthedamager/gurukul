"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/client-only/nevbar/Navbar";
import { signIn, useSession } from "next-auth/react";

function Login() {
  const { status: data, data: session } = useSession(); 
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isForgotPasswordPopupVisible, setIsForgotPasswordPopupVisible] =
    useState(false);
  const [forgotPasswordData, setForgotPasswordData] = useState({ email: "" });
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  useEffect(()=>{
    if(session){
      router.replace("/");
    }
  }, [session, router])
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(formData);
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error message when user starts typing
  };

  const handleForgotPasswordChange = (e) => {
    const { name, value } = e.target;
    setForgotPasswordData({
      ...forgotPasswordData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const showForgotPasswordPopup = () => {
    setIsForgotPasswordPopupVisible(true);
  };

  const hideForgotPasswordPopup = () => {
    setIsForgotPasswordPopupVisible(false);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    console.log("Reset Password Form Data:", forgotPasswordData);
    // Example: You can send a password reset email here or perform other actions
    alert("Password reset instructions sent to your email.");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setPending(true);
      const res = await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });
      if (res?.error) {
        setError("Invalid Credentials");
        setPending(false);
        return;
      }
      router.replace("/");
    } catch (error) {
      setPending(false);
      setError("Something went wrong");
    }
    console.log(formData);
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen mt-16 flex justify-center items-center">
        <div
          className="z-50"
          style={{
            maxWidth: "400px",
            margin: "0px auto",
            backgroundColor: "#fff",
            padding: "20px",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            color: "#333",
          }}
        >
          <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md ">
            <div>
              <h2 className="text-center mb-8">Login</h2>
              <form onSubmit={handleSubmit}>
                {/* Username Input */}
                <div className="mb-8 relative">
                  <label htmlFor="username" className="block mb-2">
                    Email:
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    id="email"
                    name="email"
                    required
                    className="w-full p-4 border rounded"
                  />
                </div>

                {/* Password Input */}
                <div className="mb-8 relative">
                  <label htmlFor="password" className="block mb-2">
                    Password:
                  </label>
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    name="password"
                    required
                    className="w-full p-4 border rounded"
                  />
                  <span
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-400 text-xl"
                    onClick={togglePasswordVisibility}
                  >
                    {isPasswordVisible ? "👁️" : "👁️‍🗨️"}
                  </span>
                </div>

                {/* Login Button */}
                <button
                  type="submit"
                  className="w-full p-4 bg-teal-500 text-white rounded hover:bg-green-600 transition duration-300"
                >
                  Login
                </button>
                <p className=" text-red-600 text-[16px] mb-4">
                  {error && error}
                </p>

                {/* Forgot Password Link */}
                <p className="text-center mt-4">
                  <a href="#" onClick={showForgotPasswordPopup}>
                    Forgot Password?
                  </a>
                </p>
              </form>
            </div>
            {/* Forgot Password Popup */}
            {isForgotPasswordPopupVisible && (
              <div
                id="forgot-password-popup"
                className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
              >
                <div className="bg-white p-8 rounded shadow-md">
                  <h2 className="text-center mb-4">Forgot Password</h2>
                  <form
                    id="forgot-password-form"
                    onSubmit={handleForgotPasswordSubmit}
                  >
                    <div className="mb-4">
                      <label htmlFor="email" className="block mb-2">
                        Email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={forgotPasswordData.email}
                        onChange={handleForgotPasswordChange}
                        required
                        className="w-full p-4 border rounded"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full p-4 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
                    >
                      Reset Password
                    </button>
                  </form>
                  <button
                    className="mt-4 w-full p-4 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                    onClick={hideForgotPasswordPopup}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
            {/* Register Link */}
            {!loggedInUser && (
              <p className="text-center mt-4">
                Don&rsquo;t have an account?
                <a href="/register" className="text-blue-500">
                  Register here
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
