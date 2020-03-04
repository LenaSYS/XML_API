<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
 
  <xsl:template match="/">
		<html>
		<body>
		<table border='1'>
		<xsl:for-each select="//person">
				<tr>
				<td>
				<xsl:value-of select="./name"/>
				</td>

				<xsl:for-each select="./@*">
						<td>
						<xsl:value-of select="."/>
						</td>
				</xsl:for-each>
			
				<td>
				<table>
				<xsl:for-each select="./address">
						<tr>
						<td>
						<xsl:value-of select="./@street"/>
						</td>
						</tr>	
				</xsl:for-each>
				</table>
				</td>

				<td>
				<table>
				<xsl:for-each select="./car">

						<xsl:text disable-output-escaping="yes">&lt;tr style=&quot;</xsl:text>
						color:<xsl:value-of select="./color"/>
						<xsl:text disable-output-escaping="yes">&quot; &gt;</xsl:text>
					
						<td>
						<xsl:value-of select="./@lpno"/>
						</td>
						<td>
						<xsl:value-of select="./color"/>
						</td>
					
						<xsl:text disable-output-escaping="yes">&lt;/tr&gt;</xsl:text>
					
				</xsl:for-each>
				</table>
				</td>
					
				</tr>
		</xsl:for-each>
		</table>
		</body>
		</html>
  </xsl:template>
 
</xsl:stylesheet>
 