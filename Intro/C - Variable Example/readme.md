# Overview
This example shows how variables can be printed to the web page using the echo command.

## Simple Echo
The first part of the example shows how variables can be printed using echo. It is possible to mix the printing of variables and strings in any order.

## Mathematical Operators
Variables can be manipulated using mathematical operators. In PHP the most common operators from other programming languages are available for example:
 * Additon: +, ++, +=
 * Subtration: -, --, -= 
 * Multiplication: *, *=
 * Division: /, /= 
 * Modulus: %, %=

~~~
$i+2   // Add 2 to variable $i
$j++   // Increase variable $j by 1 and store the result in $j
$k+=4  // Add 4 to variable $k and store the result in $k
$i-1   // Subtract 2 from variable $i
$j--   // Decrease variable $j by 1 and store the result in $j
$k-=4  // Subtract 4 from variable $k and store the result in $k
$i*2   // Multiply $i by 2
$j*=2  // Multiply $j by 2 and store the result in $j
$i/2   // Divide $i by 2 
$j/=2  // Divide $j by 2 and store the result in $j
$i%4   // $i modulus 4, i.e., integer divide $i by 4
$j%=4  // $i modulus 4, i.e., integer divide $i by 4 and store the result in $j
~~~

## String Addition
The addition operator + does not work for strings. Only number variables can be added.

## String Concatenation
The dot operator . merges (or concatenates) two strings.

## String Echo
Printing of variables inside strings. Simple variables can be printed as part of the text in an echo statement. This is slightly more compact than the example from row 27 but does not work with every kind of variable and does not work well with expressions. 