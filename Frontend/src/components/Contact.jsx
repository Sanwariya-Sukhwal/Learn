// import Footer from "./Footer";
// import Navbar from "./Navbar";

// export default function Contact() {
 

//   return (
//     <>
//       <Navbar />

//       <div className=" relative flex items-top justify-center min-h-[600px] bg-white sm:items-center sm:pt-0 dark:bg-slate-900 dark:text-white">
//         <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
//           <div className="mt-8 overflow-hidden">
//             <div className="grid grid-cols-1 md:grid-cols-2">
//               {/* Contact Information Section */}
//               <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
//                 <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
//                   Get in touch:
//                 </h1>
//                 <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
//                   Fill in the form to start a conversation
//                 </p>

//                 <div className="flex items-center mt-8 text-gray-600">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="1.5"
//                     viewBox="0 0 24 24"
//                     className="w-8 h-8 text-gray-500"
//                   >
//                     <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                     <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                   <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                     Acme Inc, Street, State, Postal Code
//                   </div>
//                 </div>

//                 <div className="flex items-center mt-4 text-gray-600">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="1.5"
//                     viewBox="0 0 24 24"
//                     className="w-8 h-8 text-gray-500"
//                   >
//                     <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                   <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                     +44 1234567890
//                   </div>
//                 </div>

//                 <div className="flex items-center mt-2 text-gray-600">
//                   <svg
//                     fill="none"
//                     stroke="currentColor"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="1.5"
//                     viewBox="0 0 24 24"
//                     className="w-8 h-8 text-gray-500"
//                   >
//                     <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                   <div className="ml-4 text-md tracking-wide font-semibold w-40">
//                     info@acme.org
//                   </div>
//                 </div>
//               </div>

//               {/* Sign-up Form Section */}
//               <div className="flex items-center justify-center mx-2">
//                 <div className="w-[600px] bg-white p-6 rounded-md shadow-md dark:bg-slate-900 dark:text-white border-2 border-white">
//                   <h3 className="font-bold text-lg mb-4">Signup</h3>

//                   {/* Name Input */}
//                   <div className="mt-4">
//                     <label className="block text-sm font-medium text-pink-500 ">Name</label>
//                     <input 
//                       type="text" 
//                       placeholder="Enter your fullname" 
//                       className="w-full mt-1 px-3 py-2 border rounded-md outline-none"
//                     />
//                   </div>

//                   {/* Email Input */}
//                   <div className="mt-4">
//                     <label className="block text-sm font-medium text-pink-500">Email</label>
//                     <input 
//                       type="email" 
//                       placeholder="Enter your email" 
//                       className="w-full mt-1 px-3 py-2 border rounded-md outline-none"
//                     />
//                   </div>

//                   {/* Password Input */}
//                   <div className="mt-4">
//                     <label className="block text-sm font-medium text-pink-500">Password</label>
//                     <input 
//                       type="password" 
//                       placeholder="Enter your password" 
//                       className="w-full mt-1 px-3 py-2 border rounded-md outline-none"
//                     />
//                   </div>

//                   {/* Signup Button and Login Link */}
//                   <div className="flex justify-between items-center mt-6">
//                     <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200">
//                       Signup
//                     </button>
//                     <p className="text-sm">
//                       Have an account?{" "}
//                       <span className="underline text-blue-500 cursor-pointer" onClick={() => alert('Login functionality not implemented')}>
//                         Login
//                       </span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// }

import { useForm } from 'react-hook-form';
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Navbar />

      <div className="relative flex items-top justify-center min-h-[600px] bg-white sm:items-center sm:pt-0 dark:bg-slate-900 dark:text-white">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
          <div className="mt-8 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Information Section */}
              <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                  Get in Easylearn :
                </h1>
                <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                  Fill in the form to start a conversation
                </p>

                <div className="flex items-center mt-8 text-gray-600">
                  <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    Acme Inc, Street, State, Postal Code
                  </div>
                </div>

                <div className="flex items-center mt-4 text-gray-600">
                  <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    +91 8279020288
                  </div>
                </div>

                <div className="flex items-center mt-2 text-gray-600">
                  <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="ml-4 text-md tracking-wide font-semibold w-40">
                    easylearn@gamil.com
                  </div>
                </div>
              </div>

              {/* Sign-up Form Section */}
              <div className="flex items-center justify-center mx-2">
                <div className="w-[600px] bg-white p-6 rounded-md shadow-md dark:bg-slate-900 dark:text-white border-2 border-white">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="font-bold text-lg mb-4">Signup</h3>

                    {/* Name Input */}
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-pink-500">Name</label>
                      <input 
                        type="text" 
                        placeholder="Enter your fullname" 
                        className="w-full mt-1 px-3 py-2 border rounded-md outline-none text-gray-500"
                        {...register("name", { required: true })} 
                      />
                      {errors.name && (
                        <span className="text-sm text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-pink-500">Email</label>
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="w-full mt-1 px-3 py-2 border rounded-md outline-none text-gray-500"
                        {...register("email", { required: true })} 
                      />
                      {errors.email && (
                        <span className="text-sm text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>

                    {/* Password Input */}
                    <div className="mt-4">
                      <label className="block text-sm font-medium text-pink-500">Password</label>
                      <input 
                        type="password" 
                        placeholder="Enter your password" 
                        className="w-full mt-1 px-3 py-2 border rounded-md outline-none text-gray-500"
                        {...register("password", { required: true })}                    
                      />
                      {errors.password && (
                        <span className="text-sm text-red-500">
                          This field is required
                        </span>
                      )}
                    </div>

                    {/* Signup Button and Login Link */}
                    <div className="flex justify-between items-center mt-6">
                      <button className="bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-700 duration-200">
                        Signup
                      </button>
                      <p className="text-sm">
                        Have an account?{" "}
                        <button
                          className="underline text-blue-500 cursor-pointer"
                          onClick={() => document.getElementById("my_modal_3")?.showModal()}
                        >
                          Login
                        </button>
                        
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
