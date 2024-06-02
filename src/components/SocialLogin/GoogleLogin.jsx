import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const handleGoogleSignIn = () => {
    googleLogin().then((data) => {
      console.log(data?.user?.email);
      if (data?.user?.email) {
        const userData = {
          name: data?.user?.displayName,
          email: data?.user?.email,
        };
        fetch("http://localhost:5000/user", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data?.token);
          });
      }
    });
  };

  return (
    <button onClick={handleGoogleSignIn} className="btn w-full">
      <div className="flex items-center gap-2">
        <FaGoogle size={24} />
        <p>Google</p>
      </div>
    </button>
  );
};

export default GoogleLogin;
