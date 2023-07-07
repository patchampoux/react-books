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
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor="book-title">Title</label>
				<input type="text" id="book-titel" value={title} onChange={handleChange}/>
				<button type="submit">Create!</button>
			</form>
		</div>
	);
}

export default BookCreate;
