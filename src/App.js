import {useState} from "react";
import BookCreate from "./BookCreate";

const App = () => {
	const [books, setBooks] = useState([]);

	const createBook = (title) => {
		console.log('Need to add book with title of', title);
	}

	return (
		<div>
			<BookCreate onCreate={createBook} />
		</div>
	);
}

export default App;
