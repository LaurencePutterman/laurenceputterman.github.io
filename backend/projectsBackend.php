<?php
   $db = new mysqli('localhost','root','','personal_site');
   $query = "select Title,ShortDesc,LongDesc,ImgURL from projects";
    $result = $db->query($query);
    $arr = array();
 	$rows = $result->num_rows;
	for ($i = 0; $i < $rows; $i++){
		$row = $result->fetch_array();
		$arr[$i] = array("Title"=>$row['Title'],"ShortDesc"=>$row['ShortDesc'],"LongDesc"=>$row['LongDesc'],"ImgURL"=>$row['ImgURL']);
	}
	echo json_encode($arr);
	$db->close();