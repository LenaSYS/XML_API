# Overview
This example shows how we can make use of navigation and foreach in XSLT to make a row layout.

# Initiation
All XSLT uses the same Initiation code that loads the xslt file from PHP

# XSLT Code

In XSLT conditional styling is hampered by the requirement that we have to start and end all elements within each parent element.

This means that it is **not** possible to generate two distint <tr> elements in each when statement and matching those with one single </tr> element.

We can either make the full navigation in the wehen and otherwise statements, or as in this case use apply templates to guarantee that the same code is executed for every child element.
 
~~~
  <xsl:template match="person">
    <xsl:choose>
        <xsl:when test="@shoesize>51">
            <tr style="background:#def">
            <xsl:apply-templates/>
            </tr>
        </xsl:when>
        <xsl:otherwise>
            <tr style="background:#dfe">
            <xsl:apply-templates/>
            </tr>
        </xsl:otherwise>          
    </xsl:choose>     
~~~
				
