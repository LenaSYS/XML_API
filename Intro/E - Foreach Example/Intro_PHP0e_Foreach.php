<html>
<body>
<pre>
<?php
   // Nesting arrays: The array $array containing three elements, all of which are arrays
   $array=array(
    array("name" => "Johns Tevens","telno" => "066-1222","address"=>"Narmstreet 31"),
    array("name" => "Sven Levens","telno" => "077-1222","address"=>"Warmstreet 31"),
    array("name" => "Boy Georgios","telno" => "099-7333","address"=>"Dermstreet 31")
   );
  
   // Arrays of arrays can be traversed using a nested foreach
   foreach ($array as $key => $value) {
     foreach ($value as $valuekey => $valuevalue) {
        echo $valuekey." ".$valuevalue."<br>";
       }
   }
   echo "<br>";
  
   // Arrays of arrays can be printed with print_r
   print_r($array);
?>
</pre>
</body>
</html>