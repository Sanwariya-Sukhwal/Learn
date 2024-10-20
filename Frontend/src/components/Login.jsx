 // import React from 'react'
 import { Link } from "react-router-dom";
 import { useForm } from "react-hook-form";
 import axios from "axios";
 import toast from "react-hot-toast";
 
 function Login() {
   const {
     register,
     handleSubmit,
     formState: { errors },
   } = useForm();
 
   const onSubmit = async (data) => {
     const userInfo = {
       email: data.email,
       password: data.password,
     };
      await axios.post("https://easy-learn-backend-3a7k.onrender.com/user/login", userInfo)
      .then((res)=> {
      console.log(res.data);
       if (res.data) {
        toast.success("Loggedin  Successfully");
        document.getElementById("my_model_3").close();
        setTimeout(() => {
          window.Location.reload();
          localStorage.setItem("Users",JSON.stringify(res.data.user));  
        }, 3000);
       }
       })
     .catch ((err) => {
       if (err.response) {
         console.log(err);
         toast.error("Error: " + err.response.data.message);
         setTimeout(() => {}, 3000);
       }
     });
   };
 
   return (
     <div>
       <dialog id="my_modal_3" className="modal">
         <div className="modal-box">
           <form onSubmit={handleSubmit(onSubmit)} method="dialog">
             {/* Close button */}
             <Link
               to="/"
               className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-gray-500"
               onClick={() => document.getElementById("my_modal_3").close()}
             >
               ✕
             </Link>
             <h3 className="font-bold text-lg text-gray-700">Login</h3>
             {/* Email Input */}
             <div className="mt-4 space-y-2">
               <span className="text-gray-500">Email</span>
               <br />
               <input
                 type="email"
                 placeholder="Enter your email"
                 className="w-80 px-3 py-1 border rounded-md outline-none text-gray-500"
                 {...register("email", { required: true })}
               />
               <br />
               {errors.email && (
                 <span className="text-sm text-red-500">This field is required</span>
               )}
             </div>
             {/* Password Input */}
             <div className="mt-4 space-y-2">
               <span className="text-gray-500">Password</span>
               <br />
               <input
                 type="password"
                 placeholder="Enter your password"
                 className="w-80 px-3 py-1 border rounded-md outline-none text-gray-500"
                 {...register("password", { required: true })}
               />
               <br />
               {errors.password && (
                 <span className="text-sm text-red-500">This field is required</span>
               )}
             </div>
             {/* Button */}
             <div className="flex justify-around mt-4">
               <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                 Login
               </button>
               <p>
                 Not registered?{" "}
                 <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                   Signup
                 </Link>{" "}
               </p>
             </div>
           </form>
         </div>
       </dialog>
     </div>
   );
 }
 
 export default Login;
 