import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
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
				<Post message="Hi, how are you?" likesCount="0"/>
				<Post message="Hi?" likesCount="2"/>
			</div>
		</div>
	)
}

export default MyPosts;