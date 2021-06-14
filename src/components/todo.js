import React from 'react';

export const Todo = ({todo, onDelete}) => {
	return (
	<>
	<div key={todo.sno} className="my-3">
	<h4>{todo.work}</h4>
	<p>{todo.desc}</p>
	<button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>Delete</button>
	<hr/>
	</div>
	</>
		);
}
