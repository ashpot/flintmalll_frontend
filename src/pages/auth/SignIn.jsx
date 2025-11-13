// import React from "react";
// import Navbar from '../../components/layout/Navbar';
// import { FaFacebook } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
// import SignInScreen from '../../assets/images/SignInScreen.png';

// const SignIn = () => {
//   return (
// 	<div>
//       <Navbar 
// 	  	rightContent={<a href="/signup" className='text-black text-lg font-medium'>New to FlintMall? <span className='text-primary'>Create an Account</span></a>}
// 	  />

// 	  <div
// 		className="pt-20 w-full h-[100%] bg-cover bg-center flex flex-col"
// 			style={{
// 				backgroundImage:
// 				"url(" + SignInScreen + ")",
// 			}}
// 		>

// 		<div className="flex flex-1 items-center justify-center px-4">
// 			<div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl w-[50%] mx-auto p-8">
			
// 				<h2 className="text-4xl font-bold text-center text-primary mb-7">
// 					Sign into your account
// 				</h2>

// 				<form className="space-y-4">
// 					<div>
// 						<input
// 							type="email"
// 							placeholder="Email"
// 							className="mt-1 w-full px-4 py-3 font-medium text-lg text-[#708CAF] border border-white rounded-2xl focus:ring-2 focus:ring-secondary placeholder:text-[#708CAF] outline-none"
// 						/>
// 					</div>

// 					<div>
// 						<input
// 							type="password"
// 							placeholder="Password"
// 							className="mt-1 w-full px-4 py-3 font-medium text-lg text-[#708CAF] border border-white rounded-2xl focus:ring-2 focus:ring-secondary placeholder:text-[#708CAF] outline-none"
// 						/>
// 						<div className="flex justify-between items-center my-4 font-medium text-lg">
// 							<label className="flex items-center gap-2 ">
// 								Stay signed in
// 								<input type="checkbox" className="accent-secondary" />
// 							</label>
// 							<a href="/forgotpassword" className="text-primary hover:text-primaryLight hover:no-underline">
// 							Forgot Password?
// 							</a>
// 						</div>
// 					</div>

// 					<button
// 						type="submit"
// 						className="w-full px-4 py-3 font-medium text-lg rounded-2xl bg-secondary hover:bg-secondaryLight text-white transition"
// 						>
// 						Sign In
// 					</button>

// 					<div className="flex items-center my-6">
// 						<hr className="flex-1 border-[#B7B7B7]" />
// 						<span className="px-2 text-[#666666] text-lg font-semibold">or continue with</span>
// 						<hr className="flex-1 border-[#B7B7B7]" />
// 					</div>

// 					<div className="flex justify-center gap-4 text-lg font-bold text-[#1E1E1E]">
// 						<button
// 							type="button"
// 							className="flex items-center gap-2 border border-white px-8 py-2 rounded-xl hover:bg-white hover:text-[#666666]"
// 						>
// 							<FcGoogle size={25}/> Google
// 						</button>
// 						<button
// 							type="button"
// 							className="flex items-center gap-2 border border-white px-8 py-2 rounded-xl hover:bg-white hover:text-[#666666]"
// 						>
// 							<FaFacebook size={25} className="text-[#1877F2]" /> Facebook
// 						</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>

// 		<footer className="flex justify-between w-[85%] mx-auto font-medium text-lg text-white my-4">
// 			<p> 
// 				&copy; 2025 FlintMall. All Rights Reserved.
// 			</p>
// 			<div className="flex justify-center gap-3 mt-1">
// 				<a href="/privacy-policy" className="hover:underline">
// 					Privacy Policy
// 				</a>
// 				<span>|</span>
// 				<a href="#" className="hover:underline">
// 					Terms of Service
// 				</a>
// 			</div>
// 		</footer>
// 		</div>
// 	</div>
    
//   );
// };

// export default SignIn;


import React from "react";
import { useNavigate } from "react-router-dom"; 

import Navbar from '../../components/layout/Navbar';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import SignInScreen from '../../assets/images/SignInScreen.png';

const SignIn = () => {
  const navigate = useNavigate();

  const handleFakeLogin = (event) => {
    event.preventDefault(); 
    
    console.log("Login button clicked, redirecting...");

    navigate('/'); 
  };

  return (
    <div>
      <Navbar 
        rightContent={<a href="/signup" className='text-black text-lg font-medium'>New to FlintMall? <span className='text-primary'>Create an Account</span></a>}
      />

      <div
        className="pt-20 w-full h-[100%] bg-cover bg-center flex flex-col"
            style={{
                backgroundImage:
                "url(" + SignInScreen + ")",
            }}
        > 

        <div className="flex flex-1 items-center justify-center px-4">
            <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl w-[50%] mx-auto p-8">
            
                <h2 className="text-4xl font-bold text-center text-primary mb-7">
                    Sign into your account
                </h2>

                <form className="space-y-4" onSubmit={handleFakeLogin}>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            className="mt-1 w-full px-4 py-3 font-medium text-lg text-[#708CAF] border border-white rounded-2xl focus:ring-2 focus:ring-secondary placeholder:text-[#708CAF] outline-none"
                        />
                    </div>

                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="mt-1 w-full px-4 py-3 font-medium text-lg text-[#708CAF] border border-white rounded-2xl focus:ring-2 focus:ring-secondary placeholder:text-[#708CAF] outline-none"
                        />
                        <div className="flex justify-between items-center my-4 font-medium text-lg">
                            <label className="flex items-center gap-2 ">
                                Stay signed in
                                <input type="checkbox" className="accent-secondary" />
                            </label>
                            <a href="/forgotpassword" className="text-primary hover:text-primaryLight hover:no-underline">
                            Forgot Password?
                            </a>
                        </div>
                    </div>

                    <button
                        type="submit" 
                        className="w-full px-4 py-3 font-medium text-lg rounded-2xl bg-secondary hover:bg-secondaryLight text-white transition"
                        >
                        Sign In
                    </button>

                    <div className="flex items-center my-6">
                        <hr className="flex-1 border-[#B7B7B7]" />
                        <span className="px-2 text-[#666666] text-lg font-semibold">or continue with</span>
                        <hr className="flex-1 border-[#B7B7B7]" />
                    </div>

                    <div className="flex justify-center gap-4 text-lg font-bold text-[#1E1E1E]">
                        <button
                            type="button"
                            className="flex items-center gap-2 border border-white px-8 py-2 rounded-xl hover:bg-white hover:text-[#666666]"
                        >
                            <FcGoogle size={25}/> Google
                        </button>
                        <button
                            type="button"
                            className="flex items-center gap-2 border border-white px-8 py-2 rounded-xl hover:bg-white hover:text-[#666666]"
                        >
                            <FaFacebook size={25} className="text-[#1877F2]" /> Facebook
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <footer className="flex justify-between w-[85%] mx-auto font-medium text-lg text-white my-4">
            <p> 
                &copy; 2025 FlintMall. All Rights Reserved.
            </p>
            <div className="flex justify-center gap-3 mt-1">
                <a href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                </a>
                <span>|</span>
                <a href="#" className="hover:underline">
                    Terms of Service
                </a>
            </div>
        </footer>
        </div>
    </div>
    
  );
};

export default SignIn;