// Filename - Edit.js
import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Update() {

	// Here usestate has been used in order
	// to set and get values from the jsx
	const [input, setInput] = useState('');
	const [output, setOutput] = useState('');
    const [id, setID] = useState(null);
	// Used for navigation with logic in javascript
	let history = useNavigate();

	useEffect(() => {
        setID(localStorage.getItem('id'));
        setInput(localStorage.getItem('input'));
        setOutput(localStorage.getItem('output'));
    }, []);


	// Function for handling the edit and
	// pushing changes of editing/updating
	const handleUpdate = (e) => {

		// Preventing from reload
		e.preventDefault();

		axios.put(`/api/passwords/${id}`, {
            input,
            output
        }).then(() => {
            history('/');
        })
	}

	return (
		<div>
			<Form className="d-grid gap-2"
				style={{ margin: '15rem' }}>

				{/* setting a name from the
					input textfiled */}
				<Form.Group className="mb-3"
					controlId="formBasicEmail">
					<Form.Control value={input}
						onChange={e => setInput(e.target.value)}
						type="text" placeholder="Enter Input" />
				</Form.Group>

				{/* setting a age from the input textfiled */}
				<Form.Group className="mb-3"
					controlId="formBasicPassword">
					<Form.Control value={output}
						onChange={e => setOutput(e.target.value)}
						type="text" placeholder="Enter Output" />
				</Form.Group>

				{/* Hadinling an onclick event
					running an edit logic */}
				<Button
					onClick={e => handleUpdate(e)}
					variant="primary" type="submit" size="lg">
					Update
				</Button>

				{/* Redirecting to main page after editing */}
				<Link className="d-grid gap-2" to='/'>
					<Button variant="warning"
						size="lg">
						Home
					</Button>
				</Link>
			</Form>
		</div>
	)
}

export default Update
