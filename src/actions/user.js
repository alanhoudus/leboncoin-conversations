export const GET_USER_CONVERSATIONS = 'GET_USER_CONVERSATIONS';
export const SAVE_USER_CONVERSATIONS = 'SAVE_USER_CONVERSATIONS';

export const saveUserConversations = (data) => ({
  type: SAVE_USER_CONVERSATIONS,
  data,
});

export const getUserConversations = () => ({
  type: GET_USER_CONVERSATIONS,
});
