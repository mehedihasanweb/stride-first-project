import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  const { user } = useAuth();
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    fetch(`http://localhost:5000/user/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, [user]);

  return (
    <div className=" flex justify-center text-center mx-auto">
      <div className="w-3/4">
        <figure className="">
          <img
            src={user?.photoURL}
            alt="user_Photo"
            className=" rounded-lg flex mx-auto  w-[200px] h-[200px]"
          />
        </figure>
        <h2 className="py-6 font-semibold text-3xl">{userInfo?.name}</h2>
        <h2 className="text-xl font-semibold pb-4">Email: {userInfo?.email}</h2>
        <p className="text-gray-500 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eaque
          amet explicabo, ea, expedita quos repellendus nemo voluptates nesciunt
          modi ex ut atque dolorem minus.
        </p>
        <Link
          to={`update-profile/update/${userInfo?._id}`}
          className="text-xl font-semibold bg-orange-600 px-3 py-2 text-white rounded-md"
        >
          Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default DashboardPage;
