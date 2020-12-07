import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogsItem = (props) => {
	let path = "/dialogs/" + props.id;
	return (
		<div className={s.dialog + ' ' + s.active}>
			<NavLink to={path}>{props.name}</NavLink>
		</div>
	)
}

const Message = (props) => {
	return (
		<div className={s.dialog}>{props.message}</div>
	)
}
const Dialogs = (props) => {
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				<DialogsItem name="Roma" id="1" />
				<DialogsItem name="Vika" id="2" />
				<DialogsItem name="Endry" id="3" />
				<DialogsItem name="Vasia" id="4" />
			</div>
			<div className={s.messages}>
				<Message message="Hi"/>
				<Message message="How is your cat?"/>
				<Message message="Good"/>
			</div>
		</div>
	);
}

export default Dialogs;