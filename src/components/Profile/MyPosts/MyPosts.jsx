import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLenght10 = maxLenghtCreator(10);
let AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field name="newPostText" component={Textarea} validate={[required, maxLenght10 ]} placeholder={"Post message"}/>
			</div>
			<div>
				<button>Add Post</button>
			</div>
		</form>
	)
};

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);
const MyPosts = React.memo(props => {
	let postElemets =
		props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
	let newPostElement = React.createRef();
	let onAddPost = (values) => {
		props.addPost(values.newPostText);
	}
	return (
		<div className={s.postBlock}>
			<h3>My post</h3>
			<AddNewPostFormRedux onSubmit={onAddPost}/>
			<div className={s.post}>
				{postElemets}
			</div>
		</div>
	)
});

export default MyPosts;