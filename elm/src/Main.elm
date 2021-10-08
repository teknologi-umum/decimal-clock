module Main exposing (..)

import Array
import Browser
import Html exposing (Attribute, Html, div)
import Html.Attributes
import Task
import Time


type alias Model =
    { zone : Time.Zone
    , time : Time.Posix
    , decimalTime : Int
    , fractionOfDay : Float
    }


ticks : List (Html msg)
ticks =
    Array.initialize 100 identity
        |> Array.map
            (\i ->
                div
                    [ Html.Attributes.class <|
                        if modBy 10 i == 0 then
                            "large tick"

                        else
                            "tick"
                    , styleRotate (toFloat i * 3.6)
                    ]
                    [ Html.text "" ]
            )
        |> Array.toList


digits : List (Html msg)
digits =
    Array.initialize 10 identity
        |> Array.map
            (\i ->
                div
                    [ Html.Attributes.class "digit"
                    , Html.Attributes.style "left" <| String.fromFloat (50 - (sin ((pi * toFloat i) / 5) * 40)) ++ "%"
                    , Html.Attributes.style "top" <| String.fromFloat (50 + (cos ((pi * toFloat i) / 5) * 40)) ++ "%"
                    ]
                    [ Html.text (String.fromInt i) ]
            )
        |> Array.toList


hand : String -> Float -> Html msg
hand name rotation =
    div [ Html.Attributes.id name, styleRotate rotation ] []


clockFace : Float -> Html msg
clockFace fractionOfDay =
    div [ Html.Attributes.id "clock-face" ] <|
        digits
            ++ ticks
            ++ [ hand "short-hand" (fractionOfDay * 360 + 180)
               , hand "long-hand" ((modByFloat 1.0 fractionOfDay * 10) * 360 + 180)
               , hand "second-hand" ((modByFloat 1.0 fractionOfDay * 1000) * 360 + 180)
               ]


view : Model -> Browser.Document msg
view { zone, time, decimalTime, fractionOfDay } =
    let
        title =
            "Decimal Clock"
    in
    Browser.Document title <|
        [ Html.h2 [] [ Html.text title ]
        , clockFace fractionOfDay
        , Html.h1 [ Html.Attributes.id "clock-time" ] [ Html.text (decimalTimeToString fractionOfDay) ]
        ]


init : {} -> ( Model, Cmd Msg )
init _ =
    ( Model Time.utc (Time.millisToPosix 0) 0 0, Task.perform AdjustTimeZone Time.here )


decimalTimeToString : Float -> String
decimalTimeToString fractionOfDay =
    [ floor (fractionOfDay * 10)
    , floor (modByFloat 100.0 (fractionOfDay * 1000))
    , floor (modByFloat 100.0 (fractionOfDay * 100000))
    ]
        |> List.map (\num -> String.padLeft 2 '0' <| String.fromInt num)
        |> List.intersperse ":"
        |> List.foldr (++) ""


type Msg
    = Tick Time.Posix
    | AdjustTimeZone Time.Zone


update : Msg -> Model -> ( Model, Cmd msg )
update msg model =
    case msg of
        Tick newTime ->
            let
                dTime =
                    ((Time.toHour model.zone model.time * 3600)
                        + (Time.toMinute model.zone model.time * 60)
                        + Time.toSecond model.zone model.time
                    )
                        * 1000
                        + Time.toMillis model.zone model.time
            in
            ( { model
                | time = newTime
                , decimalTime = dTime
                , fractionOfDay = toFloat dTime / 86400000
              }
            , Cmd.none
            )

        AdjustTimeZone newZone ->
            ( { model | zone = newZone }, Cmd.none )


main =
    Browser.document
        { init = init
        , view = view
        , update = update
        , subscriptions = \_ -> Time.every 1 Tick
        }


styleRotate : Float -> Attribute msg
styleRotate rotation =
    Html.Attributes.style "transform" <| "rotate(" ++ String.fromFloat rotation ++ "deg)"


modByFloat : Float -> Float -> Float
modByFloat modulus value =
    value - modulus * toFloat (floor (value / modulus))
