<?php
//建立php与数据库服务器连接,并返回连接对象
$conn=@mysql_connect("localhost","root","") or die("db connect error!");
//切换到指定数据库wz21
mysql_select_db("wz21",$conn);
//设置支持中文
mysql_query("set names utf8");

?>