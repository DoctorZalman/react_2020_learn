let store = {
	_state: {
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
	},
	getState() {
		return this._state;
	},
	_callSubscriber() {
		console.log('State changed')
	},
	addPost () {
		let newPost ={
			id: 5,
			message: this._state.profilePage.newPostText,
			likesCount: 0
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},
	updateNewPostText (newText)  { // обновляємо state даними, які приходять з поля вводу поста
		this._state.profilePage.newPostText = newText;
		this._rerenderEntireTree(this._state);
	},
	subscribe (observer) {
		this._callSubscriber = observer;
	}
}

export default store;
window.store = store; // відображення у консолі зміни у state