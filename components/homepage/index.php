<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
header('Access-Control-Allow-Headers: Content-Type');

class EmailController {
    public function sendEmail($postData) {
        $email = $postData['email'];
        $subject = $postData['subject'];
        $message = $postData['message'];

        // Odeslat e-mail
        $to = 'bosksi@gmail.com'; // Zde nahraďte e-mailovou adresu, na kterou se mají e-maily odesílat
        $subject = 'Nová zpráva ze stránky: ' . $subject;
        $emailMessage = 'Nová zpráva ze stránky:<br>';
        $emailMessage .= 'E-mail: ' . $email . '<br>';
        $emailMessage .= 'Zpráva: ' . $message . '<br>';

        $headers = "From: $email\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

        if (mail($to, $subject, $emailMessage, $headers)) {
            header('Content-Type: application/json');
            echo json_encode(['message' => 'E-mail sent']);
        } else {
            header('Content-Type: application/json');
            echo json_encode(['error' => 'Failed to send e-mail']);
        }
    }
}

$controller = new EmailController();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $postData = json_decode(file_get_contents('php://input'), true);
    $controller->sendEmail($postData);
}

?>