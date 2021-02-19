import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";


const INITILAZED_SUCCESS = 'INITILAZED_SUCCES';

let initialState = {
	initialized: false
};

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case INITILAZED_SUCCESS:
			return {
				...state,
				initialized: true
			};
		default:
			return state;
	}
};

export const initializedSuccess = () => ({type: INITILAZED_SUCCESS});
export const initializeApp = () => (dispatch) => {
	let promise = dispatch(getAuthUserData());
	// dispatch(somethingelse());
	// dispatch(somethingelse());
	Promise.all([promise])
		.then(() => {
			dispatch(initializedSuccess());
		});
}

export default appReducer;