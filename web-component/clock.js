class ClockFace extends HTMLElement {
	constructor() {
        super()
        this.prepareFace()
        this.renderFace(0)
    }
	prepareFace() {
	  // draw digits
	  for (let i = 0; i < 10; i++) {
	    const digit = document.createElement("div");
	    digit.innerText = i.toString();
	    digit.className = "digit";
	    const x = 50 - Math.sin(Math.PI * i / 5) * 40;
	    const y = 50 + Math.cos(Math.PI * i / 5) * 40;
	    digit.style.left = `${x}%`;
	    digit.style.top = `${y}%`;
	    this.appendChild(digit);
	  }
	  // draw ticks
	  for (let i = 0; i < 100; i++) {
	    const tick = document.createElement("div");
	    tick.className = i % 10 === 0 ? "large tick" : "tick";
	    tick.style.transform = `rotate(${i * 3.6}deg)`;
	    this.appendChild(tick);
	  }
	}
	renderFace(fractionOfDay) {
	  // short hand
	  let short = document.getElementById("short-hand");
	  if (short === null) {
	    short = document.createElement("div");
	    short.id = "short-hand";
	    this.appendChild(short);
	  }
	  short.style.transform = `rotate(${fractionOfDay * 360 + 180}deg)`;
	  // long hand
	  let long = document.getElementById("long-hand");
	  if (long === null) {
	    long = document.createElement("div");
	    long.id = "long-hand";
	    this.appendChild(long);
	  }
	  long.style.transform = `rotate(${fractionOfDay * 10 % 1 * 360 + 180}deg)`;
	  // second hand
	  let second = document.getElementById("second-hand");
	  if (second === null) {
	    second = document.createElement("div");
	    second.id = "second-hand";
	    this.appendChild(second);
	  }
	  second.style.transform = `rotate(${fractionOfDay * 1000 % 1 * 360 + 180}deg)`;
	}
}

customElements.define("clock-face", ClockFace);
export default ClockFace
