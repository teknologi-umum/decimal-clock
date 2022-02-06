import { h } from "preact";
import { useContext } from "preact/hooks";

import { fractionalArcLengthToXY } from "views/helpers";

import { SizeContext } from "views/clock";
import { HOURS } from "core/constants";


export const Label = ({ index }: {index: number}) => {
  const size = useContext(SizeContext)

  const { x, y } = fractionalArcLengthToXY(index / HOURS, size / 2, size / 2 - 50);

  const styleProps = { top: y - 18 + "px", left: x - 10 + "px" };

  const label = index + 0
  
  return (
    <span className="hour-number" style={styleProps}>{label}</span>
  );
};
