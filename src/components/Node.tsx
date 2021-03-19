import { useEffect, useMemo, useRef, useState } from "react";
import { Group, Rect, Text } from "react-konva";

export type NodeProps = {
  x: number;
  y: number;
  name: string;
};
const Node = (props: NodeProps) => {
  const { x, y, name } = props;
  const padding = 5;
  const fontSize = 16;

  const attr = useMemo(() => ({ x, y }), [x, y]);

  const txtRef = useRef(null);
  const [txtHeight, setTxtHeight] = useState(0);
  const [txtWidth, setTextWidth] = useState(0);
  const rectAttr = useMemo(() => ({ width: txtWidth, height: txtHeight }), [
    txtWidth,
    txtHeight,
  ]);
  const txtAttr = useMemo(() => ({}), []);

  useEffect(() => {
    if (txtRef.current) {
      // console.log((txtRef.current as any).height());
      // console.log((txtRef.current as any).width());
      setTxtHeight((txtRef.current as any).height());
      setTextWidth((txtRef.current as any).width());
    }
  }, []);

  useEffect(() => {
    if (txtRef.current) {
      (txtRef.current as any).zIndex(1);
    }
  }, []);

  return (
    <Group>
      <Rect
        {...attr}
        {...rectAttr}
        width={txtWidth}
        height={txtHeight}
        stroke="#555"
        strokeWidth={2}
        fill="#ddd"
        cornerRadius={10}
      />
      <Text
        ref={txtRef}
        {...attr}
        {...txtAttr}
        padding={padding}
        fontSize={fontSize}
        fill="#555"
        text={name}
      />
    </Group>
  );
};

export default Node;
