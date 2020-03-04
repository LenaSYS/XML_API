<?xml version="1.0" encoding="utf-8"?>
 
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

	<xsl:template match="/">
		<table border='1'>
    <xsl:apply-templates/>
		</table>
	</xsl:template>	
	
	<xsl:template match="person">
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

    <xsl:apply-templates/>
		
		<xsl:text disable-output-escaping="yes">&lt;/tr&gt;</xsl:text>
	</xsl:template>

	<xsl:template match="car">
		<td><xsl:value-of select="@lpno"/></td>		
		<td><xsl:value-of select="./color"/></td>
  </xsl:template>
 
  <xsl:template match="name">
		<td><xsl:value-of select="."/></td>
  </xsl:template>
 
  <xsl:template match="address">
		<td><xsl:value-of select="./@street"/></td>
  </xsl:template>
 
</xsl:stylesheet>