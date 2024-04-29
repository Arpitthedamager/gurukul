"use client";
import React, { useState, useRef } from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaCopy,
  FaTimes,
} from "react-icons/fa";
import Navbar from "../components/client-only/nevbar/Navbar";
import Footer from "../components/client-only/footer/Footer";

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: "Eleanor Pena",
    username: "@eleanorpena",
    id: "Oxc4c16a645_b21a",
    followers: 1069,
    bio: "Eleanor Pena is a creator of minimalistic x bold graphics and digital artwork. Artist/ Creative Director by Day #NFT minting@ with FND night.",
    joined: "May, 2021",
    social: {
      twitter: "twitter.com/eleanorpena",
      facebook: "facebook.com/eleanorpena",
      instagram: "instagram.com/eleanorpena",
      linkedin: "linkedin.com/in/eleanorpena",
    },
  });

  const [editProfileData, setEditProfileData] = useState({
    name: profileData.name,
    username: profileData.username,
    bio: profileData.bio,
    social: { ...profileData.social },
  });

  const handleEditProfile = () => {
    setProfileData({
      ...profileData,
      name: editProfileData.name,
      username: editProfileData.username,
      bio: editProfileData.bio,
      social: { ...editProfileData.social },
    });
    setIsEditing(false);
  };

  const handleCopyId = () => {
    const idInput = document.getElementById("editId");
    idInput.select();
    document.execCommand("copy");
  };

  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        setProfileData({
          ...profileData,
          profileImage: event.target.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-900">
        <div className="container px-4 py-8 bg-gray-900">
          <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              {/* Profile Card Content */}
              <div className="flex items-center justify-center">
                <div className="relative w-32 h-32 mr-4 overflow-hidden rounded-full">
                  <Image
                    src={profileData.profileImage || "/pop.webp"}
                    className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                    alt="Profile Image"
                    onClick={() => fileInputRef.current.click()}
                  />
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleImageUpload}
                  />
                  <button className="absolute inset-0 flex justify-center items-center w-full h-full bg-black bg-opacity-50 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full">
                    Change Photo
                  </button>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {profileData.name}
                  </h1>
                  <p className="text-sm text-gray-600">
                    {profileData.username}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <input
                      id="editId"
                      type="text"
                      className="text-sm text-gray-600 bg-gray-100 focus:outline-none px-2 py-1 rounded-md w-36"
                      value={profileData.id}
                      readOnly
                    />
                    <button
                      className="text-gray-600 hover:text-blue-500 focus:outline-none"
                      onClick={handleCopyId}
                    >
                      <FaCopy />
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-900 mt-4">
                {profileData.followers} Followers
              </p>
              <button
                className="btn btn-dark h-10 mt-2 bg-red-600 hover:bg-gray-500 ocus:outline-none text-gray-900 border-gray-300 rounded-md px-4 py-2 "
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
              <p className="text-sm text-gray-600 mt-4">{profileData.bio}</p>
              <div className="flex gap-4 mt-4">
                <FaTwitter className="text-3xl text-gray-900 hover:text-blue-500 cursor-pointer" />
                <FaFacebookF className="text-3xl text-gray-900 hover:text-blue-500 cursor-pointer" />
                <FaInstagram className="text-3xl text-gray-900 hover:text-pink-500  cursor-pointer" />
                <FaLinkedin className="text-3xl text-gray-900 hover:text-blue-500 cursor-pointer" />
              </div>
              <div className="px-4 py-2 mt-4 bg-gray-100 rounded-md text-sm text-gray-800">
                Joined {profileData.joined}
              </div>
            </div>
          </div>
          {/* Edit Profile Popup */}
          {isEditing && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
              <div className="max-w-lg mx-auto bg-white rounded-lg shadow-lg overflow-hidden animate__animated animate__fadeInDown">
                <div className="p-8 relative">
                  <button
                    className="absolute top-4 right-4 text-gray-600 hover:text-red-500 focus:outline-none"
                    onClick={() => setIsEditing(false)}
                  >
                    <FaTimes />
                  </button>
                  <h2 className="text-2xl font-bold text-center text-gray-900  mb-4">
                    Edit Profile
                  </h2>
                  <div className="form-group">
                    <label className="form-label text-gray-700">Name</label>
                    <input
                      type="text"
                      className="form-input bg-gray-100 focus:outline-none border text-gray-900 border-gray-300 rounded-md px-4 py-2 w-full"
                      value={editProfileData.name}
                      onChange={(e) =>
                        setEditProfileData({
                          ...editProfileData,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label text-gray-700">Username</label>
                    <input
                      type="text"
                      className="form-input bg-gray-100 focus:outline-none border text-gray-900  border-gray-300 rounded-md px-4 py-2 w-full"
                      value={editProfileData.username}
                      onChange={(e) =>
                        setEditProfileData({
                          ...editProfileData,
                          username: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label text-gray-700">Bio</label>
                    <textarea
                      className="form-textarea h-40 resize-none bg-gray-100  text-gray-900 focus:outline-none border border-gray-300 rounded-md px-4 py-2 w-full"
                      style={{ color: "#4a5568" }}
                      value={editProfileData.bio}
                      onChange={(e) =>
                        setEditProfileData({
                          ...editProfileData,
                          bio: e.target.value,
                        })
                      }
                    ></textarea>
                  </div>
                  {Object.keys(editProfileData.social).map((key) => (
                    <div className="form-group" key={key}>
                      <label className="form-label text-gray-700">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                      <input
                        type="text"
                        className="form-input bg-gray-100 focus:outline-none border text-gray-900 border-gray-300 rounded-md px-4 py-2 w-full"
                        value={editProfileData.social[key]}
                        onChange={(e) =>
                          setEditProfileData({
                            ...editProfileData,
                            social: {
                              ...editProfileData.social,
                              [key]: e.target.value,
                            },
                          })
                        }
                      />
                    </div>
                  ))}
                  <button
                    className="btn1 btn-dark h-10 w-full border-none bg-black text-gray-300 text-sm mt-4 focus:outline-none"
                    onClick={handleEditProfile}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfileCard;
