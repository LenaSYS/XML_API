# Layouts

Data is rarely a strict table. It can be stored in many ways, for example complex nested table, a tree structure or completely unnstructured.
The simplest structure is a strict table, tables exclusively contain tr elements and td elements are only contained in tr elementws.
~~~
<table>
	<tr>
		<td>A</td>
		<td>B</td>
	</tr>
	<tr>
		<td>C</td>
	</tr>
</table>
~~~

If we have more complex data we can place table tags inside td-tags of another table. For example, outer table can be person and inner table can be bank account (each person can have more than one bank account)
Depending on the formatting and content we can decide to make each inner table to have multiple rows, or a single row and multiple columns.
~~~
<table>
	<tr>
		<td>
			<table>
				<tr>
						<td>A</td>
				</tr>
				<tr>
						<td>B</td>
				</tr>
			</table>
		</td>
	</tr>
	<tr>
		<td>C</td>
	</tr>
</table>
~~~

If the data has a nested tree structure (such as employer-employee), we can either use ul/li or use nested div or span elements.
~~~
<ul>
	<li>A</li>
	<li>B</li>
	<li>
		<ul>
			<li>C</li>
			<li>D</li>
		</ul>
	</li>

</ul>
~~~
