import { useState } from "react";
import BookEdit from "./BookEdit";
import useBookContext from "../hooks/use-books-context";
function BookShow({ book }) {
  const [showEdit, setShowEdit] = useState(false);
  const {deleteBookById} = useBookContext();

  const handleDeleteClick = () => {
    deleteBookById(book.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handSubmit = () => {
    setShowEdit(false);
  };

  let content = book.title;
  if (showEdit) {
    content = <BookEdit onSubmit={handSubmit} book={book} />;
  }
  return (
    <div className="book-show">
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
