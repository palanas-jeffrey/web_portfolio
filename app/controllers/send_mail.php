<?php 

session_start();

require "../../vendor/autoload.php";


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;



$name = $_POST['name'];
$email = $_POST['email']; 
$topic = $_POST['topic'];
$contact = $_POST['contact'];
$message = $_POST['message'];

//=====================



	$mail = new PHPMailer(true); 



	$staff_email = 'jeff.webporfolio77@gmail.com';
	$customer_email = $email;          //
	$subject = 'Mail Notification From Jeff Porfolio';
	$body = '<div style="text-transform:uppercase";>
	<h3>"Message from Portfolio"</h3>
	</div>'
	."<div>Name: $name</div>"
	."<div>Email: $email</div>"
	."<div>Contact: $contact</div>"
	."<div>Topic: $topic</div>"
	."<div>Message: $message</div>";
	try {
	 
	    $mail->SMTPDebug = 4;                                 
	    $mail->isSMTP();                                     
	    $mail->Host = 'smtp.gmail.com';                       
	    $mail->SMTPAuth = true;                               
	    $mail->Username = $staff_email;                       
	    $mail->Password = '77Softeng99';                    
	    $mail->SMTPSecure = 'tls';                            
	    $mail->Port = 587;                                   

	
	    $mail->setFrom($staff_email, 'jeff.webporfolio77@gmail.com');
	    $mail->addAddress('palanas.jeffrey@gmail.com');  


	    $mail->isHTML(true); 
	    $mail->Subject = $subject;
	    $mail->Body = $body;

	    
	    header('location: ../../index.php');
	
	    $mail->send();

	} catch (Exception $e) {
	    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
	}



 ?>