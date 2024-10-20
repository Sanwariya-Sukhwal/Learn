// // import React from 'react'
// import Login from "./Login";
// import { Link, Navigate } from "react-router-dom"
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import toast from "react-hot-toast";
// // import { Navigate } from "react-router-dom";

// function Signup() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo={
//       fullname:data.fullname,
//       email:data.eamil,
//       password:data.password,
//     }
//     await axios
//     .post("https://easy-learn-backend-3a7k.onrender.com/user/signup", userInfo)
//     .then((res)=>{
//       console.log(res.data); 
//       if(res.data) {
//        toast.success("Signup Successfully");
//        <Navigate to="/" />
//       }
//       localStorage.setItem("Users",JSON.stringify (res.data.user));
//     }).catch((err) =>{
//       if(err.response){
//         console.log(err);
//         toast.error("Error:"+ err.response.data.message);
//        } 
//     });
//   };

//   return (
//     <>
//       <div className="flex h-screen items-center justify-center">
//         <div className=" w-[600px]">
//           <div className="modal-box">
//             <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
//              {/* if there is a button in form, it will close the modal */}
//              <Link  
//              to="/" 
//              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-500"
//              >
//                 ✕
//               </Link>
    
//              <h3 className="font-bold text-lg text-gray-700">Signup</h3>
//              {/* Nmae */}
//              <div className="mt-4 space-y-2">
//                <span className="text-gray-500">Name</span>
//                <br />
//                <input type="text" 
//                  placeholder="Enter your fullname" 
//                  className="w-80 px-3 py-1 border rounded-md outline-none text-gray-500 "
//                  {...register("fullname", { required: true})}    
//                />
//                <br />
//                   {errors.fullname &&( 
//                   <span className="text-sm text-red-500">
//                     This field is required
//                   </span>
//                 )}
//               </div>
//               {/* email */}
//               <div className="mt-4 space-y-2">
//                 <span className="text-gray-500">Email</span>
//                 <br />
//                 <input type="email" 
//                   placeholder="Enter your email" 
//                   className="w-80 px-3 py-1 border rounded-md outline-none text-gray-500"
//                   {...register("email", { required: true})}    
//                 />
//                 <br />
//                 {errors.password &&( 
//                   <span className="text-sm text-red-500">
//                     This field is required
//                   </span>
//                 )}
//                 </div>
//                 {/* password */}
//                 <div className="mt-4 space-y-2">
//                   <span className="text-gray-500">Password</span>
//                   <br />
//                   <input type="text" 
//                     placeholder="Enter your password" 
//                     className="w-80 px-3 py-1 border rounded-md outline-none text-gray-500"
//                     {...register("password", { required: true })} 
//                   />
//                   <br />
//                   {errors.password &&( 
//                     <span className="text-sm text-red-500">
//                       This field is required
//                     </span>
//                   )}
//                 </div>
//               {/* Button */}
//               <div className="flex justify-around mt-4">
//                 <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
//                     Signup
//                 </button>
//                 <p className="text-xl">  
//                   Have account?{" "}
//                   <button
//                   className="underline text-blue-500 cursor-pointer"
//                   onClick={() =>
//                       document.getElementById("my_modal_3").showModal()
//                   }
//                   >
//                   Login
//                   </button>
//                   <Login />
//                 </p>
//               </div>
//             </form>
//          </div>
//        </div>
//       </div>
//     </>
//   );
// }

// export default Signup;
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post("https://easy-learn-backend-3a7k.onrender.com/user/signup", userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className=" w-[600px] ">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Signup</h3>
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                <br />
                {errors.fullname && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    This field is required
                  </span>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p className="text-xl">
                  Have account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
