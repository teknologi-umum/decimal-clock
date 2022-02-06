import { h, ComponentChildren } from "preact";
import { useContext } from "preact/hooks";

import { Tick } from 'views/clock/tick'
import { Label } from 'views/clock/label'

import { SizeContext } from "views/clock";
import { HOURS, BASE } from "core/constants";

export const ClockFace = ({  children }: {  children: ComponentChildren }) => {
  const size = useContext(SizeContext)
  return (
    <div className="clock-container" style={{ width: size, height: size }}>
      <div className="clock-face">
        <span className="logo">TEKNUM</span>
        <div className="center-point" />
        {[...Array(BASE)].map((_, i) => <Tick key={i} index={i} />)}
        {[...Array(HOURS)].map((_, i) => <Label key={i} index={i} />)}
      </div>
      {children}
    </div>
  );
};
