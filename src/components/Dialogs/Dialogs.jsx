import React from 'react';
import s from './Dialogs.module.css';
import DialogsItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {
	let state = props.dialogsPage;

	let dialogsElement = state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} key={d.id}/>);
	let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>);
	let newMessageBody = state.newMessageBody;


	let addNewMessage = (values) => {
		props.sendMessage(values.newMessageBody);
	};

	if (!props.isAuth) return <Redirect to="/login" />;
	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItems}>
				{dialogsElement}
			</div>
			<div className={s.messages}>
				<div>{messagesElements}</div>
			</div>
			<AddMessageForm onSubmit={addNewMessage} />
		</div>
	);
};


export default Dialogs;