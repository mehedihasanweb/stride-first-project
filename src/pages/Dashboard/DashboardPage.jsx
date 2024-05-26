import useAuth from "../../hooks/useAuth";

const DashboardPage = () => {
  const { user } = useAuth();
  console.log(user);
  const { photoURL, displayName, email } = user;
  return (
    <div className=" flex justify-center text-center mx-auto">
      <div className="w-3/4">
        <figure className="">
          <img
            src={photoURL}
            alt="user_Photo"
            className=" rounded-lg flex mx-auto  w-[200px] h-[200px]"
          />
        </figure>
        <h2 className="py-6 font-semibold text-3xl">{displayName}</h2>
        <h2 className="text-xl font-semibold pb-4">Email: {email}</h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eaque
          amet explicabo, ea, expedita quos repellendus nemo voluptates nesciunt
          modi ex ut atque dolorem minus.
        </p>
      </div>
    </div>
  );
};

export default DashboardPage;
