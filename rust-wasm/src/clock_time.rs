use js_sys::Date;
use wasm_bindgen::prelude::JsValue;
use web_sys::{Document, Element};

pub struct ClockTime {
    clock_time_element: Element,
}

impl ClockTime {
    pub fn new(document: &Document) -> ClockTime {
        let clock_time = document
            .get_element_by_id("clock-time")
            .expect("Couldn't find element with id 'clock-time'");

        ClockTime {
            clock_time_element: clock_time,
        }
    }

    pub fn get_fraction_of_day(&self) -> f64 {
        let date = Date::new_0();
        let time_of_day: f64 = date.get_hours() as f64 * 60.0 * 60.0 * 1000.0
            + date.get_minutes() as f64 * 60.0 * 1000.0
            + date.get_seconds() as f64 * 1000.0
            + date.get_milliseconds() as f64;

        time_of_day / 86400000.0
    }

    pub fn render(&self, fraction_of_day: f64) -> Result<(), JsValue> {
        let hh = (fraction_of_day * 10.0).floor();
        let mm = ((fraction_of_day * 10.0 - hh) * 100.0).floor();
        let ss = ((fraction_of_day * 100_000.0) % 100.0).floor();
        let time = format!("{}:{:0>2}:{:0>2}", hh = hh, mm = mm, ss = ss);

        self.clock_time_element
            .set_text_content(Some(time.as_str()));

        Ok(())
    }
}
