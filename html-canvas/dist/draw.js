// starter
window.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(step);
});

// draw clock with grey border
canvasManager(ctx)
  .setStyle({
    lineWidth: 10,
    fillStyle: "white",
    strokeStyle: "grey",
    textAlign: "center",
  })
  .circleFromCenter(radius - 5 /* <- lineWidth / 2 */)
  .fill()
  .stroke()

  // draw lines to center
  .setStyle({ lineWidth: 1 })
  .loopAround(BASE, (_) => _.lineToCenter())
  .stroke()

  // cover with circle to create ticks
  .setStyle({ fillStyle: "white" })
  .circleFromCenter(radius * (7 / 8))
  .fill()

  // same process but for draw larger ticks
  .setStyle({ lineWidth: 1 })
  .loopAround(HOURS, (_) => _.lineToCenter())
  .stroke()

  // cover again
  .setStyle({ fillStyle: "white" })
  .circleFromCenter(radius * (9 / 11))
  .fill()

  // add circle dot at the center
  .setStyle({ fillStyle: "black" })
  .circleFromCenter(radius * (1 / 25))
  .fill()

  // draw numbers
  .setStyle({ font: `${size / 180}rem Arial`, fillStyle: "black" })
  .loopAround(HOURS, (_, i) => {
    const { x, y } = fractionalArcLengthToXY(i / HOURS, radius * (3 / 4));
    ctx.fillText(i.toString(), x, y);
  });

// drawing function
function step() {
  const { hours, minutes, seconds } = getCentesimalDate();
  canvasManager(ctx)
    // erase circle portion of previous frame
    .setStyle({ fillStyle: "white" })
    .circleFromCenter(radius * (7 / 11))
    .fill()

    // redraw hands
    .setStyle({ strokeStyle: "black", lineWidth: 3 })
    .loopAround([seconds, minutes, hours], (_) => _.lineToCenter(), handLengths)
    .stroke()

    // redraw center dot
    .setStyle({ fillStyle: "black" })
    .circleFromCenter(radius * (1 / 25))
    .fill()

    // redraw logo
    .setStyle({ font: "18px Arial", color: "grey" });

  ctx.fillText("TEKNUM", center, center - 100);

  requestAnimationFrame(step);
}
