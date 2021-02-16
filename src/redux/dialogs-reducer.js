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
	]
}
const dialogsReducer = (state = initialeState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let body = action.newMessageBody;
			return {
				...state,
				messages: [...state.messages, {id: 7, message: body}],
			};
		default:
			return state;
	}
}

export const sendMessageCreator = (newMessageBody) =>  ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;