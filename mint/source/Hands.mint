component Hands {
    property fractionOfDay : Number
    
    style hand {
      position: absolute;
      background: #000;
      transform-origin: 50% 100%;
    }

    style short {
      width: 1%;
      left: 50%;
      top: 27%;
      margin-left: -.5%;
      height: 23%;
    }

    style long {
      width: 1%;
      left: 50%;
      top: 20%;
      margin-left: -.5%;
      height: 30%;
    }

    style second {
      width: .3%;
      left: 50%;
      top: 18%;
      margin-left: -.15%;
      height: 32%;
    }

    get shortRotation : String {
      Number.toFixed(2, fractionOfDay * 360 + 180)
    }

    get longRotation : String {
      Number.toFixed(2, fractionOfDay * 10 % 1 * 360 + 180)
    }

    get secondRotation : String {
      Number.toFixed(2, fractionOfDay * 1000 % 1 * 360 + 180)
    }

    fun render : Html {
      <div>
        <div::hand::long style="transform: rotate(#{longRotation}deg);"></div>
        <div::hand::short style="transform: rotate(#{shortRotation}deg);"></div>
        <div::hand::second style="transform: rotate(#{secondRotation}deg);"></div>
      </div>
    }
}