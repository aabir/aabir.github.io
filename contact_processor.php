<?php

$data = $_POST;

$contact_name = $data['userName'];
$contact_email = $data['userEmail'];
$message = $data['userMessage'];
$contact_form_recipient = $data['contact_form_recipient'];


$adminEmail = $contact_form_recipient; 

//$domain = $_SERVER["SERVER_NAME"];
$domain = 'My Contact Form';
 
$body = "
Author: $contact_name
Email Address: $contact_email
Message: $message
";
$body = nl2br($body);
//send email to admin

   $message = nl2br($body);
   $subject = "An inquire From $domain";

   //send html mail
   $headers  = 'MIME-Version: 1.0' . "\r\n";
   $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
   $headers .= "From: \"$domain\" <$contact_email>" . "\r\n";
   $headers .= "Reply-To: $contact_email" . "\r\n" ;
   mail($to=$adminEmail, $subject, $message, $headers);
   
    $response = array(
      'success'=>true,
      'msg' => 'your informations has been sent.'
   );

   exit (json_encode($response));