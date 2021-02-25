import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderComponent from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";

class App extends Component {
	componentDidMount() {
		this.props.initializeApp();
	}
	render() {
		if (!this.props.initialized){
			return <Preloader/>
		}
		return (
			<div className="app-wrapper">
				<HeaderComponent/>
				<Navbar/>
				<div className="app-wrapper-content">
					<Route path='/dialogs'
					       render={() => <DialogsContainer/>}/>
					<Route path='/profile/:userId?'
					       render={() => <ProfileContainer/>}/>
					<Route path='/users'
					       render={() => <UsersContainer/>}/>
					<Route path='/login'
					       render={() => <LoginPage/>}/>
				</div>
			</div>
		);
	}
}
const mapStateToPropps = (state) => ({
	initialized: state.app.initialized
})
const AppContainer = compose(
	withRouter,
	connect(mapStateToPropps, {initializeApp}))(App);

let SamuraiApp = (props) => {
	return <BrowserRouter>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</BrowserRouter>
}

export default SamuraiApp;
