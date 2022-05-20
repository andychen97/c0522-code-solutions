/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixArray = [];
  for (var i = 0; i < words.length; i++) {
    var newWord = words[i] += suffix;
    suffixArray.push(newWord);
  }
  return suffixArray;
}
