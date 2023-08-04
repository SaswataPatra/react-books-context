import { createContext, useState } from "react";
import axios from "axios";
const BooksContext = createContext();

function Provider({ children }) {

  const [books, setBook] = useState([]);
  const fetchbooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBook(response.data);
  };
  const deleteBookById = async (id) => {
    await axios.delete(`http://localhost:3001/books/${id}`);
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBook(updatedBooks);
  };
  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data }; //this means take whatever is there in the book object and take everything that has been changed in the response object
      }
      return book;
    });
    setBook(updatedBooks);
  };
  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title,
    });
    const updatedBooks = [...books, response.data];
    setBook(updatedBooks);
  };

  const valueToShare = {
    books,
    fetchbooks,
    deleteBookById,
    editBookById,
    createBook
  }

  return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>;
}

export { Provider };
export default BooksContext;
