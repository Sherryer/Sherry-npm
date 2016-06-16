<?php
header("content-type:text/html;charset=utf-8");
$userName=$_POST['userName'];
//引入conn.php页面
include("conn.php");
//查询指定用户是否存在
//PHP向数据库服务器发送select
$rs=mysql_query("select * from users where userName='$userName'");
//计数一下查询的结果:如果记录条数>0已经存在这个用户
$num=mysql_num_rows($rs);
if($num>0){
	echo "1";
	}else{
		echo "0";
		}
?>