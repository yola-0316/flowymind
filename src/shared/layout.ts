// let width = window.innerWidth;
// let height = window.innerHeight;

type RawNode = {
  name: string;
  children?: FinalNode[];
};
export function transformNodeWithLayout(
  nodes: RawNode[],
  level = 1,
  parentNodes: RawNode[] = []
): FinalNode[] {
  let comp = 0;
  nodes.forEach((node, index) => {
    let parentNode = parentNodes[parentNodes.length - 1];
    let prevNode = nodes[index - 1];
    Object.assign(
      node,
      getLayout(node, { level, index, parentNode, prevNode, comp })
    );

    if (node.children) {
      parentNodes.push(node);
      node.children = transformNodeWithLayout(
        node.children,
        level + 1,
        parentNodes
      );
      parentNodes.pop();

      if (node.children[node.children.length - 1])
        comp = node.children[node.children.length - 1].y;
      else {
        comp += (node as any).y;
      }
    } else {
      comp = 0;
      // comp += node.y;
    }
  });
  return nodes as FinalNode[];
}

type NodeInfo = {
  level: number;
  index: number;
  parentNode: any;
  prevNode: any;
  comp: number;
};

type FinalNode = {
  x: number;
  y: number;
} & RawNode;
function getLayout(
  { name }: RawNode,
  { level, index, parentNode, prevNode, comp }: NodeInfo
): FinalNode {
  if (level === 1) {
    return {
      name,
      // x: width / 2,
      x: 100,
      // y: height / 2,
      y: 50,
    };
  }

  return {
    name,
    x: parentNode.x + 300,
    y: comp
      ? comp + 40
      : prevNode
      ? prevNode.y + 40
      : parentNode.y + index * 35,
  };
}
