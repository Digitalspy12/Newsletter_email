
/**
 * Validates if the provided string is a valid email address
 * @param email - Email address to validate
 * @returns boolean indicating if the email is valid
 */
export const validateEmail = (email: string): boolean => {
  if (!email) return false;
  
  // Basic regex pattern for email validation
  const emailPattern = /\S+@\S+\.\S+/;
  return emailPattern.test(email);
};
