// parsing and count natual number

// sort in order many

/**
 *
 * @param {string} s
 */
 function solution(s) {
  const counter = {};
  let buf = "";
  [...s].forEach(char => {
    switch(char) {
      case "{":
      case " ":
          break;
      case "}":
      case ",":
        if (buf !== '') {
          counter[buf] = counter[buf] ? counter[buf] + 1 : 1;
          buf = "";
        }
        break;
      default:
        buf += char;
        break;
    }
  });

  const answer = [];
  const length = Object.keys(counter).length;
  for ([key, val] of Object.entries(counter)) {
    answer[length - val] = parseInt(key);
  }
  return answer;
}
