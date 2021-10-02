function prepareFace() {
  // draw digits
  for (let i = 0; i < 10; i++) {
    const digit = $('<div></div>').text(`${i.toString()}`).addClass('digit');
    const x = 50 - Math.sin(Math.PI * i / 5) * 40;
    const y = 50 + Math.cos(Math.PI * i / 5) * 40;
    digit.css({"left": x + "%", "top": y + "%"});
    $('#clock-face').append(digit);

  }
  // draw ticks
  for (let i = 0; i < 100; i++) {
    const tick = $('<div></div>').addClass(`${i % 10 === 0 ? "large tick" : "tick"}`);
    tick.css({"transform": `rotate(${i * 3.6}deg)`});
    $('#clock-face').append(tick);
  }
}

function renderFace(fractionOfDay) {
  // short hand
  let short = $('#short-hand');
  if (!short.length) {
    short = $('<div></div>').attr('id', 'short-hand');
    $('#clock-face').append(short);
  }
  short.css('transform', `rotate(${fractionOfDay * 360 + 180}deg)`);
  // long hand
  let long = $('#long-hand');
  if (!long.length) {
    long = $('<div></div>').attr('id', 'long-hand');
    $('#clock-face').append(long);
  }
    long.css('transform', `rotate(${fractionOfDay * 10 % 1 * 360 + 180}deg)`);
  // second hand
    let second = $('#second-hand');
  if (!second.length) {
    second = $('<div></div>').attr('id', 'second-hand');
    $('#clock-face').append(second);
  }
    second.css('transform', `rotate(${fractionOfDay * 1000 % 1 * 360 + 180}deg)`);
}

function renderTime(fractionOfDay) {
  const hh = Math.floor(fractionOfDay * 10);
  const mm = Math.floor((fractionOfDay * 10 - hh) * 100);
  const ss = Math.floor((fractionOfDay * 100000) % 100);
  $('#clock-time').text(`${hh}:${mm.toString().padStart(2, "0")}:${ss.toString().padStart(2, "0")}`);
}

function render() {
  const date = new Date();
  const timeOfDay = date.getHours() * 60 * 60 * 1000 +
        date.getMinutes() * 60 * 1000 +
        date.getSeconds() * 1000 +
        date.getMilliseconds();
  const fractionOfDay = timeOfDay / 86400000;
  renderFace(fractionOfDay);
  renderTime(fractionOfDay);
  window.requestAnimationFrame(render);

}

$(document).ready(function() {
    prepareFace();
    render();
});
