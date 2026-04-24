<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
	<xsl:template match="/">
		Root element Note we must index persons first in foreach
		<xsl:for-each select="./persons/person/car">
				<xsl:value-of select ="local-name()"/>
				Car: 
				<xsl:value-of select="./color"/><br/>
		</xsl:for-each>
	</xsl:template>
</xsl:stylesheet>
