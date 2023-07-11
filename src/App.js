import {useState, useEffect} from "react";
import BookCreate from "./BookCreate";
import BookList from "./BookList";
import axios from "axios";

const App = () => {
	const [books, setBooks] = useState([]);

	const fetchBooks = async () => {
		const response = await axios.get("http://192.168.1.62:3001/books");

		setBooks(response.data);
	}

	useEffect(() => {
		fetchBooks();
	}, []);

	const createBook = async (title) => {
		const response = await axios.post("http://192.168.1.62:3001/books", {
			title
		});

		const updatedBooks = [
			...books,
			response.data
		]

		setBooks(updatedBooks);
	}

	const editBookById = async (id, title) => {
		const response = await axios.put(`http://192.168.1.62:3001/books/${id}`, {
			title
		});

		const updatedBooks = books.map((book) => {
			if (book.id === id) {
				return {
					...book,
					...response.data
				}
			}

			return book;
		});

		setBooks(updatedBooks);
	}

	const deleteBookById = async (id) => {
		await axios.delete((`http://192.168.1.62:3001/books/${id}`));

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
