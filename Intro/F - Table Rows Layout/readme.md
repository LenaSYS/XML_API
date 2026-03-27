# Overview

This example creates a table with a nested inner table. We make a row in the inner table for each row in the outer table.

## Rendering data with table rows

We use nested tables to get an accessible way to display data connected using a 1:N relationship.

Each country has a number of cities. Each country is represented using a row in the outer table, and each city is represented using a row in the inner table. Each piece of information for a city is represented using a column in the inner table.

## Screenshot

We use one foreach statement for countries and one foreach statement for each of the cities in the country.

~~~
		foreach ($arr as $country) {
				echo "<tr>";
				echo "<td>".$country[0]."</td>";
				echo "<td>".$country[1]."</td>";

        ...

				echo "<tr>";
		}
~~~

We use a foreach statement for each city that renders the inner table inside a td tag in the outer table.

~~~
				echo "<td>";
				echo "<table>";
				echo "<tr><th>Name</th><th>Population</th></tr>";
				foreach($country[2] as $city){
						echo "<tr>";
						echo "<td>".$city[0]."</td>";	
						echo "<td>".$city[1]."</td>";
						echo "</tr>";
				}
				echo "</table>";
				echo "</td>";
~~~

## Screenshot

![Screenshot of generated output](screenshot.png)
