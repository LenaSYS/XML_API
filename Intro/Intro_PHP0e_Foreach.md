# Overview
This example declares an array using key and value pairs. This allows us to rapidly find a value in the array by using the key. This type of array is called an ****associative array****.

## Array Declaration
Arrays are declared using the array function. When declaring keys we declare each element using first the key, followed by => and then the value.

## Foreach statement
The foreach statement works mostly like a for statement in other programming languages. If we use the => operator we can access both the key and the value for each element of the array. The code block inside the foreach statement will be executed once for each element in the array.

Each value is returned as $value and each key is returned as $key. The echo statement prints both the value and the key.

## Print_r function
The print_r function prints both the value and the key automatically. If the values of the key or the value are unknown we can still print the array using print_r

## Indexing using the key
We can use the key to index an array using array['key'] which then returns the value indexed by the key. The example prints the value that is indexed by the key with the value 'name'. 