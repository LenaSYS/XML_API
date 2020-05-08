<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
 
  <xsl:template match="/">
		FOOO!
		<table border='1'>
		<xsl:for-each select="//person">
				<tr>
				
				<td><xsl:value-of select="@name"/></td>
				<td><xsl:value-of select="@shoesize"/></td>
			
				<td>
				<table>
				<xsl:for-each select="./address">
						<tr>
						<td><xsl:value-of select="./@street"/></td>
						</tr>	
				</xsl:for-each>
				</table>
				</td>

				<td>
				<table>
				<xsl:for-each select="./car">
						<tr>
						<td><xsl:value-of select="./@lpno"/></td>
						<td><xsl:value-of select="./color"/></td>
						</tr>
				</xsl:for-each>
				</table>
				</td>
					
				</tr>
		</xsl:for-each>
		</table>
  </xsl:template>
 
</xsl:stylesheet>
 