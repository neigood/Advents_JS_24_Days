function decode(message: string): string {
  function reverseString(str: string): string {
    return str.split('').reverse().join('');
  }

  const stack: string[] = [];
  let result = '';

  for (const char of message) {
    if (char === '(') {
      stack.push(result);
      result = '';
    } else if (char === ')') {
      result = reverseString(result);
      result = stack.pop() + result;
    } else {
      result += char;
    }
  }

  return result;
}