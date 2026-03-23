# Overview
This example declares an array and then prints each element in the array

## Array Declaration
Arrays are declared using the array function. The simplest form of array declaration uses the array keyword and then declares each element. The elements are separated using commas. 
~~~
// Create an array called $arr and add one element to $arr
$arr1=array();
array_push($arr1,"Leif");

// Create an array called $arr2 with two elements and add a third element
$arr2=array("Leif", "Ulla");
array_push($arr2,"Kjell");
~~~

## Foreach statement
The ****foreach**** statement works mostly like a ****for**** statement in other programming languages. Foreach can however iterate over an array without knowing the number of elements. The code block inside the foreach statement will be executed once for each element in the array.

In this example, inside the foreach statement we increase the value of a counter variable, $i, and for every array element returned as $value we print the counter and then the contents of the array element found in $value.
~~~
$arr=array("one","two","three");
  
$i=0;
foreach ($arr as $value) {
    $i++;
    echo $i." ".$value."<br>";
}
~~~

## Print_r function
As can be seen in the example it is not possible to print the contents of an array using the echo statement. It is therefore necessary to use the foreach statement if we want to present the contents of an array using the echo statement.

The print_r statement is a simple function for printing the contents of an array without resorting to the foreach statement. Print_r is often used for debugging purposes. 
~~~
$arr=array("one","two","three");

// You cannot print an array directly, that is, the following is not possible:
echo $arr;
  
// Loop through $arr and print each element on a separate line
foreach ($arr as $value) {
    echo $value."<br>";
}

// Built-in php function that prints the content of an array
// This function is mostly used for debugging purposes
print_r($arr);
~~~
