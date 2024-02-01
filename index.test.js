const greet = require("./index")

test('Test function works', () => {
    expect(greet("Lukas")).toBe("Hello, Lukas!");
  });