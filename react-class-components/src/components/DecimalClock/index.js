import React from "react";

import "./DecimalClock.css";

class ClockFace extends React.Component {
  render() {
    return (
      <div id="clock-face">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="digit"
            style={{
              left: 50 - Math.sin((Math.PI * i) / 5) * 40 + "%",
              top: 50 + Math.cos((Math.PI * i) / 5) * 40 + "%",
            }}
          >
            {i}
          </div>
        ))}

        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className={i % 10 === 0 ? "large tick" : "tick"}
            style={{ transform: `rotate(${i * 3.6}deg)` }}
          />
        ))}

        {this.props.fractionOfDay && (
          <>
            <div
              id="short-hand"
              style={{
                transform: `rotate(${this.props.fractionOfDay * 360 + 180}deg)`,
              }}
            />

            <div
              id="long-hand"
              style={{
                transform: `rotate(${
                  ((this.props.fractionOfDay * 10) % 1) * 360 + 180
                }deg)`,
              }}
            />

            <div
              id="second-hand"
              style={{
                transform: `rotate(${
                  ((this.props.fractionOfDay * 1000) % 1) * 360 + 180
                }deg)`,
              }}
            />
          </>
        )}
      </div>
    );
  }
}

class ClockTime extends React.Component {
  render() {
    const hh = Math.floor(this.props.fractionOfDay * 10);
    const mm = Math.floor((this.props.fractionOfDay * 10 - hh) * 100);
    const ss = Math.floor((this.props.fractionOfDay * 100000) % 100);

    const timeString = `${hh}:${mm.toString().padStart(2, "0")}:${ss
      .toString()
      .padStart(2, "0")}`;

    return <h1 id="clock-time">{timeString}</h1>;
  }
}

export default class DecimalClock extends React.Component {
  constructor(props) {
    super(props);

    this.requestRef = React.createRef();

    this.state = {
      date: new Date(),
    };

    this.update = this.update.bind(this);
  }

  update() {
    this.setState({
      date: new Date(),
    });

    this.requestRef.current = requestAnimationFrame(this.update);
  }

  componentDidMount() {
    this.requestRef.current = requestAnimationFrame(this.update);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.requestRef.current);
  }

  render() {
    const { date } = this.state;

    const timeOfDay =
      date.getHours() * 60 * 60 * 1000 +
      date.getMinutes() * 60 * 1000 +
      date.getSeconds() * 1000 +
      date.getMilliseconds();

    const fractionOfDay = timeOfDay / 86400000;

    return (
      <>
        <h2>Decimal Clock</h2>
        <ClockFace fractionOfDay={fractionOfDay} />
        <ClockTime fractionOfDay={fractionOfDay} />
      </>
    );
  }
}
