<?php
	header("Content-Type:text/html;charset=utf-8");
	$vipName   = $_REQUEST['vipName'];
	
	//2、数据保存在数据库中
	//1）、建立连接（搭桥）
	$conn = mysql_connect("localhost","root","root");
	
	//2）、选择数据库（找目的地）
	if(!mysql_select_db("mymt",$conn)){
		die("数据库选择失败".mysql_error());
	};
	
	//3）、传输数据（过桥）
	$sqlstr = "select * from shoppingcart where vipName = '".$vipName."'";
	
	$result = mysql_query($sqlstr,$conn);//执行查询的sql语句后，有返回值，返回的是查询结果
		
	if(!$result){
		die("SQL语句执行失败".mysql_error());
	}
			
	//查询列数
	 $query_cols = mysql_num_fields($result);
	 //echo "列数：".$query_cols;
	//查询行数
    $query_num =mysql_num_rows($result);
    //echo "行数：".$query_num;
	
	$str="[";
	//	'{"goodsId":"'.$query_row[1].'",
		
	$query_row = mysql_fetch_array($result);//游标下移,拿出结果集中的某一行，返回值是拿到的行；
	while($query_row){
		$str = $str.'{"goodsId":"'.$query_row[1].'",
					"goodsName":"'.$query_row[4].'",
					"goodsPrice":"'.$query_row[5].'",
					"goodsCount":"'.$query_row[2].'",
					"goodsImgHref":"'.$query_row[3].'"
					}';	
		
		
		$query_row = mysql_fetch_array($result);
		if($query_row){
			$str = $str.",";
		}
	}
	$str = $str."]";
	//4、关闭数据库
	mysql_close($conn);
	
	//3、给客户端返回商品的json数组！
	echo $str;
?>
