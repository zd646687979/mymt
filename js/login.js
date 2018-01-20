//
//文本框关闭图标函数
//
function txtClose(closeId,domId,nextId){
	$("#"+domId).parent().on("keyup focus","#"+domId,function(){
		let user = document.getElementById(domId);
		let close = document.getElementById(closeId);
		if(user.value==""){
			close.style.display ="none" ;
		}else{
			close.style.display ="block" ;
		}
		myBlur(closeId);
	});
	if(arguments.length>2){
		$("#"+domId).parent().on("click","#"+closeId,function(){
		document.getElementById(domId).value="";
		document.getElementById(nextId).value="";
		document.getElementById(domId).focus();
		document.getElementById(closeId).style.display ="none" ;
		return;
	});
	}
	$("#"+domId).parent().on("click","#"+closeId,function(){
		document.getElementById(domId).value="";
		document.getElementById(domId).focus();
		document.getElementById(closeId).style.display ="none" ;
	});
}

$(function(){
	txtClose("usernameClose","username","userpass");
	txtClose("userpassClose","userpass");
//密码显示与隐藏
	$("#usereyes").toggle(function(){
		$("#userpass").prop({"type":"text"});
		$(this).css({opacity:0.5});
	},
	function(){
		$("#userpass").prop({"type":"password"});
		$(this).css({opacity:0.2});
	})
//表单验证提示框
$("#suBtn").parent().on("click","#suBtn",function(){
	var nameStr = $("#username")[0].value;
	var passStr = $("#userpass")[0].value;
	if(!checkAll("Phone",nameStr)){
		if(nameStr==""){
			check("formChecked");
			$("#formChecked")[0].innerHTML = "请输入手机号码！";
			return false;
		}
		check("formChecked");
		$("#formChecked")[0].innerHTML = "请输入正确的手机号码！";
		return false;
	}
	if(!checkAll("userpass",passStr)){
		if(passStr==""){
			check("formChecked");
			$("#formChecked")[0].innerHTML = "请输入密码！";
			return false;
		}
		check("formChecked");
		$("#formChecked")[0].innerHTML = "请输入6-16位密码！";
		return false;
	}
	$("form").submit();
})
});
