import {useState} from 'react';
import useBookContext from "../hooks/use-books-context";
function BookCreate() {
    const [title,setTitle] = useState('');
    const {createBook} = useBookContext();
    const handleSubmit = (event) =>{
        event.preventDefault();
        createBook(title);
        setTitle('');
    }
    const handleChange = (event) =>{
        setTitle(event.target.value);
    }

  return (
    <div className='book-create'>
      <form onSubmit={handleSubmit}>
      <h3>Add a book</h3>
      <h4>Title</h4>
        <input className='input' value={title} onChange={handleChange}></input> 
        <button className='button'>submit</button>
      </form>
    </div>
  );
}
export default BookCreate;
