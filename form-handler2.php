<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

require 'includes/PHPMailer/src/PHPMailer.php';
require 'includes/PHPMailer/src/SMTP.php';
require 'includes/PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $to = 'ahmedhussein7075@gmail.com';

    $name = isset($_POST['username']) ? htmlspecialchars($_POST['username'], ENT_QUOTES, 'UTF-8') : '';
    $from = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : '';
    $phone = isset($_POST['phone']) ? htmlspecialchars($_POST['phone'], ENT_QUOTES, 'UTF-8') : '';
    $subject = isset($_POST['subject']) ? htmlspecialchars($_POST['subject'], ENT_QUOTES, 'UTF-8') : '';
    $message = isset($_POST['message']) ? htmlspecialchars($_POST['message'], ENT_QUOTES, 'UTF-8') : '';

    if (!$name || !$from || !$phone || !$subject || !$message) {
        echo json_encode([
            'success' => false,
            'status' => 'Validation Error',
            'message' => 'All fields are required!',
        ]);
        exit;
    }

    $mail = new PHPMailer(true);

    try {
        // SMTP Configuration
        $mail->isSMTP();
        $mail->Host = 'business48.web-hosting.com'; // Primary SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'batayeb@jeelalhasoup.com'; // Provided username
        $mail->Password = 'rpkY3^ykH_aU'; // Provided password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // Use SSL
        $mail->Port = 465; // SSL Port

        // Email Headers
        $mail->setFrom('batayeb@jeelalhasoup.com', 'Jeel Alhasoup Website'); // Sender email and name
        $mail->addAddress($to); // Recipient email
        $mail->addReplyTo($from, $name); // User's email for reply

        // Email Content
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = "
            <p><strong>Name:</strong> $name</p>
            <p><strong>Email:</strong> $from</p>
            <p><strong>Phone:</strong> $phone</p>
            <p><strong>Message:</strong></p>
            <p>" . nl2br($message) . "</p>
        ";
        $mail->AltBody = "Name: $name\nEmail: $from\nPhone: $phone\nMessage:\n$message";

        $mail->send();
        echo json_encode([
            'success' => true,
            'status' => 'Submitted Successfully!',
            'message' => 'Message Sent Successfully!',
        ]);
    } catch (Exception $e) {
        echo json_encode([
            'success' => false,
            'status' => 'Mail Error',
            'message' => "Message could not be sent. Error: {$mail->ErrorInfo}",
        ]);
    }
} else {
    echo json_encode([
        'success' => false,
        'status' => 'Invalid Request!',
        'message' => 'Invalid Request Method!',
    ]);
}
