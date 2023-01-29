
/**
 * change arabic numerals to english
 * @param {string} str string that contain arabic numbers
 * @return {string} return string with english numbers
 */

export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/;
  if (!email) {
    return "Email can't be empty.";
  }
  if (!re.test(email)) {
    return 'Ooops! We need a valid email address.';
  }
  return '';
}

export function passwordValidator(password) {
  if (!password) {
    return "Password can't be empty.";
  }
  if (password.length < 5) {
    return 'Password must be at least 5 characters long.';
  }
  return '';
}

export const getError = response => {
  return response?.error?.data?.data?.message;
};
