interface pos {
  x: number;
  y: number;
}
function logPoint(p: pos) {
  console.log(`X: ${p.x}, Y: ${p.y}`);
}
const point = { x: 210, y: -54 };
logPoint(point);