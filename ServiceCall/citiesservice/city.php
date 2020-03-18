<?php

		// Check if country is set otherwise set to default
		if(isset($_GET['country'])){
				$country=$_GET['country'];
		}else{
				$country="UNK";
		}

		if($country=="Sweden"){
				$data=array(array("Stockholm",962),array("Gothenburg",572));
		}else if($country=="France"){
				$data=array(array("Paris",2200),array("Lyon",513),array("Toulouse",458),array("Lille",235));		
		}else if($country=="Spain"){
				$data=array(array("Madrid",3180),array("Barcelona",1600),array("Seville",690));		
		}else if($country=="Norway"){
				$data=array(array("Oslo",650));		
		}else{
				$data=array();
		}

		header('Content-Type: application/json');
		echo json_encode($data);  
?>