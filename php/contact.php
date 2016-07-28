<?php
$field_name = $_POST['c_name'];
$field_email = $_POST['c_email'];
$field_message = $_POST['c_message'];

$mail_to = 'danielpstrong@gmail.com';
$subject = 'Message from a portfolio visitor '.$field_name;

$body_message = 'From: '.$field_name."\n";
$body_message .= 'E-mail: '.$field_email."\n";
$body_message .= 'Message: '.$field_message;

$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";

$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
	<script language="javascript" type="text/javascript">
		alert('Thank you for the message. We will contact you shortly.');
		window.location = 'index.html';
	</script>
<?php
}
else { ?>
	<script language="javascript" type="text/javascript">
		alert('Message failed. Please try again.');
		window.location = 'index.html';
	</script>
<?php
}
?>