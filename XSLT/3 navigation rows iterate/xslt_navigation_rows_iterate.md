# Overview
This example shows how we can make use of navigation and foreach in XSLT to make a row layout.

# Initiation
All XSLT uses the same Initiation code that loads the xslt file from PHP

# XSLT Code

We handle each new element with a foreach-statement, and create a row for each element.


Attributes are in this case handled by iterating over all attributes. This requires us to surrender control over which attribute that appears in which order.
We do however need prior knowledge about which attributes that are present in each element.

~~~
<xsl:for-each select="./@*">
		<td><xsl:value-of select="."/></td>
</xsl:for-each>
~~~

As can be seen in this case we can also iterate over all child elements in order. The advantage is that we preserve the ordering between cars and addresses this is not suitable if we want all addresses to appear first, followed by all cars.

~~~
<xsl:for-each select="./*">
		<tr>
				<td><xsl:value-of select="."/></td>
				<xsl:for-each select="./@*">
						<td><xsl:value-of select="."/></td>
				</xsl:for-each>
		</tr>	
</xsl:for-each>
~~~
				
