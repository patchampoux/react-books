import {createContext, useState, useCallback} from "react";
import axios from "axios";

const BooksContext = createContext();

const Provider = ({children}) => {
	const [books, setBooks] = useState([]);

	const fetchBooks = useCallback(async () => {
		const response = await axios.get("http://192.168.1.62:3001/books");

		setBooks(response.data);
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

	const valueToShare = {
		books,
		fetchBooks,
		createBook,
		editBookById,
		deleteBookById
	}

	return (
		<BooksContext.Provider value={valueToShare}>
			{children}
		</BooksContext.Provider>
	);
}

export {Provider};
export default BooksContext;
