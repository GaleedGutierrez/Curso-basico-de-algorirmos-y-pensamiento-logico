<?php
function placesRecomendation($condition = "", $question = "")
{
    $weather = array
    (
        "Bogota" => "cold",
        "Monteria" => "hot",
        "Medellin" => "mild"
    );

    $ubication = array
    (
        "Guajira" => "north",
        "Leticia" => "south",
        "Santander" => "east",
        "Antioquia" => "west"
    );

    $tourism = array
    (
        "Santa Marta" => "sea",
        "Villavicencio" => "plains",
        "RioHacha" => "desert",
        "Quindio" => "valley"
    );

    switch ($condition) {
        case "weather":
            $search = $weacher;
            break;
        case "ubication":
            $search = $ubication;
            break;
        case "tourism":
            $search = $tourism;
            break;
        default:
            echo "Welcome to Colombia.";
            break;
    }
    echo "The perfect place for you is".array_search($question, $search);
}

placesRecomendation("ubication", "south");


