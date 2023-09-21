import React from "react";
import Layout from "./Layout";
import ModalPost from "./ModelPost";
import Post from "./Post";

const Home = () => {
	return (
		<>
			<Layout />
			{/* <ModalPost /> */}

			<div className="flex flex-wrap flex-cols-1 gap-4 place-content-center ">
				<Post />
			</div>
		</>
	);
};

export default Home;
