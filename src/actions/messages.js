export const MESSAGES_LOADED = 'MESSAGES_LOADED';
export const SAVE_CONVERSATION_MESSAGES = 'SAVE_CONVERSATION_MESSAGES';
export const GET_CONVERSATION_MESSAGES = 'GET_CONVERSATION_MESSAGES';

export const getConversationMessages = (id) => ({
  type: GET_CONVERSATION_MESSAGES,
  id,
});

export const saveConversationMessages = (data) => ({
  type: SAVE_CONVERSATION_MESSAGES,
  data,
});

export const messagesLoaded = () => ({
  type: MESSAGES_LOADED,
});
