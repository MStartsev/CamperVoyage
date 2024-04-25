function capitalizeWord(word) {
  if (/^[A-Z]+$/.test(word)) {
    return word;
  }

  let result = word.replace(/([A-Z])/g, ' $1');

  result = result.charAt(0).toUpperCase() + result.slice(1);
  return result.trim();
}

export default capitalizeWord;
