import React from "react";
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}
	return(
		<div>
			{/*<div>*/}
			{/*	<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEFSgR4KalDe02P14U5J5kOxtFuY7qUQ7BQ&usqp=CAU" alt="picture"/>*/}
			{/*</div>*/}
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large} alt="ava"/>
				<ProfileStatus status={"Hello"}/>
			</div>
		</div>
	)
}

export default ProfileInfo;