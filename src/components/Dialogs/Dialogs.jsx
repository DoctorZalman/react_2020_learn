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

	let dialogs = [
		{id:1, name: "Roma"},
		{id:4, name: "Vasia"},
		{id:2, name: "Vika"},
		{id:3, name: "Endry"}
	]
	let messages = [
		{id: 1, message: "How is your cat", likesCount: 12},
		{id: 2, message: "Hi", likesCount: 13},
		{id: 3, message: "Good", likesCount: 14},
		{id: 4, message: "Nice", likesCount: 15}
	]
	let dialogsElement = dialogs.map( d => <DialogsItem name={d.name} id={d.id} /> );
	let messagesElements = messages.map( m => <Message message={m.message} id={m.id}/> );
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{ dialogsElement }
			</div>
			<div className={s.messages}>
				{ messagesElements }
			</div>
		</div>
	);
}

export default Dialogs;