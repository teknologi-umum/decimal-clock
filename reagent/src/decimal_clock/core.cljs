(ns decimal-clock.core
  (:require
    [goog.string :as goog-string]
    [reagent.core :as r]
    [reagent.dom :as d]))

;; -------------------------
;; Components

(defn clock-hands [fraction-of-day]
  [:<>
   [:div#short-hand
    {:style {:transform (str "rotate(" (-> fraction-of-day (* 360) (+ 180)) "deg)")}}]
   [:div#long-hand
    {:style {:transform (str "rotate(" (-> fraction-of-day (* 10) (mod 1) (* 360) (+ 180)) "deg)")}}]
   [:div#second-hand
    {:style {:transform (str "rotate(" (-> fraction-of-day (* 1000) (mod 1) (* 360) (+ 180)) "deg)")}}]])

(defn clock-face [fraction-of-day]
  [:div#clock-face
   (->> (range)
        (take 10)
        (map (fn [i]
               [:div.digit
                {:key i
                 :style {:left (str (-> i (* Math/PI) (/ 5) (Math/sin) (* 40) (- 50)) "%")
                         :top (str (-> i (* Math/PI) (/ 5) (Math/cos) (* 40) (+ 50)) "%")}}
                i])))
   (->> (range)
        (take 100)
        (map (fn [i]
               [:div {:key i
                      :className (if (zero? (mod i 10)) "large tick" "tick")
                      :style {:transform (str "rotate(" (* i 3.6) "deg)")}}])))
   [clock-hands fraction-of-day]])

(defn clock-time [fraction-of-day]
  (let [hh (-> fraction-of-day (* 10) (Math/floor))
        mm (-> fraction-of-day (* 10) (- hh) (Math/floor) (* 100))
        ss (-> fraction-of-day (* 100000) (mod 100))
        time-string (goog-string/format "%d:%02d:%02d" hh mm ss)]
    (r/create-class
      {:reagent-render
       (fn [fraction-of-day] [:h1#clock-time time-string])})))

(defn get-fraction-of-day []
  (let [date (js/Date.)
        time-of-day (+ (-> date (.getHours) (* 60) (* 60) (* 1000))
                       (-> date (.getMinutes) (* 60) (* 1000))
                       (-> date (.getSeconds) (* 1000))
                       (-> date (.getMilliseconds)))]
    (/ time-of-day 86400000)))

(defn decimal-clock []
  (let [fraction-of-day (r/atom (get-fraction-of-day))]
    (r/create-class
      {:component-did-mount
       (fn []
         (letfn [(animate []
                   (do (swap! fraction-of-day #(get-fraction-of-day))
                       (.requestAnimationFrame js/window animate)))]
           (.requestAnimationFrame js/window animate)))

       :reagent-render
       (fn [] [:<>
               [clock-face @fraction-of-day]
               [clock-time @fraction-of-day]])})))

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [decimal-clock] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
