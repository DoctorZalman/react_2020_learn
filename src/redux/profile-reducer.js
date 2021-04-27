import {profilesAPI as profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

let initialState = {
	posts: [
		{id: 1, message: "How is your cat", likesCount: 12},
		{id: 2, message: "Hi", likesCount: 13},
		{id: 3, message: "Good", likesCount: 14},
		{id: 4, message: "Nice", likesCount: 15}
	],
	profile: null,
	status: ""
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: action.newPostText,
				likesCount: 0
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: '',
			};
		}
		case SET_STATUS: {
			return {
				...state,
				status: action.status
			};
		}
		case SET_USER_PROFILE: {
			return {...state, profile: action.profile}
		}
		case DELETE_POST: {
			return {...state, posts: state.posts.filter(p => p.id != action.postId)}
		}
		default:
			return state;
	}
};

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export const getUsersProfile = (userId) => async (dispatch) => {
	const response = await usersAPI.getProfile(userId);
	dispatch(setUsersProfile(response.data));
}
export const getStatus = (userId) => async (dispatch) => {
	const response = await profileAPI.getStatus(userId);
	dispatch(setStatus(response.data));
}
export const updateStatus = (status) => async (dispatch) => {
	const response = await profileAPI.updateStatus(status);
	if (response.data.resultCode === 0) {
		dispatch(setStatus(response.status));
	}
}

export default profileReducer;