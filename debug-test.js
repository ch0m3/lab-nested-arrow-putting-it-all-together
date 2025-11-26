const { createLoginTracker } = require('./index');

console.log('='.repeat(60));
console.log('DEBUG TEST: Testing createLoginTracker function');
console.log('='.repeat(60));

// Test Case 1: Successful login on first attempt
console.log('\n--- Test Case 1: Successful login on first attempt ---');
const user1 = {
  username: 'alice',
  password: 'secret123'
};
const login1 = createLoginTracker(user1);
console.log('User:', user1.username);
console.log('Attempt 1 (correct password):', login1('secret123'));

// Test Case 2: Failed attempts then successful login
console.log('\n--- Test Case 2: Failed attempts then successful login ---');
const user2 = {
  username: 'bob',
  password: 'pass456'
};
const login2 = createLoginTracker(user2);

console.log('User:', user2.username);
console.log('Attempt 1 (wrong password):', login2('wrongpass'));
console.log('Attempt 2 (wrong password):', login2('wrongpass'));
console.log('Attempt 3 (correct password):', login2('pass456'));

// Test Case 3: All 3 attempts fail (account should lock on 4th attempt)
console.log('\n--- Test Case 3: Three failed attempts ---');
const user3 = {
  username: 'charlie',
  password: 'secure789'
};
const login3 = createLoginTracker(user3);
console.log('User:', user3.username);
console.log('Attempt 1 (wrong):', login3('wrong1'));
console.log('Attempt 2 (wrong):', login3('wrong2'));
console.log('Attempt 3 (wrong):', login3('wrong3'));

// Test Case 4: Account locked after exceeding max attempts
console.log('\n--- Test Case 4: Exceeding max attempts (should lock) ---');
const user4 = {
  username: 'diana',
  password: 'locked123'
};
const login4 = createLoginTracker(user4);
console.log('User:', user4.username);
console.log('Attempt 1 (wrong):', login4('wrong1'));
console.log('Attempt 2 (wrong):', login4('wrong2'));
console.log('Attempt 3 (wrong):', login4('wrong3'));
console.log('Attempt 4 (correct, but should be locked):', login4('locked123'));
console.log('Attempt 5 (try again):', login4('locked123'));

// Test Case 5: Successful login resets attemptCount
console.log('\n--- Test Case 5: Successful login resets attemptCount ---');
const user5 = {
  username: 'eve',
  password: 'reset999'
};
const login5 = createLoginTracker(user5);
console.log('User:', user5.username);
console.log('Attempt 1 (wrong):', login5('wrong1'));
console.log('Attempt 2 (correct, should reset):', login5('reset999'));
console.log('Attempt 3 (wrong, count should restart):', login5('wrong2'));
console.log('Attempt 4 (wrong, count 2):', login5('wrong3'));

// Test Case 6: Immediate lock when exceeding attempts
console.log('\n--- Test Case 6: Verify lock message on 4th+ attempts ---');
const user6 = {
  username: 'frank',
  password: 'test000'
};
const login6 = createLoginTracker(user6);
console.log('User:', user6.username);
console.log('Attempt 1 (wrong):', login6('wrong'));
console.log('Attempt 2 (wrong):', login6('wrong'));
console.log('Attempt 3 (wrong):', login6('wrong'));
console.log('Attempt 4 (attempt to lock):', login6('wrong'));
console.log('Attempt 5 (already locked):', login6('test000'));

console.log('\n' + '='.repeat(60));
console.log('DEBUG TESTS COMPLETE');
console.log('='.repeat(60));
