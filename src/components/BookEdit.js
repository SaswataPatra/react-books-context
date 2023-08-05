import { useState} from "react";
import useBookContext from "../hooks/use-books-context";
function BookEdit({book,onSubmit}) {
    const [title,setTitle] = useState(book.title);
    const {editBookById} = useBookContext();

    const handleChange = (event) =>{
        setTitle(event.target.value);
    }
    const handleSubmit =(event) =>{
        event.preventDefault();
        // onEdit(book.id,title);
        onSubmit();
        editBookById(book.id,title);
        console.log("New event is :", title);
    }

  return (
    <form onSubmit={handleSubmit} className="book-edit">
    <label>Title</label>
      <input value={title} onChange = {handleChange} className="input"></input>
      <button className="button is-primary">Save</button>
    </form>
  );
}
export default BookEdit;
