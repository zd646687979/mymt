<?php
	header("content-type","text/html;charset=utf-8");
	//一、获取前台数据
	$username = $_POST["username"];
	$userpass = $_POST["userpass"];
	 
	//二、修改数据
	//1.链接数据库
	$conn = mysql_connect("localhost","root","root");
	//2.选择数据库
	mysql_select_db("mymt",$conn);
	//3.判断是否已被注册
	$sqlStr = "select * from userinfo where username='".$username."' and userpass='".$userpass."'";
	$result =mysql_query($sqlStr,$conn);
	//行数
	$rows = mysql_num_rows($result);
	
	//4.关闭数据库
	mysql_close($conn);
	//三、响应
	echo $rows;
?>