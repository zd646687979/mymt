//解决DOM对象失去焦点隐藏 与 点击 的冲突
//参数:对象id
function myBlur(objId){
	window.onmousemove = function(event){
			if($("#"+objId).css("display")=="block"){
				let mybox = $("#"+objId);
				let evt = event ||window.event;
				let mouseLeft = evt.pageX;
				let mouseTop = evt.pageY;
				let myboxmp = mybox.offset();
				let top = myboxmp.top;
				let left = myboxmp.left;
				let width = mybox.width();
				let height = mybox.height();
				console.log(mouseLeft,mouseTop);
				console.log(myboxmp,width);
				this.onmousedown = function(){	
				if(mouseLeft<left || mouseLeft>left+width){
					mybox.css({display:"none"});
				}else if(mouseTop<top || mouseTop>height+top){
					mybox.css({display:"none"});
				}
			}
		}
	}
}
//验证失败时 提示框渐显渐隐
//参数：验证提示框id
//
function check(id){
 	let opacity = 0;
	let changeOp = 0.1;
	let myTimer = setInterval(function(){
		opacity+=changeOp;
		$("#"+id).css({opacity:opacity});
		if(opacity>=1){
			 setTimeout(function(){
				changeOp=-0.1;
				let myTime = setInterval(function(){
					opacity+=changeOp;
					$("#"+id).css({opacity:opacity});
					if(opacity<=0){
						changeOp=0.1;
						window.clearInterval(myTime);
					}
				},50);
			},1000);
			window.clearInterval(myTimer);
		}
	},50);
}
//正则验证函数
//参数：cls 验证类型
//	  str 验证文本
//返回值：布尔型
//   true验证通过
//	 false验证失败
function checkAll(cls,str){
	switch(cls){
		case "username" : if(/^[a-zA-Z]\w{5,11}$/.test(str)){
							return true;
						}else{
							return false
							};break;
		case "userpass" : if(/^\d{6,16}$/.test(str)){
							return true;
						}else{
							return false
							};break;
		case "userMail" : if(/^\w{1,}\@\w{1,}\.\w{1,}$/.test(str)){
							return true;
						}else{
							return false
							};break;
		case "idCard" : if(/^[1-9]\d{16}[0-9Xx]$/.test(str)){
							return true;
						}else{
							return false
							};break;
		case "Phone" : if(/^1[3,4,5,7,8]\d{9}$/.test(str)){
							return true;
						}else{
							return false
							};break;
	}
}