import { useMemo, useState } from "react";
import { Layer, Stage } from "react-konva";
import { useAsync } from "../hooks/useAsync";
import { mdListToDom, eachNode, transformNodeWithLayout } from "../shared";
import Tree from "./Tree";
import Controls from "./Controls/Controls";
import Scaler from "./Controls/Scaler";

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

  const [scale, setScale] = useState(1);

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Controls>
        <Scaler onChange={(scale) => setScale(scale / 100)} />
      </Controls>
      <Layer scale={{ x: scale, y: scale }} draggable>
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
