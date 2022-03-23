export const GET_USERS_LIST = 'GET_USERS_LIST';
export const SAVE_USERS_LIST = 'SAVE_USERS_LIST';

export const saveUsersList = (data) => ({
  type: SAVE_USERS_LIST,
  data,
});

export const getUsersList = () => ({
  type: GET_USERS_LIST,
});
