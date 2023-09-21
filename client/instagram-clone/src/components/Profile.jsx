import React, { useState } from "react";
import HamburgerNav from "./HamburgerNav";
import Layout from "./Layout";

// Placeholder component for the logo
// const Logo = () => {
//   return <div className="text-3xl font-bold">Logo</div>;
// }

// Placeholder component for the dark mode button
// const DarkModeButton = () => {
//   // Check the initial mode from localStorage or use the default
//   const [darkMode, setDarkMode] = useState(() => {
//     const storedMode = localStorage.getItem("darkMode");
//     return storedMode ? JSON.parse(storedMode) : false;
//   });

//   // Toggle dark mode
//   const toggleDarkMode = () => {
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//     // Store the mode in localStorage
//     localStorage.setItem("darkMode", JSON.stringify(newMode));
//   };

//   return (
//     <button
//       className={`bg-gray-900 text-white px-3 py-1 rounded ${
//         darkMode ? "bg-opacity-100" : "bg-opacity-50"
//       }`}
//       onClick={toggleDarkMode}
//     >
//       {darkMode ? "Dark" : "Light"} Mode
//     </button>
//   );
// };

// Placeholder component for the profile image
const ProfileImage = () => {
	return <div className="w-32 h-32 rounded-full bg-gray-500 mx-auto"></div>;
};

const ProfilePage = () => {
	return (
		<div className="bg-gray-100">
			<Layout />
			<div className="bg-white p-4 shadow-md">
				<div className="flex justify-between items-center">
					{/* <Logo /> */}
					<div className="flex space-x-4">
						{/* <DarkModeButton /> */}
						{/* <HamburgerNav /> */}
					</div>
				</div>
				<div className="mt-4 flex items-center">
					<div className="flex-1 text-center">
						<span className="text-lg font-semibold">Following</span>
						<span className="block text-sm">100</span>
					</div>
					<ProfileImage />
					<div className="flex-1 text-center">
						<span className="text-lg font-semibold">Followers</span>
						<span className="block text-sm">500</span>
					</div>
				</div>
				<div className="mt-4 text-center">
					<span className="text-xl font-semibold">@Gabriel1158</span>
				</div>
				<div className="mt-4">
					<ul className="text-center">
						<li>"We ball"</li>
						<li>Web Developer</li>
						<li>Artist/Casual Racer</li>
					</ul>
				</div>
			</div>
			{/* 3-column posts section */}
      {/* sky */}
			<div className="max-w-6xl mx-auto mt-6 grid grid-cols-3 gap-4">
				<div className="max-w-xs mx-auto mb-4 bg-white rounded-lg shadow-lg">
					<img
						className="w-full h-56 object-cover object-center rounded-t-lg"
						src="images/sky.jpg"
						alt="Post Image"
					/>
					<div className="p-4">
						<h2 className="text-xl font-semibold mb-2">Wow.</h2>
						<p className="text-gray-700 mb-4">
							The end of an Era.
						</p>
						<div className="flex items-center">
							{/* <img
								className="w-10 h-10 object-cover object-center rounded-full"
								src="avatar.jpg"
								alt="Avatar"
							/> */}
							<span className="text-gray-800 ml-2">@Gabriel1158</span>
						</div>
					</div>
				</div>
{/* hq */}
				<div className="max-w-xs mx-auto mb-4 bg-white rounded-lg shadow-lg">
					<img
						className="w-full h-56 object-cover object-center rounded-t-lg"
						src="images/hq.jpg"
						alt="Post Image"
					/>
					<div className="p-4">
						<h2 className="text-xl font-semibold mb-2">Took a trip...</h2>
						<p className="text-gray-700 mb-4">
							Just wanted to see our competition.
						</p>
						<div className="flex items-center">
							{/* <img
								className="w-10 h-10 object-cover object-center rounded-full"
								src="avatar.jpg"
								alt="Avatar"
							/> */}
							<span className="text-gray-800 ml-2">@Gabriel1158</span>
						</div>
					</div>
				</div>
{/* f1 */}
				<div className="max-w-xs mx-auto mb-4 bg-white rounded-lg shadow-lg">
					<img
						className="w-full h-56 object-cover object-center rounded-t-lg"
						src="images/f1.jpg"
						alt="Post Image"
					/>
					<div className="p-4">
						<h2 className="text-xl font-semibold mb-2">F1 was a blast!</h2>
						<p className="text-gray-700 mb-4">
							Couldn't be more excited for next weeks race!
						</p>
						<div className="flex items-center">
							{/* <img
								className="w-10 h-10 object-cover object-center rounded-full"
								src="avatar.jpg"
								alt="Avatar"
							/> */}
							<span className="text-gray-800 ml-2">@Gabriel1158</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
