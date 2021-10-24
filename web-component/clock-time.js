class ClockTime extends HTMLElement {
	constructor(){
		super()
		this.renderTime(0)
	}
	renderTime(fractionOfDay) {
	  const hh = Math.floor(fractionOfDay * 10);
	  const mm = Math.floor((fractionOfDay * 10 - hh) * 100);
	  const ss = Math.floor((fractionOfDay * 100000) % 100);
	  document.querySelector('clock-time').innerHTML = `
	  	<h1 class="clock-time">
	  		${hh}:${mm.toString().padStart(2, "0")}:${ss.toString().padStart(2, "0")}
	  	</h1>
	  	`;
	}

}

customElements.define("clock-time", ClockTime);
export default ClockTime