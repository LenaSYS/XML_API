<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
 
  <xsl:template match="/">
		<html>
		<body>
		<table border='1'>
		<xsl:for-each select="//person">
			
				<xsl:text disable-output-escaping="yes">&lt;tr style=&quot;</xsl:text>
				<xsl:choose>
				<xsl:when test="@shoesize>51">
				background:#def;
				</xsl:when>
				<xsl:otherwise>
				background:#fed;
				</xsl:otherwise>					
				</xsl:choose>						
				<xsl:text disable-output-escaping="yes">&quot;&gt;</xsl:text>

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

						<tr>
						<td>
						<xsl:value-of select="./@lpno"/>
						</td>
						<td>
						<xsl:text disable-output-escaping="yes">&lt;div style=&quot;width:20px;height:20px;background:</xsl:text>
						<xsl:value-of select="./color"/>	
						<xsl:text	disable-output-escaping="yes">&quot; &gt;&lt;/div&gt;</xsl:text>
						
						</td>
						</tr>


				</xsl:for-each>
				</table>
				</td>
					
				<xsl:text disable-output-escaping="yes">&lt;/tr&gt;</xsl:text>			
		</xsl:for-each>
		</table>
		</body>
		</html>
  </xsl:template>
 
</xsl:stylesheet>
 