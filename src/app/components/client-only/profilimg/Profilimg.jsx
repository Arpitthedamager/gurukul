import { signOut } from "next-auth/react";
const Profilimg = () => {
  return (
    <div className="absolute z-40 top-16 bg-gray-800 w-48 h-51 rounded-md md:right-4 flex flex-col justify-between">
      <a href="/profile">
        <p className="cursor-pointer p-2 hover:bg-gray-700">My Profile</p>
      </a>
      <a href="/courses">
        <p className="cursor-pointer p-2 hover:bg-gray-700">My Courses</p>
      </a>
      <a href="/subscription">
        <p className="cursor-pointer p-2 hover:bg-gray-700">My Subscriptions</p>
      </a>
      <a href="/wallet">
        <p className="cursor-pointer p-2 hover:bg-gray-700">wallet</p>
      </a>
      <button
        onClick={() => {
          signOut();
        }}
      >
        <p className="cursor-pointer p-2 hover:bg-gray-700">Logout</p>
      </button>
    </div>
  );
};

export default Profilimg;
