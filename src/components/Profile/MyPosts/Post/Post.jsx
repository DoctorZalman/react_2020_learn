import React from "react";
import s from './Post.module.css'

const Post = (props) => {
	return <div className={s.item}>
					<img src="https://exclaim.ca/images/avatar_4.jpg" alt=""/>
		{props.message}
		<div>
			<span>{props.likesCount}</span>
		</div>
				</div>
}

export default Post;