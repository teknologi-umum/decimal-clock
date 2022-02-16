using dom
using util
using web
using webmod

@Js class JsDecimalClock
{
    static Void main(){
      prepareFace()
      render()
    }

    static Void prepareFace(){
      clockFace := Win.cur.doc.elemById("clock-face")

      // digits..
      10.times |i| {        
        x:= 50 - (Float.pi * i / 5.0f).sin * 40
        y:= 50 + (Float.pi * i / 5.0f).cos * 40
        
        digit := Elem("div") {
          it.text = i.toStr
          it.setAttr("class","digit")  
          it.style["left"] = `${x}%`
          it.style["top"] = `${y}%`
        }

        clockFace.add(digit);
      }

      // ticks..
      100.times |i| {
        tick := Elem("div") {
          it.setAttr("class", i % 10 == 0 ? "large tick" : "tick")
          it.style["transform"] = `rotate(${i * 3.6f}deg)`;
        }

        clockFace.add(tick);
      }
    }

    static Void renderFace(Float fractionOfDay) {
      doc := Win.cur.doc
      clockFace := doc.elemById("clock-face")
      short := doc.elemById("short-hand")

      if (short == null){
        short = Elem("div")
        short.id = "short-hand"
        clockFace.add(short)
      }

      short.style["transform"] = `rotate(${fractionOfDay * 360 + 180}deg)`;

      long := doc.elemById("long-hand");
      if (long == null) {
        long = Elem("div");
        long.id = "long-hand";
        clockFace.add(long);
      }
      long.style["transform"] = `rotate(${fractionOfDay * 10 % 1 * 360 + 180}deg)`;

      second := doc.elemById("second-hand");
      if (second == null) {
        second = Elem("div");
        second.id = "second-hand";
        clockFace.add(second);
      }
      second.style["transform"] = `rotate(${fractionOfDay * 1000 % 1 * 360 + 180}deg)`;
    }

    static Void renderTime(Float fractionOfDay) {
       clockTime := Win.cur.doc.elemById("clock-time")

       hh := (fractionOfDay * 10).floor;
       mm := ((fractionOfDay * 10 - hh) * 100).floor
       ss := ((fractionOfDay * 100000) % 100).floor
       clockTime.text = hh.toLocale("#") + ":" + mm.toLocale("00") + ":" + ss.toLocale("00");
   }

   static Void render() {
      date := DateTime.now;
      timeOfDay := date.hour * 60 * 60 * 1000 +
            date.min * 60 * 1000 +
            date.sec() * 1000 +
            date.nanoSec() / 1000000;
      fractionOfDay := timeOfDay / 86400000.0f;
      renderFace(fractionOfDay);
      renderTime(fractionOfDay);
      Win.cur.reqAnimationFrame() |e| {
        render()
      };
   }
}