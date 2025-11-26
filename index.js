// add a secure login feature that allows users to attempt log in up to three times before locking the account.
// Define the createLoginTracker function (outer function)
function createLoginTracker(userInfo) {
  const { username, password } = userInfo; // username captured for potential future use

  let attemptCount = 0;
  const maxAttempts = 3;
  let isLocked = false;

  // inner arrow function that handles each login attempt
  const attemptLogin = (passwordAttempt) => {
    // increment attemptCount each time this inner function is called
    attemptCount += 1;

    // If attemptCount exceeds allowed attempts, lock the account immediately
    if (attemptCount > maxAttempts) {
      isLocked = true;
      return 'Account locked due to too many failed login attempts';
    }

    // If the provided password matches and the attempt is within allowed range
    if (passwordAttempt === password && attemptCount <= maxAttempts) {
      attemptCount = 0; // reset on success
      return 'Login successful';
    }

    // For failed attempts within allowed range, return attempt message
    return `Attempt ${attemptCount}: Login failed`;
  };

  return attemptLogin;
}

module.exports = { createLoginTracker };
