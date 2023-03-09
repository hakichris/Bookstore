import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Addbook } from '../redux/books/booksSlice';

const initials = {
  title: '',
  author: '',
  category: '',
};

const Form = () => {
  const [state, setState] = useState(initials);
  const dispatch = useDispatch();
  const Array = useSelector((state) => state.bookReducer.books);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value, item_id: `item${Array.length + 1}` }));
  };

  const handleSubmit = () => {
    dispatch(Addbook(state));
  };

  return (
    <div>
      <form className="Form flexColumn" method="post">
        <input type="text" id="author" name="author" placeholder="Author" onClick={handleChange} required />
        <input type="text" id="title" name="bookTitle" placeholder="Book Title" onClick={handleChange} required />
        <button type="button" onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};
export default Form;
