import React, { useState } from 'react';

function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      if (editIndex !== null) {
        // If editIndex is not null, update the comment at that index
        const updatedComments = [...comments];
        updatedComments[editIndex] = newComment;
        setComments(updatedComments);
        setEditIndex(null);
      } else {
        // If editIndex is null, add a new comment
        setComments([...comments, newComment]);
      }
      setNewComment('');
    }
  };

  const handleEdit = (index) => {
    // Set the new comment to be edited and its index
    setNewComment(comments[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    // Delete the comment at the specified index 
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  return (
    <div className='ml-20'>
      <h2 className='text-sky-400'>Comment your review</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index} className='text-slate-50'>
            {comment}
            &nbsp;&nbsp;&nbsp;
              <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={() => handleEdit(index)}>Edit</button> &nbsp;&nbsp;&nbsp;
            <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"  onClick={() => handleDelete(index)}>Delete</button>
            <br></br>
          </li>
        ))}
      </ul>
      <form  onSubmit={handleSubmit}>
        <textarea
          value={newComment}
          onChange={handleInputChange}
          placeholder="Share your review"
          rows={4}
          cols={50}
        />
        <br />
        <button className="bg-sky-500 hover:bg-sky-400 text-white font-bold py-2 px-4 border-b-4 border-sky-700 hover:border-sky-500 rounded"  type="submit">{editIndex !== null ? 'Update Comment' : 'Post Comment'}</button>
      </form>
    </div>
  );
}

export default CommentSection;
