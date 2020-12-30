const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
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
			],
			newMessageBody: ""
		}
	},
	_callSubscriber() {
		console.log('State changed')
	},

	getState() {
		return this._state;
	},
	subscribe (observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		if (action.type === ADD_POST){
			let newPost ={
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		}
		else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}
		else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
			this._state.dialogsPage.newMessageBody = action.body;
			this._callSubscriber(this._state);
		}
		else if (action.type === SEND_MESSAGE) {
			let body = this._state.dialogsPage.newMessageBody;
			this._state.dialogsPage.newMessageBody = '';
			this._state.dialogsPage.messages.push({id: 5, message: body});
			this._callSubscriber(this._state);
		}
	}
}
export const addPostActionCreator = () =>  ({
		type: ADD_POST
	})
export const updateNewPostTextActionCreator = (text) => ({
		type: UPDATE_NEW_POST_TEXT, newText: text
})

export const sendMessageCreator = () =>  ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => ({
		type: UPDATE_NEW_MESSAGE_BODY, body: body
})


export default store;
window.store = store; // відображення у консолі зміни у state
// store - OOP