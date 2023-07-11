import {useState} from "react";
import useBooksContext from "../hooks/use-books-context";

const BookEdit = ({book, onSubmit}) => {
	const [title, setTitle] = useState(book.title);
	const {editBookById} = useBooksContext();

	const handleChange = (e) => {
		setTitle(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();

		onSubmit();
		editBookById(book.id, title);
	}

	return (
		<form className="book-edit" onSubmit={handleSubmit}>
			<label htmlFor="book-edit-title">Title</label>
			<input className="input" type="text" id="book-edit-title" value={title} onChange={handleChange} />
			<button className="button is-primary">Save</button>
		</form>
	);
}

export default BookEdit;
