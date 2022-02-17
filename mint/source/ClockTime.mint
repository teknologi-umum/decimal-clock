component ClockTime {
  property fractionOfDay : Number

  fun padWithZero(n : Number) : String {
    if (String.size(str) == 1) {
        "0" + str
    } else {
        str
    }
  } where {
    str = Number.toString(n)
  }

  get clock: String {
    "#{hh}:#{mm}:#{ss}"
  } where {
    hh = fractionOfDay * 10 |> Math.floor
    mm = (fractionOfDay * 10 - hh) * 100  |> Math.floor |> padWithZero
    ss = (fractionOfDay * 100000) % 100  |> Math.floor |> padWithZero
  }

  fun render : Html {
    <div>
      <h1>"#{clock}"</h1>
    </div>
  }
}