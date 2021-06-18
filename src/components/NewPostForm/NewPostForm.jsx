import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {EditPost} from '../EditPost';

export const NewPosyForm = ({ post, deletePost, addPost }) => {
  const [isEditing, setEditing] = useState(false);

  return (
    <>
      {isEditing ? (
        <>
          <EditPost
            post={post}
            onAdd={addPost}
            setEditing={setEditing}
          />
          <button
            onClick={() => {
              setEditing(false)
            }}
            className="submit__button"
          >
            Cansel
          </button>
        </>
      ) : (
        <>
        <p className="posts__title">
          {post.title}
        </p>
        <p className="posts__body">
          {post.body}
        </p>
        <button
          className="posts__delete"
          onClick={() => deletePost(post.id)}
        >
          Delete
        </button>
        <button
          className="posts__edit"
          onClick={() => setEditing(true)}
        >
          Edit a post
        </button>
        </>
      )}
    </>
  )
};

NewPosyForm.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  deletePost: PropTypes.func.isRequired,
  addPost: PropTypes.func.isRequired,
}
