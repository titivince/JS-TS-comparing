var char = "0123456789ABCDEF";
var color: string;
var i: number;

function generateRandomColor() {
  color = "#"
  for (i = 0; i < 6; i++) {
    color += char[Math.floor(Math.random() * char.length)];
  }
  return color;
}

console.log(generateRandomColor());