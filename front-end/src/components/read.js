// Filename - Home.js
import React, { useState, useEffect } from 'react'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Read() {

	let history = useNavigate()
    const [array, setArray] = useState([]);

    useEffect(() => {
        axios.get(`/api/passwords/`)
            .then((response) => {
                console.log(response.data);
                setArray(response.data.message);
            })
    }, []);

	// You may skip this part if you're
	// using react-context api or redux
	function setID(id, input, output) {
		localStorage.setItem('id', id);
		localStorage.setItem('input', input);
		localStorage.setItem('output', output);
	}

    const getData = () => {
        axios.get(`/api/passwords/`)
            .then((response) => {
                setArray(response.data.message);
            })
    }

    const onDelete = (id) => {
        axios.delete(`/api/passwords/${id}`)
        .then(() => {
            getData();
            history('/');
        })
    }

	return (
		<div style={{ margin: '10rem' }}>
			<Table striped bordered hover size="sm">
				<thead>
					<tr>
                        {array.length > 0 ?
						<><th>Input</th><th>Output</th><th> Update </th><th> Delete </th></>
: '' }
					</tr>
				</thead>
				<tbody>

					{/* Mapping though every element
						in the array and showing the
						data in the form of table */}
					{array.length > 0 ? array.map((item) => {
						return (
							<tr>
								<td>{item.input}</td>
								<td>{item.output}</td>

								{/* getting theid,name, and
									age for storing these
									value in the jsx with
									onclick event */}
								<td><Link to={`/edit`}>
									<Button onClick={(e) =>
									setID(item._id, item.input, item.output)}
									variant="info">
									Update</Button></Link>
								</td>

								{/* Using thr deleted function passing
									the id of an entry */}
								<td><Button onClick={e => onDelete(item._id)}
									variant="danger">Delete</Button></td>
							</tr>
						)
					}) : ''}
				</tbody>
			</Table>

			{/* Button for redirecting to create page for
				insertion of values */}
			<Link className="d-grid gap-2" to='/create'>
				<Button variant="warning" size="lg">Create</Button>
			</Link>
		</div>
	)
}

export default Read
