component Main {
  use Provider.AnimationFrame {	frames = draw }

  state fractionOfDay : Number = 0

  // use js inlining 
  fun jsGetFractionOfDay() : Number {
    `(() => {
        const date = new Date();
        const timeOfDay = date.getHours() * 60 * 60 * 1000 +
            date.getMinutes() * 60 * 1000 +
            date.getSeconds() * 1000 +
            date.getMilliseconds();

        return timeOfDay / 86400000;
    })()`
  }

  fun draw(timestamp : Number) {
  	next {
      fractionOfDay = jsGetFractionOfDay()
    }
  }

  fun render : Html {
    <div>
      <h2>"Decimal Clock"</h2>
      <ClockFace>
        <Digits/>
        <Ticks />
        <Hands fractionOfDay={fractionOfDay}/>
      </ClockFace>
      <ClockTime fractionOfDay={fractionOfDay}></ClockTime>
    </div>
  }
}
