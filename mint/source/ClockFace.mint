component ClockFace {
  style clockface {
    position: relative;
    width: 70vh;
    height: 70vh;
    border: solid 2vh #888;
    border-radius: 37vh;
    margin: 0 auto;

    &:before {
      content: 'TEKNUM';
      display: block;
      position: absolute;
      font-size: 2.5vh;
      color: #bbb;
      font-weight: 500;
      letter-spacing: .3vh;
      text-align: center;
      width: 100%;
      top: 28%;
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 4%;
      height: 4%;
      left: 50%;
      top: 50%;
      margin: -2% 0 0 -2%;
      background: #000;
      border-radius: 50%;
    }
  }

  property children : Array(Html) = []

  fun render : Html {
    <div::clockface>
      <{ children }>
    </div>
  }
}