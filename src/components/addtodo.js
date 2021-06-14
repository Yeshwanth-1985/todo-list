import React, {useState} from 'react';

function Addtodo(props) {
	const [title, settitle] = useState("");
	const [desc, setdesc] = useState("");

	const submit = (e) => {
		e.preventDefault();
		if(!title || !desc)
			alert("Title or Description cannot be blank");
		else {
			props.addtolist(title,desc);
			settitle("");
			setdesc("");
		}
	}

	return (
		<div className="container my-3">
		<h3 className="text-center">Add a todo thing</h3>
			<form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e) => settitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">Todo Description</label>
    <input type="text" value={desc} onChange={(e) => setdesc(e.target.value)}className="form-control" id="desc"/>
  </div>
  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
		</div>
		);
}  

export default Addtodo;