export const MESSAGES_LOADED = 'MESSAGES_LOADED';
export const SAVE_CONVERSATION_MESSAGES = 'SAVE_CONVERSATION_MESSAGES';
export const GET_CONVERSATION_MESSAGES = 'GET_CONVERSATION_MESSAGES';
export const UPDATED_FIELD_VALUE = 'UPDATED_FIELD_VALUE';
export const SEND_NEW_MESSAGE = 'SEND_NEW_MESSAGE';
export const START_NEW_CONVERSATION = 'START_NEW_CONVERSATION';

export const startNewConversation = (userId) => ({
  type: START_NEW_CONVERSATION,
  userId,
});

export const sendNewMessage = (id, newMessage) => ({
  type: SEND_NEW_MESSAGE,
  id,
  newMessage,
});

export const updateFieldValue = (identifier, newValue) => ({
  type: UPDATED_FIELD_VALUE,
  identifier,
  newValue,
});

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
