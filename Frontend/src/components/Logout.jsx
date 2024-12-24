import React from "react";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthProvider";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  console.log({authUser, setAuthUser})

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
    // setAuthUser(null)
      localStorage.removeItem("Users");
      toast.success("Logout successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Error: " + error.message);
      setTimeout(() => {}, 3000);
    }
  };

  
  return (
    <div>
      <button
        className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
