import { h, render } from "preact";

import Clock from 'views/clock';

render(<Clock size={600} />, document.getElementById("root") as HTMLElement);
