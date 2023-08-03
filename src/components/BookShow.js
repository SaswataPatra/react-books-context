import { useState } from "react";
import BookEdit from "./BookEdit";
import { useContext } from "react";
import BooksContext from "../context/Books";
function BookShow({ book, onDelete, onEdit }) {
  const {count, incrementCounter} = useContext(BooksContext);

  const [showEdit, setShowEdit] = useState(false);

  const handleDeleteClick = () => {
    onDelete(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handSubmit = (id, newTitle) => {
    setShowEdit(false);
    onEdit(id, newTitle);
  };

  let content = book.title;
  if (showEdit) {
    content = <BookEdit onSubmit={handSubmit} book={book} />;
  }
  return (
    <div className="book-show">
      {count} {" "}
      <button onClick={incrementCounter}>click me!</button>
      <img
        alt="books"
        src={`https://picsum.photos/seed/${book.id}300/200`}
      ></img>

      <br></br>
      {content}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          {" "}
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default BookShow;
