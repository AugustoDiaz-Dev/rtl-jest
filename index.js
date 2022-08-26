// The automated test is code that throws an error when the actual output does not match the expected output. 
const getFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}
const actualFullName = getFullName('Augusto', 'Diaz');
const expectedFullName = 'Augusto Diaz';

if (actualFullName !== expectedFullName) {
    throw new Error(`${actualFullName} is not equal to ${expectedFullName}.`);
}