import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/store";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newPostText: state.profilePage.newPostText
	}
}
const mapDispatchcToProps = (dispatch) => {
	return {
		updateNewPostText: (text) => {
			let action = updateNewPostTextActionCreator(text);
			dispatch(action);
		},
		addPost: () => {
			dispatch(addPostActionCreator());
		}
	}
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchcToProps)(MyPosts);
export default MyPostsContainer;