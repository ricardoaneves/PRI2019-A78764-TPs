<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="doc">
        <html>
            <head>
                <title>Arquivo Sonoro: Página Individual</title>
                <meta charset="UTF-8"/>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/> 
            </head>
            <body>
                <div class="w3-container w3-green">
                    <h1 align="center" style="text-shadow:1px 1px 0 #444"><xsl:value-of select="tit"/></h1>
                </div>
                <div class="w3-container">
                    <table class="w3-table w3-striped">
                        <tr>
                            <th>Provincia:</th><td><xsl:value-of select="prov"/></td>
                        </tr>
                        <tr>
                            <th>Local:</th><td><xsl:value-of select="local"/></td>
                        </tr>
                        <tr>
                            <th>Musico:</th><td><xsl:value-of select="musico"/></td>
                        </tr>
                        <tr>
                            <th>Observações:</th><td><xsl:value-of select="obs"/></td>
                        </tr>
                        <tr>
                            <th>Ficheiro:</th><td><xsl:value-of select="file"/></td>
                        </tr>
                        <tr>
                            <th>Tipo:</th><td><xsl:value-of select="file/@t"/></td>
                        </tr>
                        <tr>
                            <th>Duraçao:</th><td><xsl:value-of select="duracao"/></td>
                    </tr>
                    </table>
                <hr width="40%"/>
                </div>
            </body>
        </html>
    </xsl:template>
    
</xsl:stylesheet>