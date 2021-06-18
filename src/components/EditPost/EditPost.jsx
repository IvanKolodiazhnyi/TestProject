import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './EditPost.scss';

export const EditPost = ({ onAdd, userId, post = null }) => {
    const [title, setTitle] = useState(post ? post.title : '');
    const [body, setBody] = useState(post ? post.body : '');

    const addNewPost = () => {
      onAdd({
        title,
        body: body,
        userId,
        id: Math.random(),
      });

      setTitle('');
      setBody('');
    };

  return (
    <form
      className="form_submit"
      onSubmit={(event) => {
        event.preventDefault();
        addNewPost();
      }}
    >
      <input
        type="text"
        className="input"
        placeholder="Type a title"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
      />
      <textarea
        placeholder="Type body here"
        className="textarea"
        value={body}
        onChange={({ target }) => setBody(target.value)}
      >        
      </textarea>
      <button
        type="submit"
        className="submit__button"
      >
        Submit
      </button>
    </form>
  );
};

EditPost.propTypes = {
  onAdd: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })
};
