import { h, render } from "preact";

import { Clock } from "views/clock";

import "./style.css";

render(<Clock />, document.getElementById("root") as HTMLElement);
