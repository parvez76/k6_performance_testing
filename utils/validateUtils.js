// utils/validateUtils.js
export const Validator = {
  isEmail: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
  isStatusCode: (code) => Object.values(STATUS_CODES).includes(code),
};
