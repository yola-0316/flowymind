import { Layer } from "react-konva";

export type ControlsProps = {
  children?: React.ReactNode;
};
const Controls = (props: ControlsProps) => {
  return <Layer>{props.children}</Layer>;
};

export default Controls;
