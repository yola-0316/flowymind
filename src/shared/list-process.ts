import remark from "remark";
import toHast from "mdast-util-to-hast";
import toDom from "hast-util-to-dom";

export type Tree = {
  name: string;
  children?: Tree[];
};

type Result = Tree[] | void;
export function eachNode(node: Node, tree: Tree[] = []): Result {
  if (node.hasChildNodes()) {
    let nodes = (node.childNodes as any) as Node[];

    for (let i = 0; i < nodes.length; i++) {
      let n = nodes[i];
      let hasChild = Array.from(n.childNodes).some((n) => n.nodeType !== 3);
      let text = n.firstChild?.textContent?.trim();

      if (hasChild) {
        let e;
        if (text) {
          e = { name: text, children: [] };
          tree.push(e);
        }
        eachNode(n, e?.children ?? tree);
      } else {
        if (text) {
          tree.push({ name: text });
        }
      }
    }
  }

  return tree;
}

export function mdListToDom(md = "") {
  const mdast = remark().parse(md);
  const hast = toHast(mdast);
  const dom = toDom(hast) as Element;
  return dom.querySelector("ul");
}
