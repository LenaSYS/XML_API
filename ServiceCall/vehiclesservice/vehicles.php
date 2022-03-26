<?php

		// Check if country is set otherwise set to default
		if(isset($_GET['country'])){
				$manufacturer=$_GET['country'];
		}else{
				$manufacturer="UNK";
		}

		if($manufacturer=="Ukraine"){
			$data=Array(
				Array(
					"KrAZ",
					Array(
						Array("KrAZ-65055","6x4","330Hp","1997-2022","KrAZ65055.png"),
						Array("KrAZ-255","6x6","265Hp","1967-1993","KrAZ255.png"),
				  	Array("KrAZ-260","6x6","330Hp","1979-1993","KrAZ260.png"),
						Array("KrAZ-5233","2x4","330Hp","2008-2022","KrAZ65055.png")
					)
				)
			);
		}else if($manufacturer=="Greece"){
			$data=Array(
				Array(
					"EBIAM",
					Array(
						Array("EBIAM MVM","4x4","86Hp","1979-1984","EBIAM.png")
					)
				)
			);
		}else if($manufacturer=="Tatarstan"){
			$data=Array(
				Array(
					"KAMAZ",
					Array(
						Array("KAMAZ 43101","6x6","240Hp","1981-1995","КамАZ43101.png"),
						Array("KAMAZ 53501","6x6","250Hp","2003-2022","KamAZ53501.png"),
				  	Array("KAMAZ 54115","6×4","250Hp","1995–2011","KamAZ54115.png")
					)
				)
			);			
		}else if($manufacturer=="Czechoslovakia"){
			$data=Array(
				Array(
					"Tatra",
					Array(
				    Array("Tatra T 813","8x8","266Hp","1967-1982","Tatra813.png"),
						Array("Tatra T 815","6x6","436Hp","1983-2022","Tatra815.png")
					)
			  ),
				Array(
					"LIAZ",
					Array(
						Array("LIAZ 706 MT","2x4","160Hp","1969—1990","LIAZMT.png")
			  	)
				)
			);				
		}else if($manufacturer=="Romania"){
			$data=Array(
				Array(
					"Roman",
					Array(			
						Array("Roman 81350","2x4","90Hp","1967-1990","Roman81350.png")
					)
				)
			);		
		}else if($manufacturer=="Belarus"){
			$data=Array(
				Array(
					"MAZ",
					Array(	
						Array("MAZ 5335","2x4","375Hp","1977-1990","MAZ5335.png"),
						Array("MAZ 537","8x8","525Hp","1959-1990","MAZ537.png"),
						Array("MAZ 7907","24x24","1250Hp","1985-1990","MAZ9707.png"),
						Array("MAZ 6317","6x6","330Hp","1990-2022","MAZ6317.png"),
						Array("MAZ 5551","4x2","160Hp","1985-2022","MAZ5551.png")
					)
				),
				Array(
					"BelAZ",
					Array(
						Array("BelAZ-548","4x4","150Hp","1969-1983","BelAZ548.png")
					)
				)
			);
		}else if($manufacturer=="USA"){
			$data=Array(
				Array(
					"Oshkosh",
					Array(
						Array("Oshkosh M1078","6x6","330Hp","1997-2022","OSHKOSHM1078.png"),
				    Array("Oshkosh M1074A1","10x10","600Hp","1993-2022","OSHKOSHM1074A1.png")
					)
				)
			);
		}else{
				$data=array();
		}

		header('Content-Type: application/json');
		echo json_encode($data);  
?>



