import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  // type Inputs = {
  //   example: string,
  //   exampleRequired: string,
  // }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const response = await axios.post(
        "http://localhost:4001/user/login",
        userInfo
      );
      console.log(response.data);
      if(response.data){
        
        toast.success("Loggedin Successfully")
        document.getElementById("my_modal_3").close();
        setTimeout(() => {
          window.location.reload();
          localStorage.setItem("Users", JSON.stringify(response.data.user));          
        }, 2000);
      }
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
      toast.error("Error: " + (err.response?.data?.message || err.message))
      setTimeout(() => {},3000)
    }
  };
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box w-[400px]">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            {/* <Link
              to={"/signup"}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link> */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>
          <h3 className="font-bold text-lg mx-3">Login</h3>

          {/* email */}
          <div className="mt-4 ">
            <input
              type="email"
              placeholder="Email address"
              className="w-80 p-3  border rounded-md"
              {...register("email", { required: true })}
              />
              <br />
            {errors.email && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          {/* password */}
          <div className="mt-4">
            <input
              type="password"
              placeholder="Password"
              className="w-80 p-3  border rounded-md"
              {...register("password", { required: true })}
              />
              <br />
            {errors.password && <span className="text-sm text-red-500">This field is required</span>}
          </div>

          {/* login */}
          <div className="mt-4">
            <button className="w-80 p-3 bg-blue-600 rounded-md border-black border text-white hover:bg-blue-400">
              Log in
            </button>
          </div>

          <div className="mt-2">
            <Link to={"/signup"}>
              <button className="w-80 p-3 bg-green-600 rounded-md border border-black text-white hover:bg-green-400">
                Sign up
              </button>
            </Link>
          </div>
              </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
