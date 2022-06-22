const removeVowelFromString = (str: string): string => {
  const validChars = [];
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (const char of str) {
    if (vowels.indexOf(char) >= 0) {
      continue;
    }
    validChars.push(char);
  }
  return validChars.join('');
};
