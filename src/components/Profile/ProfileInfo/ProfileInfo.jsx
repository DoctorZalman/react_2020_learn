import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	return(
		<div>
			<div>
				<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEFSgR4KalDe02P14U5J5kOxtFuY7qUQ7BQ&usqp=CAU" alt=""/>
			</div>
			<div className={s.descriptionBlock}>
				ava + desc
			</div>
		</div>
	)
}

export default ProfileInfo;