"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isForgotPasswordPopupVisible, setIsForgotPasswordPopupVisible] =
    useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [forgotPasswordData, setForgotPasswordData] = useState({
    email: "",
  });
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Here, you can implement your login logic
    // For demonstration purposes, let's simulate login with hardcoded user data
    // Replace this with your actual login logic
    setLoggedInUser({
      _id: "661fd8ee346fb45417862b9a",
      first_name: "ansh",
      email: "porwalshlpi@gmail.com",
      gender: "Male",
      dob: "2024-04-16T00:00:00.000+00:00",
      phone: "9719322171",
      state: "Delhi",
      createdAt: "2024-04-17T14:13:02.725+00:00",
      updatedAt: "2024-04-17T14:13:02.725+00:00",
      __v: 0,
    });
    
    router.push("/");
  };

  const handleTemporaryLogin = () => {
    console.log("Temporary login");
    // For demonstration purposes, let's simulate login with hardcoded user data
    // Replace this with your actual login logic
    const user = {
      _id: "661fdc0c1e1f5d59ad62cfdf",
      first_name: "awl",
      email: "ansyh2018ff@gmail.com",
      gender: "Female",
      dob: "2024-04-04T00:00:00.000+00:00",
      phone: "8585858585",
      state: "Assam",
      createdAt: "2024-04-17T14:26:20.791+00:00",
      updatedAt: "2024-04-17T14:26:20.791+00:00",
      __v: 0,
    };
    console.log("Logged in user:", user);
    setLoggedInUser(user);
    router.push("/");
  };

  const handleTemporaryLogout = () => {
    // Temporary logout logic
    console.log("Temporary logout");
    setLoggedInUser(null);
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
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
          {loggedInUser ? (
            // If user is logged in, display user information
            <div>
              <h2 className="text-center mb-4">Logged In</h2>
              <div className="mb-4">
                <strong>Name:</strong> {loggedInUser.first_name}
              </div>
              <div className="mb-4">
                <strong>Email:</strong> {loggedInUser.email}
              </div>
              <div className="mb-4">
                <strong>Gender:</strong> {loggedInUser.gender}
              </div>
              <div className="mb-4">
                <strong>Phone:</strong> {loggedInUser.phone}
              </div>
              <div className="mb-4">
                <strong>State:</strong> {loggedInUser.state}
              </div>
              <button
                onClick={handleTemporaryLogout}
                className="w-full p-4 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            // If user is not logged in, display login form
            <div>
              <h2 className="text-center mb-8">Login</h2>
              <form
                action="#"
                method="post"
                id="login-form"
                onSubmit={handleSubmit}
              >
                {/* Username Input */}
                <div className="mb-8 relative">
                  <label htmlFor="username" className="block mb-2">
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
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
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
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

                {/* Forgot Password Link */}
                <p className="text-center mt-4">
                  <a href="#" onClick={showForgotPasswordPopup}>
                    Forgot Password?
                  </a>
                </p>
              </form>
            </div>
          )}
          {/* Temporary Login Button */}
          <div className="mt-4">
            <button
              onClick={handleTemporaryLogin}
              className="w-full p-4 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-300"
            >
              Temporary Login
            </button>
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
              Don't have an account?
              <a href="/register" className="text-blue-500">
                Register here
              </a>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
