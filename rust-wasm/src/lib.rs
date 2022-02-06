use std::{cell::RefCell, rc::Rc};

use wasm_bindgen::prelude::*;
use wasm_bindgen::JsCast;

mod clock_face;
use clock_face::ClockFace;

mod clock_time;
use clock_time::ClockTime;

// When the `wee_alloc` feature is enabled, this uses `wee_alloc` as the global
// allocator.
//
// If you don't want to use `wee_alloc`, you can safely delete this.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

// This is like the `main` function, except for JavaScript.
#[wasm_bindgen(start)]
pub fn main_js() -> Result<(), JsValue> {
    // This provides better error messages in debug mode.
    // It's disabled in release mode so it doesn't bloat up the file size.
    #[cfg(debug_assertions)]
    console_error_panic_hook::set_once();

    let document = window()
        .document()
        .expect("should have a document on window");

    let time = ClockTime::new(&document);
    let face = ClockFace::new(document);
    face.prepare_face()?;

    let f = Rc::new(RefCell::new(None));
    let render = f.clone();

    *render.borrow_mut() = Some(Closure::wrap(Box::new(move || {
        let fraction_of_day = time.get_fraction_of_day();

        face.render(fraction_of_day)
            .expect("Failed to render the clock face");
        time.render(fraction_of_day)
            .expect("Failed to render the clock time");

        request_animation_frame(f.borrow().as_ref().unwrap());
    }) as Box<dyn FnMut()>));

    request_animation_frame(render.borrow().as_ref().unwrap());

    Ok(())
}

fn window() -> web_sys::Window {
    web_sys::window().expect("no global `window` exists")
}

fn request_animation_frame(f: &Closure<dyn FnMut()>) {
    window()
        .request_animation_frame(f.as_ref().unchecked_ref())
        .expect("should register `requestAnimationFrame` OK");
}
