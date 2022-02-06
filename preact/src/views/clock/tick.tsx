import { h } from "preact";
import { useContext } from "preact/hooks";

import { fractionalArcLengthToXY } from "views/helpers";

import { SizeContext } from 'views/clock'
import { HOURS, BASE } from "core/constants";

export const Tick = ({ index }) => {
  const size = useContext(SizeContext)
  const { x, y } = fractionalArcLengthToXY(index / BASE, size / 2, size / 2 - 10);
  const isLargeTick = index % HOURS === 0;

  const styleProps = {
    top: y + "px",
    left: x + "px",
    transform: `rotate(${(index / BASE) * 360 + 180}deg)`,
    height: isLargeTick ? "20px" : "10px",
  };

  return <div className="tick" style={styleProps} />;
};
