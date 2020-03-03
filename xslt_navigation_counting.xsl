<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
 
  <xsl:template match="/">
		FOOO!
		<table border='1'>
		<xsl:for-each select="//person">
				<tr>
				
				<td><xsl:value-of select="./name"/></td>
				<td><xsl:value-of select="@shoesize"/></td>

				<td><xsl:value-of select="count(./address)"/> addresses</td>						
				<td><xsl:value-of select="count(./car)"/> cars</td>
					
				</tr>
		</xsl:for-each>
		</table>
  </xsl:template>
 
</xsl:stylesheet>
 