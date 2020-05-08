<?php

		// Check if country is set otherwise set to default
		if(isset($_GET['country'])){
				$manufacturer=$_GET['country'];
		}else{
				$manufacturer="UNK";
		}

		if($manufacturer=="Ukraine"){
				$data=Array(Array(Array("KrAZ-65055","6x6","330Hp"),Array("KrAZ-6130C4","6x6","330Hp"),Array("KrAZ-5133H2","4x2","330Hp"),Array("KrAZ-7140H6","8x6","400Hp")));
		}else if($manufacturer=="Greece"){
				$data=array(Array(Array("EBIAM MVM","4x4","86Hp")));		
		}else if($manufacturer=="Tatarstan"){
				$data=array(Array(Array("KAMAZ 54115","6x4","240Hp"),Array("KAMAZ 6560","8x8","400Hp"),Array("KAMAZ 5460","8x8","340Hp")));		
		}else if($manufacturer=="Czechoslovakia"){
				$data=array(Array(Array("LIAZ 706 RT","2x4","160Hp"),Array("Tatra T 813","4x4","266Hp"),Array("Tatra T 815","10x10","436Hp")));		
		}else if($manufacturer=="Romania"){
				$data=array(Array(Array("TAF 690","2x4","90Hp")));		
		}else if($manufacturer=="Belarus"){
				$data=array(
					Array(Array("MAZ 535","8x8","375Hp"),Array("MAZ 7310","8x8","525Hp"),Array("MAZ 7907","4x12","1250Hp"),Array("MAZ 6317","6x6","425Hp"),Array("MAZ 6430","6x6","360Hp"),Array("MAZ 5551","4x2","160Hp")),
					Array(Array("Belaz 75600","4x4","3400Hp")));	
		}else if($manufacturer=="USA"){
				$data=array(Array(Array("Oshkosh P-15","8x8","840Hp"),Array("Oshkosh MK-36","6x6","425Hp")));
		}else{
				$data=array();
		}

		header('Content-Type: application/json');
		echo json_encode($data);  
?>



