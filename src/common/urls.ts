const {
  VITE_API_PROTOCOL: API_PROTOCOL,
  VITE_API_SERVER: SERVER_PORT,
  VITE_API_PORT: SERVER_URL,
} = import.meta.env;
const API_MAIL = `${API_PROTOCOL}${SERVER_PORT}:${SERVER_URL}/`;

const API_MAIL_SEND = `${API_MAIL}contact`;

export {
  API_MAIL_SEND,
};
