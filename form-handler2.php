<?php
/**
 * File Name: form-handler.php
 *
 * Process contact form to send mail
 *
 */
   
   ini_set( 'display_errors', 1 );
   error_reporting( E_ALL );
   
   
   // Allow from any origin
	if(isset($_SERVER["HTTP_ORIGIN"]))
	{
		// You can decide if the origin in $_SERVER['HTTP_ORIGIN'] is something you want to allow, or as we do here, just allow all
		header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
	}
	else
	{
		//No HTTP_ORIGIN set, so we allow any. You can disallow if needed here
		header("Access-Control-Allow-Origin: *");
	}
	
	header("Access-Control-Allow-Credentials: true");
	header("Access-Control-Max-Age: 600");    // cache for 10 minutes
	
	if($_SERVER["REQUEST_METHOD"] == "OPTIONS")
	{
		if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_METHOD"]))
			header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT"); //Make sure you remove those you do not want to support
	
		if (isset($_SERVER["HTTP_ACCESS_CONTROL_REQUEST_HEADERS"]))
			header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
	
		//Just exit with 200 OK with the above headers for OPTIONS method
		exit(0);
	}
   
if($_POST)
{
   
   $from = "info@devandainfotech.com";
   if(isset($_POST['username']))
   {
        $name = filter_var( $_POST['username'], FILTER_SANITIZE_STRING );
   }else
   {
       $name = '';
   }
   if(isset($_POST['email']))
   {
        $to = filter_var( $_POST['email'], FILTER_SANITIZE_EMAIL );
   }else
   {
       $to = '';
   }
   if(isset($_POST['phone']))
   {
       $phone = filter_var( $_POST['phone'], FILTER_SANITIZE_STRING );
   }else
   {
       $phone = '';
   }
   if(isset($_POST['subject']))
   {
       $subject = filter_var( $_POST['subject'], FILTER_SANITIZE_STRING );
   }else
   {
       $subject = '';
   }
   if(isset($_POST['message']))
   {
       $message = filter_var( $_POST['message'], FILTER_SANITIZE_STRING );
   }else
   {
       $message = '';
   }
      
    
    $email_body = "You have Received a message from: " . $name . " \n";
	
	$email_body .= "Subject: " . $subject . " \n";
	
	$email_body .= "Phone: " . $phone . " \n";
	
	$email_body .= "Message: " . $message . " \n";
	
	
   // The content-type header must be set when sending HTML email
   $headers = "MIME-Version: 1.0" . "\r\n";
   $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
   $headers = "From:" . $from;
   
   $sent = mail($to,$subject,$email_body, $headers);
   
   if($sent) {
       echo json_encode(array(
            'success' => true,
            'status' => "Submitted Successfully!",
            'message' => "Message Sent Successfully!"
        ));
   } else {
      echo json_encode(array(
                'success' => false,
                 'status' => "Server Error:  mail method failed!",
                'message' => "Server Error:  mail method failed!"
            )
        );
   }
}else
{
     echo json_encode(array(
            'success' => false,
            'status' => "Invalid Request !",
            'message' => "Invalid Request !"
        )
    );
}

die;
?>