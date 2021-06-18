const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const requests = (url, option = {}) => {
  return fetch(BASE_URL + url, option)
    .then(response => response.json())
}

export const post = (url, data) => {
  return requests(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};
