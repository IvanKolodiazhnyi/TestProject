import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import './PostList.scss';

import { getUserPosts, creatPost, removePost } from '../../api/posts';
import { EditPost } from '../EditPost';
import { NewPosyForm } from '../NewPostForm';

export const PostList = React.memo(
  ({ userId }) => {
    const [posts, setPosts] = useState([]);

    const loadPosts = () => {
      getUserPosts(userId)
        .then(setPosts)
    }

    useEffect(() => { 
      loadPosts()
    }, [userId]);

    // const addPost = async(body) => {
    //   await creatPost(body);
    //   loadPosts();
    // }

    const addPost = (body) => {
      setPosts(state => [...state, body])
    }

    const deletePost = (id) => {
      setPosts(state => state.filter(post => post.id !== id));
    }

    // const deletePost = async(id) => {
    //   await removePost(id);
    //   loadPosts();
    // }

  return (
    <div className="posts">
      <EditPost
        onAdd={addPost}
        userId={userId}
      />

      <ul className="posts__list">
        {posts.length !== 0 ? (
          posts.map(post => (
            <li key={post.id} className="posts__item">
              <NewPosyForm
                addPost={addPost}
                post={post}
                deletePost={deletePost}
              />
            </li>
          ))
        ) : (
          <p className="posts__text">
            Choose a user)
          </p>
        )}
      </ul>
    </div>
  );
});

PostList.propTypes = {
  userId: PropTypes.number.isRequired,
};
