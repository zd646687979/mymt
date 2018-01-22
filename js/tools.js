//解决DOM对象失去焦点隐藏 与 点击 的冲突
//参数:对象id
function myBlur(objId){
	window.onmousedown = function(event){
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
				if(mouseLeft<left || mouseLeft>left+width){
					mybox.css({display:"none"});
				}else if(mouseTop<top || mouseTop>height+top){
					mybox.css({display:"none"});
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
			let addstr="<div><a href='"+address+"'><img src='"+imgsrc+"'></a><a  href='"+address+"' class='img_title'>"+titlestr+"</a><p>RMB "+money+"</p></div>";
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
//动态创建商品详情轮播图
//参数：图片数组
//    父元素id名（父元素样式为position: relative;
//          overflow: hidden;
//          width: 540px;
//          height: 540px;）
//
	function createLunboArr(imgArr,imgboxId){
		$boxDom = $("#"+imgboxId);
		//创建轮播图盒子
		let $imgBox = $(document.createElement("div"));
		$imgBox.css({
			width:"540px",
			height:"540px",
			position:"absolute"
		});
		$boxDom.append($imgBox);
		//创建豆豆盒子
		let $douBox = $(document.createElement("div"));
		$douBox.css({
			height:"20px",
			position:"absolute",
			bottom:"20px",
			left:"50%",
			transform:"translateX(-50%)",
			"z-index":99
		});
		$boxDom.append($douBox);
		for(let i=0;i<imgArr.length;i++){
		//创建图片
		let $img = $(document.createElement("img"));
		$img.attr({"src":imgArr[i]});
		$img.css({
			width:"540px",
			height:"540px",
			display:"block",
			position:"absolute",
			left:(i*540)+"px"
		});
		$imgBox.append($img);
		//创建豆豆
		let $dou = $(document.createElement("div"));
		$dou.css({
			width:"10px",
			height:"10px",
			float :"left",
			margin:"0 5px",
			"background-color":"#e0e0e0",
			"border-radius":"50%"
		});
		$douBox.append($dou);
		$dou.on("click",function(){
			let space = Math.abs(parseInt($imgBox[0].children[i].style.left));
			let left = (i-1)*540;
			myTimer = setInterval(()=>{
				left+=27;
				if(left>=space){
					clearInterval(myTimer);
				}
				$imgBox.css({left:-1*left});
			},27/space);
	})
		$dou.hover(function(){
			$dou.css({
				width:"12px",
				height:"12px",
				float :"left",
				margin:"0 5px",
				"background-color":"#cfcfcf",
				"border-cadius":"50%"
			});
		},function(){
			$dou.css({
				width:"10px",
				height:"10px",
				"background-color":"#e0e0e0",
			});
		});
	}
}
//动态创建商品详情颜色
//参数：颜色   数组
//    父元素id名
//
function createColorArr(colorArr,colorboxId,changetextId,buyId){
	
			let $buyDom = $("#"+buyId);
		for(let i=0;i<colorArr.length;i++){
			let $changetextDom = $("#"+changetextId);
			let $modify = $changetextDom.next();
			let $boxDom = $("#"+colorboxId);
			let $colorDom = $(document.createElement("p"));
			let startHeight = $boxDom.height();
			let height = startHeight;
			$colorDom.css({
				color: "#333333",
		         float: "left",
		         "font-size": "18px",
		         "box-sizing": "border-box",
		         height:"60px" ,
		         "line-height":"60px" ,
		         width: "290px",
		         margin:"10px 0px  10px 20px",
		         border: "1px solid #cfcfcf",
		         "border-radius": "3px",
		          cursor: "pointer",
		         "border-color":" rgb(207,207,207)",
		         transition: " border-color 0.5s",
		         "text-align":" center"
			});
			$colorDom.append(colorArr[i]);
			$boxDom.append($colorDom);
			$colorDom.hover(function(){
				$colorDom.css({
					"border-color": "rgb(230,40,120)",
         			transition:  "border-color 0.5s"
				});
			},function(){
				$colorDom.css({
					"border-color":" rgb(207,207,207)",
		         transition: " border-color 0.5s",
				});
			});
			
			$colorDom.on("click",function(){
				let space= 8;
				let height = $boxDom.height();
				$changetextDom.html(colorArr[i]);
				$buyDom.attr({display:""});
				$buyDom.css({
					"border-color": "rgb(230,40,120)",
					background: "rgb(230,40,120)",
					color:"#ffffff",
					cursor:"pointer"
				});
				
				let myTime = setInterval(function(){
					if(height<=0){
						clearInterval(myTime);
						return;
					}
					height-=space;
					space-=0.1;
					$boxDom.css({"height":height})
				},10);
			});
			
			$modify.on("click",function(){
				let space= 8;
				let height = $boxDom.height();
				let myTimer = setInterval(function(){
					if(height>=startHeight){
						clearInterval(myTimer);
						return;
					}
					height+=space;
					space-=0.1;
					$boxDom.css({"height":height})
				},10);
			});
		}
		$buyDom.hover(function(){
					$buyDom.css({
						"border-color":" rgb(207,207,207)",
						"background-color": "rgb(207,207,207)",
						transition:"border-color 0.5s,background 0.5s"
					})
					
				},function(){
					$buyDom.css({
						"border-color": "rgb(230,40,120)",
						"background-color": "rgb(230,40,120)",
						transition:  "border-color 0.5s,background 0.5s"
					})
		});
	}