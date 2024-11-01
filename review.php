<?php
$file = 'notes.json';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $note = $_POST['note'];

    if (!empty($note)) {
        $notes = file_exists($file) ? json_decode(file_get_contents($file), true) : [];
        $notes[] = $note;
        file_put_contents($file, json_encode($notes));
    }

    header("Location: index.html");
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($file)) {
        $notes = json_decode(file_get_contents($file), true);
    } else {
        $notes = [];
    }

    echo json_encode(['notes' => $notes]);
}
?>
