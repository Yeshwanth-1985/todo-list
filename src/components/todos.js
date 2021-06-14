import React from 'react';
import {Todo} from './todo.js';
function Todos({list, onDelete}) {
	let mystyle = {
		minHeight: "70vh"
	};
	return (
	<div className="container my-3" style={mystyle}>
	<h3 className="text-center my-2">Todos List</h3>
	{ list.length !== 0 ? list.map(item => {
		return <Todo todo={item} key={item.sno} onDelete={onDelete}/>	
		}) : <h4 className="text-center">No things to do at present </h4> }
	</div>
		);
}

export default Todos;