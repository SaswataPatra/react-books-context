import {useState} from 'react';

function BookCreate({ onCreate }) {
    const [title,setTitle] = useState('');
    const handleSubmit = (event) =>{
        event.preventDefault();
        onCreate(title);
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
