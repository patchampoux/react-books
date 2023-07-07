import {useState} from "react";

const BookCreate = ({ onCreate }) => {
	const [title, setTitle] = useState("");

	const handleChange = (e) => {
		setTitle(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		onCreate(title);

		setTitle("");
	}

	return (
		<div className="book-create">
			<h3>Add a Book</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor="book-title">Title</label>
				<input className="input" type="text" id="book-titel" value={title} onChange={handleChange}/>
				<button className="button" type="submit">Create!</button>
			</form>
		</div>
	);
}

export default BookCreate;
