<?xml version="1.0" encoding="utf-8"?>
 
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

	<xsl:template match="/">
		<table>
		<xsl:apply-templates/>
		</table>
	</xsl:template>	
	
	<xsl:template match="NEWSPAPER">
		<tr><td>
		<xsl:value-of select="@NAME"/>
		</td></tr>
	</xsl:template>
 
</xsl:stylesheet>