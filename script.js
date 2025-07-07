const codeLines = [
  "function fightCrime() {",
  "  const villain = 'Joker';",
  "  const location = 'Gotham';",
  "  if (night) {",
  "    summon(Batman);",
  "    track(villain, location);",
  "    defend(location);",
  "  }",
  "}",
  "",
  "while (justice < 100) {",
  "  vibeCode();",
  "  stayInShadows();",
  "}"
];

let currentLine = 0;
let currentChar = 0;
const typingElement = document.getElementById('typing');

function typeCode() {
  if (currentLine < codeLines.length) {
    const line = codeLines[currentLine];
    if (currentChar < line.length) {
      typingElement.innerHTML += line[currentChar];
      currentChar++;
    } else {
      typingElement.innerHTML += '\n';
      currentLine++;
      currentChar = 0;
    }
    setTimeout(typeCode, 50);
  }
}

window.onload = () => {
  typeCode();
};
