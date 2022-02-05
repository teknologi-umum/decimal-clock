import { h, ComponentChildren } from "preact";
import { useEffect, useRef } from "preact/hooks";

import { HOURS, BASE } from "core/constants";
import { canvasManager, fractionalArcLengthToXY } from "views/helpers";

export const ClockFace = ({ children, size }: { children: ComponentChildren; size: number }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");

    const center = size / 2;
    const radius = size / 2;

    // draw circle with grey border
    canvasManager(ctx)
      .setStyle({ lineWidth: 10, fillStyle: "white", strokeStyle: "grey" })
      .circleFromCenter(radius - 5 /* <- lineWidth / 2 */)
      .fill()
      .stroke();

    // draw lines to center
    canvasManager(ctx)
      .setStyle({ lineWidth: 1 })
      .loopAround(BASE, (ctx) => ctx.lineTo(center, center))
      .stroke();

    // cover with circle to create ticks
    canvasManager(ctx)
      .setStyle({ fillStyle: "white" })
      .circleFromCenter(radius * (7 / 8))
      .fill();

    // same procecss but for draw larger ticks
    canvasManager(ctx)
      .setStyle({ lineWidth: 1 })
      .loopAround(HOURS, (ctx) => ctx.lineTo(center, center))
      .stroke();

    // cover again
    canvasManager(ctx)
      .setStyle({ fillStyle: "white" })
      .circleFromCenter(radius * (9 / 11))
      .fill();

    // add circle dot at the center
    canvasManager(ctx)
      .setStyle({ fillStyle: "black" })
      .circleFromCenter(radius * (1 / 25))
      .fill();

    // draw numbers
    canvasManager(ctx)
      .setStyle({ font: `${size / 180}rem Arial`, fillStyle: "black" })
      .loopAround(HOURS, (ctx, i) => {
        const { x, y } = fractionalArcLengthToXY(i / HOURS, center, (radius * 3) / 4)
        ctx.fillText(i.toString(), x, y);
      });
  }, [canvasRef.current]);

  return (
    <div className="clock-container" style={{ width: size, height: size }}>
      <canvas ref={canvasRef} width={size} height={size}></canvas>
      {children}
    </div>
  );
};
