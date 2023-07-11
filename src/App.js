import {useState} from "react";
import BookCreate from "./BookCreate";
import BookList from "./BookList";

const App = () => {
	const [books, setBooks] = useState([]);

	const createBook = (title) => {
		const updatedBooks = [
			...books,
			{
				id: Math.round(Math.random() * 9999),
				title
			}
		]

		setBooks(updatedBooks);
	}

	const editBookById = (id, title) => {
		const updatedBooks = books.map((book) => {
			if (book.id === id) {
				return {
					...book,
					title
				}
			}

			return book;
		});

		setBooks(updatedBooks);
	}

	const deleteBookById = (id) => {
		const updatedBook = books.filter((book) => {
			return book.id !== id;
		});

		setBooks(updatedBook);
	}

	return (
		<div className="app">
			<h1>Reading List</h1>
			<BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
			<BookCreate onCreate={createBook} />
		</div>
	);
}

export default App;
