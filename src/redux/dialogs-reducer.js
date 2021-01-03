const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialeState = {
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
const dialogsReducer = (state = initialeState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			state.newMessageBody = action.body;
			return state;
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			state.newMessageBody = '';
			state.messages.push({id: 5, message: body});
			return state;
		default:
			return state;
	}
}
export default dialogsReducer;