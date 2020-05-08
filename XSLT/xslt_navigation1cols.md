# Overview
This example shows how we can make use of navigation and foreach in XSLT to make a column layout.

# Initiation
All XSLT uses the same Initiation code that loads the xslt file from PHP

# XSLT Code

Attributes can be handled by writing the attributes explicitly using value of ~~~<xsl:value-of select="@name"/>~~~ but in this case we iterate over all attributes of a person using foreach.

~~~
<xsl:for-each select="./@*">
		<td>
		<xsl:value-of select="."/>
		</td>
</xsl:for-each>
~~~

If there is more than one element available and we want to maintain the order of elements we do a foreach with an asterisk as the query condition. This way both addresses and cars are iterated without affecting the order.

~~~
<xsl:for-each select="./*">
		<xsl:for-each select="./*">              
				<td><xsl:value-of select="."/></td>
		</xsl:for-each>
		<xsl:for-each select="./@*">
				<td><xsl:value-of select="."/></td>
		</xsl:for-each>
</xsl:for-each>
~~~