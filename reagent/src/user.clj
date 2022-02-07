(ns user
  (:require
   [shadow.cljs.devtools.api :as shadow]
   [ring.middleware.resource :refer [wrap-resource]]))

(def app (wrap-resource identity "public"))

(defn cljs []
  (shadow/repl :app))
