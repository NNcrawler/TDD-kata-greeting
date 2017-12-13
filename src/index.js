function greet(name) {
  const otherPerson = name || 'my friend';

  let greeting = `Hello, ${otherPerson}.`;
  typeof name === 'string' && name === name.toUpperCase() &&
    (greeting = `HELLO, ${name}.`);
  Array.isArray(name) && name.length === 2 &&
    (greeting = `Hello, ${name[0]} and ${name[1]}.`);
  Array.isArray(name) && name.length > 2 &&
    (greeting = `Hello, ${name.reduce( (sum, curr, i) => {
      return i === name.length - 1 ? `${sum}, and ${name[i]}.` :
        `${sum}, ${curr}`;
    })}`);

  return greeting;
}

module.exports = {
  greet,
}
