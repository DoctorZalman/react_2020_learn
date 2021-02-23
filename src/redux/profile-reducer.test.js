import React from "react";
import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

let state = {
	posts: [
		{id: 1, message: "How is your cat", likesCount: 12},
		{id: 2, message: "Hi", likesCount: 13},
		{id: 3, message: "Good", likesCount: 14},
		{id: 4, message: "Nice", likesCount: 15}
	]
};

it('length of posts should be incremented', () => {
	// 1. test data
	let action = addPostActionCreator("It");
	// 2. action
	let newState = profileReducer(state, action);
	// 3. expectation
	expect(newState.posts.length).toBe(5);
});

it('message of posts should be correct', () => {
	// 1. test data
	let action = addPostActionCreator("It");
	// 2. action
	let newState = profileReducer(state, action);
	// 3. expectation
	expect(newState.posts[4].message).toBe("It");
});

it('after deleting length of message should be decrement', () => {
	// 1. test data
	let action = deletePost(1);
	// 2. action
	let newState = profileReducer(state, action);
	// 3. expectation
	expect(newState.posts.length).toBe(3);
});

it('after deleting length shouldn\'t be decrement if id is incorrect', () => {
	// 1. test data
	let action = deletePost(1000);
	// 2. action
	let newState = profileReducer(state, action);
	// 3. expectation
	expect(newState.posts.length).toBe(4);
});
