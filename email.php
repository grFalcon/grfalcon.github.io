<?php
if(!isset($_POST["message"]))
	{
	header("Location:index.html");
	exit;
	}
$url="email.php";
require_once dirname(__FILE__).'/wizard/class/menu.class.php';
require_once dirname(__FILE__).'/wizard/class/cmspage.class.php';
require_once dirname(__FILE__).'/wizard/class/email.page.class.php';
require_once dirname(__FILE__).'/wizard/class/simple.page.class.php';



if(isset($_SERVER["HTTP_REFERER"]))
	{
	$host=$_SERVER["HTTP_HOST"];
	$host=preg_replace("/\./","\\.",$host);
	$re="/$host/i";
	if (preg_match($re,$_SERVER["HTTP_REFERER"]))
		{

		$subject=convert_cyr_string("��������� � ����� �������","w","k");
		$message=message();

		$to="Ruslan <roxman@3g.ua>";
		$headers =
"MIME-Version: 1.0
Content-type: text/html; charset=koi8-u
To: $to 
From: Sender <sender@datex.lviv.ua>";
			$result=mail($to, $subject, $message, $headers,'-fsender@datex.lviv.ua');



		$lng=(int)$_POST["lng"];
		if ($result==false)
			{
			switch($lng)
				{
				case 1:
					$content="<h1 style=\"color:red\">������ �� �������� ����� ������� �� ������</h1>";
					break;
				case 2:
					$content="<h1 style=\"color:red\">Your message is not sent: server error</h1>";
					break;
				default:
					$content="<h1 style=\"color:red\">Your message is not sent: server error</h1>";
					break;			
				}
			}
		else
			{
			switch($lng)
				{
				case 1:
					$content="<h1>������ ������ ��������</h1>";
					break;
				case 2:
					$content="<h1>Your message was sent successfully</h1>";
					break;
				default:
					$content="<h1>Your message was sent successfully</h1>";
					break;			
				}

			}
		
		$p=new simple();
		$p->lng=$_POST["lng"];
		$p->content=$content;
		$p->css="default.css";
		$p->base="";
		$p->set_img_dir();
		print $p->html();

		}
	}

//=========================================================================

function message()
	{
	$message ="
		<html>
		<head>
		  <title>��������� � ����� �������</title>
		</head>
		<body>
		  <p>��������� � �����!</p>
		  <table border=\"1\">
		";

		$re="/[a-z�-�0-9]/i";
		if(!preg_match($re,$_POST["fio"]))
			{
			$message.="<tr><td colspan=\"2\">�� ������������</td></tr>";
			}
		else
			{
			$message.="<tr><td>���</td><td>".$_POST["fio"]."</td></tr>";
			}

		$message.="<tr><td>Email</td><td>".$_POST["email"]."</td></tr>";

		$phrases=email::ukr();
		$subjects=array
			(
			 "�� ������"
			,$phrases[5]
			,$phrases[6]
			,$phrases[7]
			);
		$subj=$_POST["subj"];
		settype($subj,"int");

		$message.="<tr><td>���� ���������</td><td>".$subjects[$subj]."</td></tr>";


		$message.="<td>���������</td><td>".$_POST["message"]."</td></tr><tr>";


			
		 $message.=" </table>
		</body>
		</html>
		";

		$message=convert_cyr_string($message,"w","k");

		return $message;

	}

?>