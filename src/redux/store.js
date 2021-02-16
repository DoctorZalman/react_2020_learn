import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
		},
		sidebar: {}
	},
	_callSubscriber() {
		console.log('State changed');
	},

	getState() {
		return this._state;
	},
	subscribe (observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsReducer = dialogsReducer(this._state.dialogsPage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);
		this._callSubscriber(this._state);
	}
};
export const addPostActionCreator = () =>  ({
		type: ADD_POST
	});
export const updateNewPostTextActionCreator = (text) => ({
		type: UPDATE_NEW_POST_TEXT, newText: text
});

// export const sendMessageCreator = (newMessageBody) =>  ({type: SEND_MESSAGE, newMessageBody});


export default store;
window.store = store; // відображення у консолі зміни у state
// store - OOP