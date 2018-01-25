<?php
	header("content-type","text/html;charset=utf-8");
	//获取数据
	$username = $_GET["username"];
	//1.链接数据库
	$conn = mysql_connect("localhost","root","root");
	//2.选择数据库
	mysql_select_db("mymt",$conn);
	//3.判断是否已被注册
	$sqlStr = "select * from userinfo where username='".$username."'";
	$result =mysql_query($sqlStr,$conn);
	//行数
	$rows = mysql_num_rows($result);
	
	mysql_close($conn);
	
	echo $rows;
	
	
?>