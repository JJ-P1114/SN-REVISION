<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $answer = "";
    $correct = false;

    if (isset($_POST['math_answer'])) {
        $answer = strtolower(trim($_POST['math_answer']));
        $correct = ($answer === "fonction quadratique est une fonction polynomiale de degré 2");
    } elseif (isset($_POST['science_answer'])) {
        $answer = strtolower(trim($_POST['science_answer']));
        $correct = ($answer === "h2o");
    } elseif (isset($_POST['francais_answer'])) {
        $answer = strtolower(trim($_POST['francais_answer']));
        $correct = ($answer === "verbe non conjugué");
    } elseif (isset($_POST['history_answer'])) {
        $answer = strtolower(trim($_POST['history_answer']));
        $correct = ($answer === "1789");
    }

    echo $correct ? "Bonne réponse !" : "Mauvaise réponse, essayez encore.";
}
?>
