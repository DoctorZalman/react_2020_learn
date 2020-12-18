let state = {
	profilePage: {
		posts: [
			{id: 1, message: "How is your cat", likesCount: 12},
			{id: 2, message: "Hi", likesCount: 13},
			{id: 3, message: "Good", likesCount: 14},
			{id: 4, message: "Nice", likesCount: 15}
		]
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

export let addPost = (postMessage) => {
	let newPost ={
		id: 5,
		message: postMessage,
		likesCount: 0
	}
	state.profilePage.posts.push(newPost);
}

export default state;