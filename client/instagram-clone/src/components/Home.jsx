import React from "react";
import Layout from "./Layout";
import ModalPost from "./ModelPost";
import Post from "./Post";

const Home = () => {
	return (
		<>
			<Layout />
			<ModalPost />
			<Post />
		</>
	);
};

export default Home;
