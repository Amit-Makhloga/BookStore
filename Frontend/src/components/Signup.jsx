import React from "react";
import { Link, Navigate, replace, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const userInfo = {
        fullname: data.fullname,
        email: data.email,
        password: data.password,
      };

      const response = await axios.post(
        "http://localhost:4001/user/signup",
        userInfo
      );

      console.log(response.data);
      if(response.data){
        toast.success("Signup Successfully");
        navigate(from, {replace:true})
      }
      
      localStorage.setItem("Users", JSON.stringify(response.data.user));
    } catch (err) {
      console.error("Error:", err.response?.data || err.message);
      
      toast .error("Error: " + (err.response?.data?.message || err.message))
    }
  };

  // const onSubmit = async (data) => {
  //   const userInfo = {
  //     fullname: data.fullname,
  //     email: data.email,
  //     password: data.password
  //   }

  //   await axios.post("http://localhost:4001/user/signup", userInfo)
  //   .then((res)=> {
  //     console.log(res.data)
  //     if(res.data){
  //       alert("Signup Successfully")
  //     }
  //   }).catch((err) => {
  //     console.log(err)
  //     alert("Error: " + err)
  //   })
  // }

  return (
    <>
      <div className="">
        <div className="flex h-screen items-center justify-center">
          <div className="modal-box w-[400px]">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to={"/"}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              <h3 className="font-bold text-lg mx-3">Signup</h3>

              {/* name */}
              <div className="mt-4 ">
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="w-80 p-3  border rounded-md"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* email */}
              <div className="mt-4 ">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-80 p-3  border rounded-md"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
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
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>

              {/* signup */}
              <div className="mt-4">
                <button className="w-80 p-3 bg-green-600 rounded-md border border-black text-white hover:bg-green-400">
                  <Link to={"/signup"}>Sign up</Link>
                </button>
              </div>

              <div className="mt-4 text-center">
                <a
                  className="text-blue-600 hover:underline"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Already have an account?
                </a>
                <Login />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
