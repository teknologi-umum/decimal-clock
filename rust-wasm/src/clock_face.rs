use wasm_bindgen::{prelude::JsValue, JsCast};
use web_sys::{Document, Element, HtmlDivElement};

pub struct ClockFace {
    clock_face_element: HtmlDivElement,
    document: Document,
}

macro_rules! create_hand {
    ($document:ident, $clock_face:ident, $type:expr, $rotation:expr) => {
        let hand = match $document.get_element_by_id(format!("{}-hand", $type).as_str()) {
            Some(hand) => hand.dyn_into::<HtmlDivElement>()?,
            None => {
                let h = $document
                    .create_element("div")
                    .expect(format!("Failed to create a `{}-hand` element", $type).as_str());
                h.set_attribute("id", format!("{}-hand", $type).as_str())
                    .expect(format!("Failed to give an ID to `{}-hand` element", $type).as_str());

                $clock_face
                    .append_child(&h)
                    .expect("Couldn't append a clock hand");

                h.dyn_into::<HtmlDivElement>()?
            }
        };
        hand.style()
            .set_property("transform", format!("rotate({}deg)", $rotation).as_str())?;
    };
}

impl ClockFace {
    pub fn new(document: Document) -> ClockFace {
        let clock_face = document
            .get_element_by_id("clock-face")
            .expect("Coudn't find element with id 'clock-face'")
            .dyn_into::<HtmlDivElement>()
            .unwrap();

        ClockFace {
            document,
            clock_face_element: clock_face,
        }
    }

    pub fn prepare_face(&self) -> Result<Element, JsValue> {
        let clock_face = self
            .document
            .get_element_by_id("clock-face")
            .expect("Could not find element with an id of 'clock-face'");

        for i in 0..10 {
            let digit = self
                .document
                .create_element("div")?
                .dyn_into::<HtmlDivElement>()?;
            digit.set_text_content(Some((i as u8).to_string().as_str()));
            digit.set_class_name("digit");

            let x: f64 = 50.0 - (std::f64::consts::PI * i as f64 / 5.0).sin() * 40.0;
            let y: f64 = 50.0 + (std::f64::consts::PI * i as f64 / 5.0).cos() * 40.0;
            digit
                .style()
                .set_property("left", format!("{}%", x).as_str())?;
            digit
                .style()
                .set_property("top", format!("{}%", y).as_str())?;

            clock_face.append_child(&digit)?;
        }

        for i in 0..100 {
            let tick = self
                .document
                .create_element("div")?
                .dyn_into::<HtmlDivElement>()?;
            let class_name = if i % 10 == 0 { "large tick" } else { "tick" };
            tick.set_class_name(class_name);
            tick.style().set_property(
                "transform",
                format!("rotate({}deg)", i as f64 * 3.6).as_str(),
            )?;

            println!("{:?}", &tick);

            clock_face.append_child(&tick)?;
        }

        Ok(clock_face)
    }

    pub fn render(&self, fraction_of_day: f64) -> Result<(), JsValue> {
        let document = &self.document;
        let clock_face_element = &self.clock_face_element;

        create_hand!(
            document,
            clock_face_element,
            "short",
            fraction_of_day * 360.0 + 180.0
        );
        create_hand!(
            document,
            clock_face_element,
            "long",
            fraction_of_day * 10.0 % 1.0 * 360.0 + 180.0
        );
        create_hand!(
            document,
            clock_face_element,
            "second",
            fraction_of_day * 1000.0 % 1.0 * 360.0 + 180.0
        );

        Ok(())
    }
}
