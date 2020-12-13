import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

	let postData = [
		{id: 1, message: "How is your cat", likesCount: 12},
		{id: 2, message: "Hi", likesCount: 13},
		{id: 3, message: "Good", likesCount: 14},
		{id: 4, message: "Nice", likesCount: 15}
	]

	return (
		<div className={s.postBlock}>
			<h3>My post</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add post</button>
				</div>
			</div>
			<div className={s.post}>
				<Post message={postData[0].message} likesCount={postData[0].likesCount}/>
				<Post message={postData[1].message} likesCount={postData[1].likesCount}/>
			</div>
		</div>
	)
}

export default MyPosts;