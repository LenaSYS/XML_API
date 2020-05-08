<?php
		header('Content-Type: application/json');
		$data=array(Array("KrAZ","Ukraine"),
								Array("EBIAM","Greece"),
								Array("KaMAZ","Tatarstan"),
								Array("LIAZ","Czechoslovakia"),
								Array("IRUM","Romania"),
								Array("MAZ","Belarus"),
								Array("BelAz","Belarus"),
								Array("Oshkosh","USA"),
								Array("Tatra","Czechoslovakia")
							 );
		echo json_encode($data);  
?>