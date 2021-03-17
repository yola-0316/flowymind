// type RawNode = {
//   text: string;
//   children: RawNode[];
// };

// const isPlainObject = (val: any) =>
//   !!val && typeof val === "object" && val.constructor === Object;

// function serilize(data: any): RawNode {
//   const [[key, children]] = Object.entries(data);

//   return {
//     text: key,
//     children: (children as any).map((node: any) => {
//       if (!isPlainObject(node)) return { text: node };
//       const [[k, v]] = Object.entries(node);
//       if (v === null) return { text: k };
//       return serilize(node);
//     }),
//   };
// }

export {};
