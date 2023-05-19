// Filename - Create.js
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Create() {

	// Making usestate for setting and
	// fetching a value in jsx
	const [input, setInput] = useState('');
	const [output, setOutput] = useState('');

	// Using useNavigation for redirecting to pages
	let history = useNavigate();

	// Function for creating a post/entry
	const handleCreate = (e) => {
		e.preventDefault(); // Prevent reload

		axios.post(`/api/passwords/create`, {
           input,
           output 
        }).then(() => {
            history('/')
        });

	}

	return (
		<div >
			<Form className="d-grid gap-2"
				style={{ margin: '15rem' }}>

				{/* Fetching a value from input textfirld
					in a setname using usestate*/}
				<Form.Group className="mb-3"
					controlId="formBasicName">
					<Form.Control onChange=
						{e => setInput(e.target.value)}
						type="text"
						placeholder="Enter Input" required />
				</Form.Group>

				{/* Fetching a value from input textfirld in
					a setage using usestate*/}
				<Form.Group className="mb-3"
					controlId="formBasicAge">
					<Form.Control onChange=
						{e => setOutput(e.target.value)}
						type="text"
						placeholder="Enter Output" required />
				</Form.Group>

				{/* handing a onclick event in button for
					firing a function */}
				<Button
					onClick={e => handleCreate(e)}
					variant="primary" type="submit">
					Submit
				</Button>

				{/* Redirecting back to home page */}
				<Link className="d-grid gap-2" to='/'>
					<Button variant="info" size="lg">
						Home
					</Button>
				</Link>
			</Form>
		</div>
	)
}

export default Create
