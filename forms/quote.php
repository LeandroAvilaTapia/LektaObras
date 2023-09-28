<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    // Destinatario del correo
    $to = "leandroriver95@gmail.com";

    // Asunto del correo
    $subject = "Consulta de $name";

    // Mensaje del correo
    $email_message = "Nombre: $name\n";
    $email_message .= "Email: $email\n";
    $email_message .= "Teléfono: $phone\n";
    $email_message .= "Mensaje:\n$message";

    // Cabeceras del correo
    $headers = "From: $email";

    // Envía el correo
    if (mail($to, $subject, $email_message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
} else {
    echo "error";
}
?>
