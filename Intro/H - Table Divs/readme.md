# Overview
This example makes use of div elements instead of table rows.

## Rendering data with div tags
We render using div instead of table tags and table row tags. 

We can use ARIA tags and table styling in css but the creators of html warns us that this approach has less accessibility.

> [!WARNING]
> Many of these widgets are fully supported in modern browsers. Developers should prefer using the correct semantic HTML element over using ARIA, if such an element exists. For instance, native elements have built-in keyboard accessibility, roles and states. However, if you choose to use ARIA, you are responsible for mimicking the equivalent browser behavior in script.

```php
				foreach($country[2] as $city){
						echo "<div role='table' aria-label='Semantic Elements' style='display:table; margin:3px; border:1px dashed lightblue;' >";
						echo "<div role='row' style='display:table-row;' >".$city[0]."</div>";	
						echo "<div role='row' style='display:table-row;' >".$city[0]."</div>";	
 						echo "</div>";
				}
```

## Screenshot

![Screenshot of generated output](screenshot.png)
