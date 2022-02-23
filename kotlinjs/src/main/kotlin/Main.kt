import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLHeadingElement
import kotlin.js.Date
import kotlin.math.PI
import kotlin.math.cos
import kotlin.math.floor
import kotlin.math.sin

fun main() {
    val clockFace = document.getElementById("clock-face") as HTMLDivElement
    val clockTime = document.getElementById("clock-time") as HTMLHeadingElement

    // prepare clock digit
    IntRange(0, 9)
        .map { it.toDigitPosition().toDigitElement() }
        .forEach { clockFace.appendChild(it) }

    // prepare clock tick
    IntRange(0, 99)
        .map { it.toTickProperty().toTickElement() }
        .forEach { clockFace.appendChild(it) }

    window.requestAnimationFrame { render(clockFace, clockTime) }
}

fun render(clockFace: HTMLDivElement, clockTime: HTMLHeadingElement) {
    val date = Date()
    val timeOfDay = (date.getHours() * 60 * 60 * 1000) +
            (date.getMinutes() * 60 * 1000) +
            (date.getSeconds() * 1000) +
            date.getMilliseconds()
    val fractionOfDay = timeOfDay / 86400000.0

    renderFace(clockFace, fractionOfDay)
    renderTime(clockTime, fractionOfDay)

    window.requestAnimationFrame { render(clockFace, clockTime) }
}

data class DigitPosition(val i: Int, val x: Double, val y: Double)

fun Int.toDigitPosition() = DigitPosition(
    i = this,
    x = 50 - sin((PI * this) / 5) * 40,
    y = 50 + cos((PI * this) / 5) * 40
)

fun DigitPosition.toDigitElement(): HTMLDivElement {
    val (i, x, y) = this

    val digit = document.createElement("div") as HTMLDivElement
    digit.innerText = i.toString()
    digit.className = "digit"
    digit.style.left = "$x%"
    digit.style.top = "$y%"

    return digit
}

data class TickProperty(val className: String, val transform: String)

fun Int.toTickProperty() = TickProperty(
    className = if (this % 10 == 0) "large tick" else "tick",
    transform = "rotate(${this * 3.6}deg)"
)

fun TickProperty.toTickElement(): HTMLDivElement {
    val (className, transform) = this
    val tick = document.createElement("div") as HTMLDivElement
    tick.className = className
    tick.style.transform = transform
    return tick
}

fun renderFace(clockFace: HTMLDivElement, fractionOfDay: Double) {
    var short = document.getElementById("short-hand") as HTMLDivElement?
    if (short == null) {
        short = document.createElement("div") as HTMLDivElement
        short.id = "short-hand"
        clockFace.appendChild(short)
    }
    short.style.transform = "rotate(${fractionOfDay * 360 + 180}deg)"

    var long = document.getElementById("long-hand") as HTMLDivElement?
    if (long == null) {
        long = document.createElement("div") as HTMLDivElement
        long.id = "long-hand"
        clockFace.appendChild(long)
    }
    long.style.transform = "rotate(${((fractionOfDay * 10) % 1) * 360 + 180}deg)"

    var second = document.getElementById("second-hand") as HTMLDivElement?
    if (second == null) {
        second = document.createElement("div") as HTMLDivElement
        second.id = "second-hand"
        clockFace.appendChild(second)
    }
    second.style.transform = "rotate(${
        ((fractionOfDay * 1000) % 1) * 360 + 180
    }deg)"
}

fun renderTime(clockTime: HTMLHeadingElement, fractionOfDay: Double) {
    val hh = floor(fractionOfDay * 10)
    val mm = floor((fractionOfDay * 10 - hh) * 100)
    val ss = floor((fractionOfDay * 100000) % 100)
    clockTime.innerText = "$hh:${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}"
}
