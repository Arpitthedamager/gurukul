"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
function Registration() {
  const [padding, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const [formData, setFormData] = useState({
    first_name: "",
    email: "",
    gender: "",
    dob: "",
    phone: "",
    password: "",
    confirm_password: "",
    state: "",
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
    useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error message when user starts typing
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    if (formData.password !== formData.confirm_password) {
      setErrors({ confirm_password: "Passwords do not match" });
      return;
    }
    try {
      setPending(true);
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setPending(false);
        setSuccess(true);
        const form = e.target;
        form.reset();
        router.push("/login");
      } else {
        const errorData = await res.json();
        setPending(false);
        setErrors(errorData.message);
      }
    } catch (error) {
      setPending(false);
      setErrors("something went wrong");
    }
    console.log(formData);
    // Call your registerUser function here if needed
  };

  const validateForm = (formData) => {
    let errors = {};
    if (!formData.first_name.trim()) {
      errors.first_name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email address";
    }
    if (!formData.gender) {
      errors.gender = "Gender is required";
    }
    if (!formData.dob) {
      errors.dob = "Date of Birth is required";
    }
    if (formData.phone && !isValidPhone(formData.phone)) {
      errors.phone = "Invalid phone number";
    }
    if (!formData.password.trim()) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    if (!formData.confirm_password.trim()) {
      errors.confirm_password = "Please confirm your password";
    }
    return errors;
  };

  const isValidEmail = (email) => {
    // Simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone) => {
    // Simple phone number validation regex (10 digits)
    return /^[0-9]{10}$/.test(phone);
  };

  return (
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
      <div className="max-w-md z-50 mx-auto bg-white p-8 rounded shadow-md">
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Registration
        </h1>
        <form onSubmit={handleSubmit} id="registration-form">
          {/* Name Input */}
          <div
            className="input-group"
            style={{ marginBottom: "20px", position: "relative" }}
          >
            <label
              htmlFor="first_name"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Name:
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              required
              style={{
                width: "calc(100% - 32px)",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            {errors.first_name && (
              <span style={{ color: "red", fontSize: "0.8em" }}>
                {errors.first_name}
              </span>
            )}
          </div>
          {/* Email Input */}
          <div
            className="input-group"
            style={{ marginBottom: "20px", position: "relative" }}
          >
            <label
              htmlFor="email"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: "calc(100% - 32px)",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            {errors.email && (
              <span style={{ color: "red", fontSize: "0.8em" }}>
                {errors.email}
              </span>
            )}
          </div>
          {/* Gender Input */}
          <div
            className="input-group"
            style={{ marginBottom: "20px", position: "relative" }}
          >
            <label
              htmlFor="gender"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              style={{
                width: "calc(100% - 32px)",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            >
              <option value="" disabled>
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && (
              <span style={{ color: "red", fontSize: "0.8em" }}>
                {errors.gender}
              </span>
            )}
          </div>
          {/* Date of Birth Input */}
          <div
            className="input-group"
            style={{ marginBottom: "20px", position: "relative" }}
          >
            <label
              htmlFor="dob"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Date of Birth:
            </label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              style={{
                width: "calc(100% - 32px)",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            {errors.dob && (
              <span style={{ color: "red", fontSize: "0.8em" }}>
                {errors.dob}
              </span>
            )}
          </div>
          {/* Phone Input */}
          <div
            className="input-group"
            style={{ marginBottom: "20px", position: "relative" }}
          >
            <label
              htmlFor="phone"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Phone No:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              style={{
                width: "calc(100% - 32px)",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            {errors.phone && (
              <span style={{ color: "red", fontSize: "0.8em" }}>
                {errors.phone}
              </span>
            )}
          </div>
          {/* Password Input */}
          <div
            className="input-group"
            style={{ marginBottom: "20px", position: "relative" }}
          >
            <label
              htmlFor="password"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Create Password:
            </label>
            <input
              type={isPasswordVisible ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{
                width: "calc(100% - 32px)",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            <span
              className="password-toggle"
              onClick={togglePasswordVisibility}
              style={{
                position: "absolute",
                top: "50%",
                right: "0",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              {isPasswordVisible ? "👁️" : "👁️‍🗨️"}
            </span>
            {errors.password && (
              <span style={{ color: "red", fontSize: "0.8em" }}>
                {errors.password}
              </span>
            )}
          </div>
          {/* Confirm Password Input */}
          <div
            className="input-group"
            style={{ marginBottom: "20px", position: "relative" }}
          >
            <label
              htmlFor="confirm_password"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Confirm Password:
            </label>
            <input
              type={isConfirmPasswordVisible ? "text" : "password"}
              id="confirm_password"
              name="confirm_password"
              value={formData.confirm_password}
              onChange={handleChange}
              required
              style={{
                width: "calc(100% - 32px)",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
            />
            <span
              className="password-toggle"
              onClick={toggleConfirmPasswordVisibility}
              style={{
                position: "absolute",
                top: "50%",
                right: "0",
                transform: "translateY(-50%)",
                cursor: "pointer",
                fontSize: "20px",
              }}
            ></span>
            {errors.confirm_password && (
              <span style={{ color: "red", fontSize: "0.8em" }}>
                {errors.confirm_password}
              </span>
            )}
            {/* State Input */}
            <div
              className="input-group"
              style={{ marginBottom: "20px", position: "relative" }}
            >
              <label
                htmlFor="state"
                style={{ display: "block", marginBottom: "5px" }}
              >
                State:
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
                style={{
                  width: "calc(100% - 32px)",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              >
                <option value="" disabled>
                  Select State
                </option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Assam">Assam</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="HimachalPradesh">HimachalPradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Dadra and Nagar Haveli and Daman & Diu">
                  Dadra and Nagar Haveli and Daman & Diu
                </option>
                <option value="Delhi">Delhi</option>
                <option value="Jammu & Kashmir">Jammu & Kashmir</option>
                <option value="Ladakh">Ladakh</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Puducherry">Puducherry</option>
              </select>
            </div>
          </div>
          {/* State Input */}
          {/* Your existing code for state input */}
          {/* Register Button */}
          <button
            type="submit"
            className="hover:bg-green-600 transition duration-300"
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              border: "none",
              backgroundColor: "#009688",
              color: "#fff",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          >
            Register
          </button>
          
          <div className=" mt-3 hidden bg-rose-500 text-white">
            <h2>user already exists Please change Email</h2>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
