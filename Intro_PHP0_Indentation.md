# Indentation 

In nearly all programming languages indentation improves the human readability of code. This course follows the K&amp;R indentation standard https://en.wikipedia.org/wiki/Indentation_style.

If the indentation is incorrect, the programmer is much more likely to misunderstand the code. The rules for programming languages are quite simple.

* Any code in a block that is executed the same number of times as other code in the same block has the same number of indentations
* Each new block (if, foreach, else, function etc.) is indented one step to the right 
* When we end a block we indent one step to the left
~~~
if(){
		// This code is executed the same number of times as the row below
		// The number of executions is controlled by the if statement in this case
		foreach(){
				// Since this code is repeated through the foreach we indent one step to the right
		}
}else{
		// This indentation is the same number of characters as for the if-statement
}
~~~
# Indentation and html using echo in php

In php the echo statement generates new html code. If we echo the ***start*** of a tag we must also echo the ***end*** of the tag within the ***same*** block at the same level.
~~~
if(){
		echo "<div>";
		
		if(){
				// We cannot end the div here since it is not at same level
				echo "<span>";
				
				// Any other code including blocks of code
				// Both start of span tag and end of span tag must be at same indentation level
				ecoh "</span>";
		}
		
		// We cannot end the span here since it is not at the same level as the preceding span
		
		// We know that this div must exist and be at same indentation level as the earlier div
		echo "</div>"
}
~~~