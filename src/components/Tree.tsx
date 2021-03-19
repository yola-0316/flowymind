import React, { useEffect, useRef } from "react";
import { Group, Line } from "react-konva";
import { getCenter } from "@/shared";
import Node, { NodeProps } from "./Node";

type TreeProps = {
  tree: {
    children?: NodeProps[];
  } & NodeProps;
};
const Tree = (props: TreeProps) => {
  const {
    tree: { children = [], ...node },
  } = props;

  const linesRef = useRef<any[]>([]);

  useEffect(() => {
    linesRef.current.forEach((r: any) => {
      r.moveToBottom && r.moveToBottom();
    });
  }, []);

  return (
    <Group>
      {node.name && <Node {...node} />}
      {children &&
        children.map((child, i) => (
          <React.Fragment key={i}>
            <Line
              ref={(e) => (linesRef.current[i] = e)}
              points={[
                node.x + 10,
                node.y + 10,
                // child.x,
                // node.y,
                // node.x,
                // child.y,
                child.x + 10,
                child.y + 10,
              ]}
              stroke="red"
              strokeWidth={2}
              // bezier={true}
            />
            <Tree tree={child} />
          </React.Fragment>
        ))}
    </Group>
  );
};

export default Tree;
