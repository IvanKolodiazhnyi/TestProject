import { requests, post } from './api';

const adress = '/posts';

export const getUserPosts = (userId) => {
  return requests(`${adress}?userId=${userId}`);
};

export const removePost = (postId) => {
  return requests(`${adress}/${postId}`, {
    method: 'DELETE',
  })
};

export const editPost = (id) => {
  return post(`${adress}?id=${id}`)
};

export const creatPost = (body) => {
  return post(adress, body);
}
