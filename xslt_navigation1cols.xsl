<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
 
  <xsl:template match="/">
		FOOO!
		<table border='1'>
		<xsl:for-each select="//person">
				<tr>

				<xsl:for-each select="./@*">
						<td>
						<xsl:value-of select="."/>
						</td>
				</xsl:for-each>
			
				<xsl:for-each select="./*">
						<xsl:for-each select="./*">							
								<td><xsl:value-of select="."/></td>
						</xsl:for-each>
						<xsl:for-each select="./@*">
								<td><xsl:value-of select="."/></td>
						</xsl:for-each>
				</xsl:for-each>
				
				</tr>
				
		</xsl:for-each>
		</table>
  </xsl:template>
 
</xsl:stylesheet>
 