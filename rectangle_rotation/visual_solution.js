function rectangleRotation(a, b) {
  const isClose = (a, b) => {
    const closenessThreshold = 0.5;
    return a <= b + closenessThreshold && a >= b - closenessThreshold;
  };

  const alpha = (1 / 4) * Math.PI;
  const beta = (1 / 4) * Math.PI;

  const a_1 = 0.5 * b * Math.sin(alpha);
  const a_2 = 0.5 * b * Math.cos(alpha);
  const b_1 = 0.5 * a * Math.sin(beta);
  const b_2 = 0.5 * a * Math.cos(beta);

  const f_a_1 = (x) => x + a_1 + a_2;
  const f_a_2 = (x) => x - a_1 - a_2;
  const f_b_1 = (x) => -x + b_1 + b_2;
  const f_b_2 = (x) => -x - b_1 - b_2;

  let count = 0;
  const border = a > b ? a : b;
  let grid = [];
  const maxDrawSize = 10;

  for (let x = -border; x <= border; x++) {
    for (let y = border; y >= -border; y--) {
      if (y <= f_a_1(x) && y <= f_b_1(x) && y >= f_a_2(x) && y >= f_b_2(x)) {
        count++;
        grid.push("! ");
      } else {
        if (isClose(y, f_a_1(x))) {
          grid.push("+ ");
        } else if (isClose(y, f_a_2(x))) {
          grid.push("# ");
        } else if (isClose(y, f_b_1(x))) {
          grid.push("x ");
        } else if (isClose(y, f_b_2(x))) {
          grid.push("o ");
        } else {
          grid.push(". ");
        }
      }
      if (x === 0 && y === 0) {
        grid.pop();
        grid.push("0 ");
      }
    }
    grid.push("\n");
  }

  grid = grid.join("");
  console.log(grid);

  return count;
}

rectangleRotation(6, 4);
