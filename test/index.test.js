const index = require('../src/index.js');

describe('Index', () => {
  describe('#greet(name)', () => {
    it('Should return "Hello, Bob."', () => {
      const greeting = index.greet('Bob');
      expect(greeting).toEqual('Hello, Bob.');
    });

    it('Should return "Hello, John."', () => {
      const greeting = index.greet('John');
      expect(greeting).toEqual('Hello, John.');
    });

    it('Should return "Hello, my friend." when name is null', () => {
      const greeting = index.greet();
      expect(greeting).toEqual('Hello, my friend.');
    });

    it('Should return Shout(uppercase) when inputed name is uppercase', () => {
      const greeting = index.greet('JERRY');
      expect(greeting).toEqual('HELLO, JERRY.');
    });

    it('Should return "Hello, Jill and Jane." when inputed with array contain 2 names', () => {
      const greeting = index.greet(['Jill', 'Jane']);
      expect(greeting).toEqual('Hello, Jill and Jane.');
    });
  })
})
