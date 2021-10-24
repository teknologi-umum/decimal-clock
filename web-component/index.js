import ClockFace from "./clock.js"
import ClockTime from "./clock-time.js"

let clockFace = new ClockFace()
let clockTime = new ClockTime()
function render(){
	const date = new Date();
	const timeOfDay = date.getHours() * 60 * 60 * 1000 +
	      date.getMinutes() * 60 * 1000 +
	      date.getSeconds() * 1000 +
	      date.getMilliseconds();
	const fractionOfDay = timeOfDay / 86400000;
	clockFace.renderFace(fractionOfDay);
	clockTime.renderTime(fractionOfDay);
	window.requestAnimationFrame(render.bind(this))
}
window.requestAnimationFrame(render);
clockFace.prepareFace()
