//验证码
var code;
function createCode(){
	code = new Array();
	var codeLength = 4;
	var checkCode = document.getElementById("checkCode");
	checkCode.value = "B2TU";
	var selectChar = new Array(2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
	for (var i = 0; i < codeLength; i++){
		var charIndex = Math.floor(Math.random()*32);
		code += selectChar[charIndex];
	}
	if (code.length != codeLength){
		createCode();
	}
	checkCode.value = code;
}
createCode();



//注册表单逻辑
window.onload = function(){
var user = document.getElementById("username");
var error = document.querySelector(".error-msg");
var loader = document.querySelector(".action-btn");
var prcode = document.getElementById("precode");
var coderror = document.getElementById("coderror");
var psw = document.getElementById("password");
loader.onclick = function(){
	//用户名
if (user.value == '') {
       error.classList.add("ErrorShow");
       coderror.innerHTML = "您输入的信息不完整！";
   }else{
   	   error.classList.remove("ErrorShow");
   }
   //验证码
if (prcode.value != '') {
     if (prcode.value != checkCode.value) {
	 error.classList.add("ErrorShow");
	 coderror.innerHTML = "您输入的验证码有误！";
	 return false;
    }
}else {
	error.classList.add("ErrorShow");
}
   //密码
if (psw.value != '') {
	  if (!psw.value.match(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/)) {
		  error.classList.add("ErrorShow");
	  coderror.innerHTML = "密码只能由6位以上数字和字母组成！";
	  createCode();
	}
}else{
	  error.classList.add("ErrorShow");
}

var iconclose = document.querySelector(".y-right");
iconclose.onclick = function() {
	  error.classList.remove("ErrorShow");
   }

   if (!error.classList.contains("ErrorShow")) {
   	  doPost();
   }  
 }
}


//ajax发送用户的账号和密码信息
function doPost() {
var userName = document.getElementById("username").value;
var passWord = document.getElementById("password").value;
var xhr = new XMLHttpRequest();
xhr.open("POST","/signin",true);
let data = {
	"username" : userName,
	"password" : passWord
}
xhr.onload = function(){
    var resData = this.responseText;
    window.location.href = "/Selfindex/" + resData;
}
xhr.setRequestHeader("Content-type", "application/json");
xhr.send(JSON.stringify(data));
}