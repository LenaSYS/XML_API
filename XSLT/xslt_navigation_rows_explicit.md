# Overview
This example shows how we can make use of navigation and foreach in XSLT to make a row layout.

# Initiation
All XSLT uses the same Initiation code that loads the xslt file from PHP

# XSLT Code

We handle each new element with a foreach-statement, and create a row for each element.

Attributes are in this case handled by writing the attributes explicitly using value of. This gives us exact control over which attribute that appears in which order.
We do however need prior knowledge about which attributes that are present in each element.

~~~
<xsl:value-of select="@name"/>
~~~

As can be seen in this case we can also explicitly navigate to each element in order. The advantage is that we get explicit control over the ordering, for example we get all address elements before all of the car elements.
However, if we want to preserve the ordering between cars and addresses this is not suitable as all addresses will appear first, followed by all addresses.

~~~
<td>
<table>
<xsl:for-each select="./address">
		<tr>
		<td><xsl:value-of select="./@street"/></td>
		</tr>	
</xsl:for-each>
</table>
</td>
~~~
				
