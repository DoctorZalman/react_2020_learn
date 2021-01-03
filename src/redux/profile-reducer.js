const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialeState = {
	posts: [
		{id: 1, message: "How is your cat", likesCount: 12},
		{id: 2, message: "Hi", likesCount: 13},
		{id: 3, message: "Good", likesCount: 14},
		{id: 4, message: "Nice", likesCount: 15}
	],
	newPostText: 'it'
};

const profileReducer = (state = initialeState, action) => {
	switch (action.type) {
		case ADD_POST:{
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: 0
			};
			let stateCopy = {...state};
			stateCopy.posts = [...state.posts];
			stateCopy.posts.push(newPost);
			stateCopy.newPostText = '';
			return stateCopy;
		}
		case UPDATE_NEW_POST_TEXT: {
			let stateCopy = {...state};
			stateCopy.posts = [...state.posts];
			stateCopy.newPostText = action.newText;
			return stateCopy;
		}
		default:
			return state;

	}
};
export default profileReducer;