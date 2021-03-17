import { useMemo } from "react";
import { Layer, Stage } from "react-konva";
import { useAsync } from "../hooks/useAsync";
import { mdListToDom, eachNode, transformNodeWithLayout } from "../shared";
import Tree from "./Tree";

function convertToTree() {
  return fetch("/skill.md")
    .then((r) => r.text())
    .then((md) => eachNode(mdListToDom(md) as Node));
}

function MindNode() {
  const { value } = useAsync(convertToTree);
  const nodes = useMemo(() => value && transformNodeWithLayout(value as any), [
    value,
  ]);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {(() => {
          if (nodes && nodes.length) {
            return <Tree tree={nodes[0]} />;
          }
          return null;
        })()}
      </Layer>
    </Stage>
  );
}

export default MindNode;
