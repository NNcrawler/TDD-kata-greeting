function greet(name) {
  const otherPerson = name || 'my friend';

  let greeting = `Hello, ${otherPerson}.`;
  typeof name === 'string' && name === name.toUpperCase() && (greeting = `HELLO, ${name}.`);
  Array.isArray(name) && name.length === 2 && (greeting = `Hello, ${name[0]} and ${name[1]}.`);

  return greeting;
}

module.exports = {
  greet,
}
