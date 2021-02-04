import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUsersProfile} from "../../redux/profile-reducer"
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId;
		if (!userId) {
			userId = 2;
		}
		this.props.getUsersProfile(userId);
	}

	render() {
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile}/>
			</div>
		)
	}
}

let mapStateToProps = (state) => ({
	profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUsersProfile})(WithUrlDataContainerComponent);