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
//给Div中动态添加商品
//参数：json数组、所有商品父元素ID
		//动态产生div
		//
//{
//			a:[{
//				imgsrc:"img/goods2.jpg",
//				titlestr:"美图遥控器第三代",
//	          address:"child/goods1.html",
//				money:89
//			},
//			{
//				imgsrc:"img/goods2.jpg",
//				titlestr:"MeituFamily 潮趣手机壳",
//	          address:"child/goods2.html",
//				money:79
//		}]
//   }
//		
//		<div>
//  			<a class="content_img" href=""><img src="img/goods1.jpg" alt="" /></a>
//  			<a class="img_title" href="">美图手机电源适配器</a>
//  			<p>RMB 29</p>
//  		</div>
function createGoods(jsonObj,domId){
	//let jsonObj = JSON.parse(obj);
	let str="";
	for(let key in jsonObj){
		for(let i in jsonObj[key]){
			let imgsrc = jsonObj[key][i].imgsrc;
			let titlestr = jsonObj[key][i].titlestr;
			let money= jsonObj[key][i].money;
			let address= jsonObj[key][i].address;
			let addstr="<div><a href='"+address+"'><img src='"+imgsrc+"'></a><a class='img_title'>"+titlestr+"</a><p>RMB "+money+"</p></div>";
			str=str+addstr;
		}
	}
	document.getElementById(domId).innerHTML=str;
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
//
//点击搜索  动画函数
function navSacle(){
	$("#searchBtn").click(function(){
		let lichild1 = $(".lichild1");
		let scaleNum = 1;
		let scaleSpace=0.01;
		let myTimer = setInterval(function(){
		if(scaleNum<=0.7){
			lichild1.css({display:"none"});
			$(".searchDiv").css({display:"block"});
			$("#searchText").focus();
			clearInterval(myTimer);
		}
		lichild1.css({
			transform:"scale("+scaleNum+")"
		})
		scaleNum=scaleNum-scaleSpace;
		},10);
	});
	$("#searchMask,.fastLink,#closeSearch,.searchTitle").click(function(){
		$(".searchDiv").css({display:"none"});
		let lichild1 = $(".lichild1");
		lichild1.css({display:"block"});
		let scaleNum = 0.7;
		let scaleSpace=0.01;
		let myTimer = setInterval(function(){
		if(scaleNum>=1){
			clearInterval(myTimer);
		}
		lichild1.css({
			transform:"scale("+scaleNum+")"
		})
		scaleNum+=scaleSpace;
		},10);
	});
}
//
//点击我的菜单函数
function showMy(){
	$("#nav").on("click","#mineBtn",function(event){
		$("#mybox").css({display:"block"});
	});
	myBlur("mybox");	
}