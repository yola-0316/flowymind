type Point = {
  x: number;
  y: number;
};

type Shape = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export const getCenter: (shape: Shape) => Point = ({ x, y, width, height }) => {
  return { x: x + width / 2, y: y + height / 2 };
};
