import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const handleGoogleSignIn = () => {
    googleLogin();
    console.log("click");
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
