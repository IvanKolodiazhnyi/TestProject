import { requests } from './api';

const adress = '/users';

export const getUsers = () => {
  return requests(adress)
}
