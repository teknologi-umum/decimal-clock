component Ticks {
    fun drawTick(i: Number) : Html {
      <Tick index={i}/>
    }

    fun render : Html {
      <div>
        <{ Array.range(0,100) |> Array.map(drawTick) }>
      </div>
    }
}

component Tick {
    property index : Number

    style tick {
      position: absolute;
      width: .3%;
      left: 50%;
      margin-left: -.15%;
      background: #888;
      height: 2%;
      transform-origin: 50% 2500%;
      transform: rotate(#{index * 3.6}deg);
      
      if (index % 10 == 0) {
        height: 4%;
        transform-origin: 50% 1250%;
      }
    }

    fun render : Html{
      <div::tick style=""></div>
    }
}