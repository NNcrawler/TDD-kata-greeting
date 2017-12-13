function greet(name) {
  const otherPerson = name || 'my friend';

  let greeting = `Hello, ${otherPerson}.`;
  name && name === name.toUpperCase() && (greeting = `HELLO, ${name}.`);

  return greeting;
}

module.exports = {
  greet,
}
