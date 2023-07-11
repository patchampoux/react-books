import {useState} from "react";
import useBooksContext from "../hooks/use-books-context";

const BookCreate = () => {
	const [title, setTitle] = useState("");
	const {createBook} = useBooksContext();

	const handleChange = (e) => {
		setTitle(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		createBook(title);

		setTitle("");
	}

	return (
		<div className="book-create">
			<h3>Add a Book</h3>
			<form onSubmit={handleSubmit}>
				<label htmlFor="book-title">Title</label>
				<input className="input" type="text" id="book-title" value={title} onChange={handleChange}/>
				<button className="button" type="submit">Create!</button>
			</form>
		</div>
	);
}

export default BookCreate;
