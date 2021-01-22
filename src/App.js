import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderComponent from "./components/Header/HeaderContainer";


const App = () => {
	return (
		<div className="app-wrapper">
			<HeaderComponent />
			<Navbar/>
			<div className="app-wrapper-content">
				<Route path='/dialogs'
				       render={() => <DialogsContainer />}/>
				<Route path='/profile/:userId?'
				       render={() => <ProfileContainer />}/>
				<Route path='/users'
				       render={() => <UsersContainer /> }/>

			</div>
		</div>
	);
};
export default App;

