const Profilephoto = () => {
  return (
    <div className="absolute top-16 bg-gray-800 w-48 h-44 rounded-md md:right-4 flex flex-col justify-between">
      <p className="cursor-pointer p-2 hover:bg-gray-700">My Profile</p>
      <p className="cursor-pointer p-2 hover:bg-gray-700">My Courses</p>
      <p className="cursor-pointer p-2 hover:bg-gray-700">My Subscriptions</p>
      <p className="cursor-pointer p-2 hover:bg-gray-700">Logout</p>
    </div>
  );
};

export default Profilephoto;
