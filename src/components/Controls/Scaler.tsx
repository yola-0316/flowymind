import type { Vector2d } from "konva/types/types";
import { useState } from "react";
import { Line, Circle, Text, Group } from "react-konva";

export type ScalerProps = {
  minScale?: number;
  maxScale?: number;
  onChange?(scale: number): void;
};
const Scaler = (props: ScalerProps) => {
  const x = 10;
  const y = 10;
  const width = 100;
  const maxScale = 200; // 200%
  const minScale = 50; // 50%
  const minValue = x;
  const maxValue = x + width;
  const strokeWidth = 5;
  const barColor = "#aaa";
  const pinColor = "#e53";

  const [scale, setScale] = useState(100);

  const limit = (pos: Vector2d): Vector2d => {
    let newX =
      pos.x > maxValue ? maxValue : pos.x < minValue ? minValue : pos.x;
    // 两点式
    const newScale =
      ((newX - minValue) / (maxValue - minValue)) * (maxScale - minScale) +
      minScale;
    setScale(newScale);
    props.onChange && props.onChange(newScale);
    return {
      x: newX,
      y: 10,
    };
  };

  return (
    <Group>
      <Line
        points={[x, y, x + width, y]}
        strokeWidth={strokeWidth}
        stroke={barColor}
      />
      <Circle
        x={
          ((scale - minScale) / (maxScale - minScale)) * (maxValue - minValue) +
          minValue
        }
        y={y}
        radius={5}
        stroke={pinColor}
        draggable
        dragBoundFunc={limit}
      />
      <Text x={maxValue + 10} y={y} text={`scale: ${scale.toFixed(2)} %`} />
    </Group>
  );
};

export default Scaler;
