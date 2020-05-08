# Overview
This example shows how we can make use template matching to make a table column layout.

# Initiation

All XSLT uses the same Initiation code that loads the xslt file from PHP

# XSLT Code

We first generate a table for the root node. After that we generate the <table> tag but before we generate the </table> tag we search for more templates to apply

~~~
<xsl:template match="/">
	<table border='1'>
	<xsl:apply-templates/>
	</table>
</xsl:template>  
~~~

All of the other templates work in the same manner. For person elements in this case we generate a new row. After that we generate the <tr> tag but before we generate the </tr> tag we write the name of the person in a table column and then generate a new td element containing a table for the row elements and then search for more templates to apply. 

~~~
<xsl:template match="person">
	<tr>
	<td><xsl:value-of select="@name"/></td>
	<td>
	<xsl:apply-templates/>
	</td>
	</tr>
</xsl:template>
~~~

In the case of the car we make a new table row and then explicitly write the license plate number and the contents of the color element inside a <td> tag respectively.
No more templates are applied so when the car has been processed the execution returns to the calling template.
	
~~~
<xsl:template match="car">
	<tr>
	<td><xsl:value-of select="@lpno"/></td>		
	<td><xsl:value-of select="./color"/></td>
	</tr>
</xsl:template>
~~~



