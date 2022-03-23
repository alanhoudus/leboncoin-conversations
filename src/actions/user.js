export const GET_USER_CONVERSATIONS = 'GET_USER_CONVERSATIONS';
export const SAVE_USER_CONVERSATIONS = 'SAVE_USER_CONVERSATIONS';
export const GET_USER_INFO = 'GET_USER_INFO';
export const SAVE_USER_INFO = 'SAVE_USER_INFO';
export const USER_DATA_LOADED = 'USER_DATA_LOADED';

export const userDataLoaded = () => ({
  type: USER_DATA_LOADED,
});

export const saveUserInfo = (username, id) => ({
  type: SAVE_USER_INFO,
  username,
  id,
});

export const getUserInfo = () => ({
  type: GET_USER_INFO,
});

export const saveUserConversations = (data) => ({
  type: SAVE_USER_CONVERSATIONS,
  data,
});

export const getUserConversations = (id) => ({
  type: GET_USER_CONVERSATIONS,
  id,
});
