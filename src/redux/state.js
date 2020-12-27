// import {rerenderEntireTree} from "../render";
let rerenderEntireTree = () => {
	console.log('State changed')
}
let state = {
	profilePage: {
		posts: [
			{id: 1, message: "How is your cat", likesCount: 12},
			{id: 2, message: "Hi", likesCount: 13},
			{id: 3, message: "Good", likesCount: 14},
			{id: 4, message: "Nice", likesCount: 15}
		],
		newPostText: 'it'
	},
	dialogsPage: {
		dialogs: [
			{id:1, name: "Roma"},
			{id:4, name: "Vasia"},
			{id:2, name: "Vika"},
			{id:3, name: "Endry"}
		],
		messages: [
			{id: 1, message: "How is your cat", likesCount: 12},
			{id: 2, message: "Hi", likesCount: 13},
			{id: 3, message: "Good", likesCount: 14},
			{id: 4, message: "Nice", likesCount: 15}
		]
	}
}

window.state = state; // відображення у консолі зміни у state

export const addPost = () => {
	let newPost ={
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 0
	};
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => { // обновляємо state даними, які приходять з поля вводу поста
	state.profilePage.newPostText = newText;
	rerenderEntireTree(state);
}

export const subscribe = (observer) => {
	rerenderEntireTree = observer;
}

export default state;