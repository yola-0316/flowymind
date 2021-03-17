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

  const txtRef = useRef(null);
  const [txtHeight, setTxtHeight] = useState(0);
  const [txtWidth] = useState(() => fontSize * `${name}`.length + padding * 2);

  const attr = useMemo(() => ({ x, y, width: txtWidth }), [x, y, txtWidth]);
  const rectAttr = useMemo(() => ({ height: txtHeight }), [txtHeight]);
  const txtAttr = useMemo(() => ({}), []);

  useEffect(() => {
    if (txtRef.current) {
      console.log((txtRef.current as any).height());
      setTxtHeight((txtRef.current as any).height());
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
        offsetX={txtWidth / 2}
        offsetY={txtHeight / 2}
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
        offsetX={txtWidth / 2}
        offsetY={txtHeight / 2}
        width={txtWidth}
        padding={padding}
        fontSize={fontSize}
        fill="#555"
        align="center"
        text={name}
      />
    </Group>
  );
};

export default Node;
