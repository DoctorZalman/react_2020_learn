import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLenghtCreator, required} from "../../../utils/validators/validators";

const maxLenght50 = maxLenghtCreator(50);
const AddMessageForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component={Textarea}
				       validate={[required, maxLenght50]}
				       name="newMessageBody" placeholder="Enter your message"/>
			</div>
			<div>
				<button>Send</button>
			</div>
		</form>
	)}

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);