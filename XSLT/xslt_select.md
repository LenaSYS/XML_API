# Overview
This example shows how we can make use of conditionals and template matching to make a select dropdown.

# Initiation
All XSLT uses the same Initiation code that loads the xslt file from PHP

# XSLT Code
In the first template we generate the form for the select dropdown, but before we end the select element we call apply templates. 

~~~
<xsl:template match="/">
	<form method='post' action='responseXSLT.php'>
	<select name='paper'>
	<xsl:apply-templates/>
	</select>
		<button>Go!</button>
	</form>
</xsl:template>	
~~~

The option tags are handled by writing two distinct elements depending on whether it is a morning or evening edition paper. 
The reason for this is that it is complicated to write data into an attribute in XSLT. It is possible but writing to attributes is much more complicated than writing into elements. This is due to the requirement that the script has to be a valid xml document.

~~~
<xsl:template match="NEWSPAPER[@TYPE='Morning_Edition']">
	<option value='Morning_Edition'>
	<xsl:value-of select="@NAME"/>
	</option>
</xsl:template>
~~~