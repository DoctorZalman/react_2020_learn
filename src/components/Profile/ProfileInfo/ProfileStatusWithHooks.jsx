import React from "react";
import s from './ProfileInfo.module.css';
import {useState, useEffect} from "react";

const ProfileStatusWithHooks = (props) => {
// debugger;
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		// debugger;
		setStatus(props.status)
	}, [props.status]);
	const activateEditMode = () => {
		setEditMode(true);
	}
	const deactivateEditMode = () => {
		setEditMode(false);
		props.updateStatus(status);
	}
	const onStatusChange = (e) => {
		setStatus(e.currentTarget.value);
	}
	return (
		<div>
			{!editMode &&
				<div>
					<span onDoubleClick={activateEditMode}> {props.status || "-----"}</span>
				</div>
			}
			{editMode &&
				<div>
					<input onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}
					       value={status}/>
				</div>
			}
		</div>
	)
}

export default ProfileStatusWithHooks;