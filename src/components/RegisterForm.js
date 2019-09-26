import React, { useState } from "react";
import axios from "axios";
import { Form, FormGroup, Input, Button } from "reactstrap";

const RegisterForm = props => {
	console.log(props);
	const [credentials, setCredentials] = useState({ email: "", password: "" });
	const [failure, setFailure] = useState(false);
	const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		console.log("Creds inside Submit", credentials);
		console.log("Props inside Submit", props);
		axios
			.post(
				"https://top-nine.herokuapp.com/api/authentication/register",
				credentials
			)
			.then(res => {
				console.log(res);
				props.history.push("/");
			})
			.catch(err => {
				console.log(err);
				setFailure(true);
			});
	};
	return (
		<div className="col-sm-6 mx-auto">
			<h4>Register Now!</h4>
			<Form onSubmit={handleSubmit}>
				<FormGroup>
					<Input
						type="email"
						name="email"
						placeholder="name@email.com"
						value={credentials.email}
						onChange={handleChange}
						required
					/>
				</FormGroup>
				<FormGroup>
					<Input
						type="password"
						name="password"
						placeholder="Password"
						value={credentials.password}
						onChange={handleChange}
						pattern="[^\s]{6,}"
                    	title="Password must be at least 6 non-space characters"
						required
					/>
				</FormGroup>
				{failure?<p className="text-danger">Something went wrong. That email address is already tied to an account or our servers are currently busy.</p>:""}
				<FormGroup className="text-left">
					<Button className="bg-primary">Submit</Button>
				</FormGroup>
			</Form>
		</div>
	);
};

export default RegisterForm;
