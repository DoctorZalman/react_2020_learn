import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
	test("status from props should be in the state", () => {
		const button = create(<ProfileStatus status="It" />);
		expect(button.toJSON()).toMatchSnapshot();
	});
});

// 20:30 time