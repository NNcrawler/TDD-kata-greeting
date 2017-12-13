function isNoNameInputed(name) {
  return !name
}

function isUpperCase(name) {
  return typeof name === 'string' && name === name.toUpperCase() ? true : false;
}

function isTwoNames(name) {
  return Array.isArray(name) && name.length === 2;
}

function isGTTwoNames(name) {
  return Array.isArray(name) && name.length > 2;
}

function greet(name) {
  const greeting = "Hello,";

  if (isNoNameInputed(name)) {
    return `${greeting} my friend.`;

  } else if (isUpperCase(name)) {
    return `HELLO, ${name}.`;

  } else if (isTwoNames(name)) {
    return `${greeting} ${name[0]} and ${name[1]}.`;

  } else if (isGTTwoNames(name)) {
    return `${greeting} ${name.reduce( (sum, curr, i) => {
      return i === name.length - 1 ? `${sum}, and ${name[i]}.` :
        `${sum}, ${curr}`;
    })}`;

  }

  return `${greeting} ${name}.`
}

module.exports = {
  greet,
}
