component Digits {
    fun drawDigit(i: Number) : Html {
      <Digit index={i}/>
    }

    fun render : Html {
      <div>
        <{ Array.range(0,9) |> Array.map(drawDigit) }>
      </div>
  }
}

component Digit {
    property index : Number

    // use js inlining, somehow I can't find PI constant on mint
    get x : Number {
      `50 - Math.sin(Math.PI * #{index} / 5) * 40`
    }
    
    get y : Number {
      `50 + Math.cos(Math.PI * #{index} / 5) * 40`
    }

    // somehow using string interpolation for x and y doesn't work @3@
    style digit {
      position: absolute;
      font-size: 6vh;
      height: 7vh;
      width: 7vh;
      margin-left: -3.5vh;
      margin-top: -3.5vh;
      text-align: center;
      user-select: none;
    }

    fun render : Html{
      <div::digit style="left: #{x}%; top: #{y}%">"#{index}"</div>
    }
}