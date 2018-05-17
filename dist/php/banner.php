<?php
	header('content-type:text/html;charset=utf-8');
	$conn=@mysql_connect("localhost","root",""); 
	if (!$conn) 
	{ 
	    echo "连接 MySQL 失败: ";
	}
	$db_selected=mysql_select_db("robam",$conn);
	mysql_query('SET NAMES UTF8');
	$query='SELECT src FROM banner';
	$result=mysql_query($query);
	$arr=array();
	for($i=0;$i<mysql_num_rows($result);$i++){
    	$arr[$i]=mysql_fetch_row($result);
    }
	echo json_encode($arr);
?>