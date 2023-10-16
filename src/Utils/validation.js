export const validateUsername = username => {
  if (!username) {
    return 'Please enter a username.';
  }
  return null;
};

export const validatePhoneNumber = phoneNo => {
  const phoneNoPattern = /^\d{10}$/;
  if (!phoneNoPattern.test(phoneNo)) {
    setError('Invalid phone number.');
  }
  setError(null);
};

export const validateEmail = email => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(email)) {
    return 'Invalid email address';
  }
  return null;
};

export const validatePassword = password => {
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordPattern.test(password) 
};

// if (!passwordPattern.test(newPassword)) {
// setError('Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one number, and one special character');
// return;
// }

export const passwordsMatch = (password, confirmPassword) => {
  return password === confirmPassword;
};
