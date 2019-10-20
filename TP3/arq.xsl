<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <xsl:result-document href="website/index.html">
            <html>
                <head>
                    <title>Arqueossitios</title>
                    <meta charset="UTF-8"/>
                </head>
                <body bgcolor="#ebfaef">
                    <h1 align="center" style="color:#08540b">Arqueossitios</h1>
                    <ol>
                        <xsl:apply-templates/>
                    </ol>
                </body>
            </html>
        </xsl:result-document>
        <xsl:apply-templates mode="individual"/>
    </xsl:template>
    
    <xsl:template match="ARQELEM" mode="individual">
        <xsl:result-document href="website/{generate-id()}.html">
            <html>
                <head>
                    <title>Arqueossitios: Página Individual</title>
                    <meta charset="UTF-8"/>
                </head>
                <body bgcolor="#ebfaef">
                    <h1 style="color:#08540b"><xsl:value-of select="IDENTI"/></h1>
                    <xsl:apply-templates/>
                    <hr width="40%"/>
                    <address>
                        <a href="index.html#{generate-id()}">Voltar ao índice</a>
                    </address>
                </body>
            </html>
        </xsl:result-document>
    </xsl:template>
    
    <xsl:template match="TIPO">
        <div style="border-top: solid black">
            <b>Tipo: </b><xsl:value-of select="@ASSUNTO"/>
        </div>
    </xsl:template>
    
    <xsl:template match="IDENTI">
        <div>
            <b>Identi: </b><xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="IMAGEM">
        <div>
            <b>Imagem: </b><xsl:value-of select="@NOME"/>
        </div>
    </xsl:template>
    
    <xsl:template match="DESCRI">
        <div>
            <b>Descri: </b><xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="LIGA">
        <a href="{@url}"><xsl:value-of select="."/></a>
    </xsl:template>
    
    <xsl:template match="LUGAR">
        <div>
            <b>Lugar: </b><xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="FREGUE">
        <div>
            <b>Fregue: </b><xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="CODADM">
        <div>
            <b>Codadm: </b><xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="LATITU">
        <div>
            <b>Latitu: </b><xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="LONGIT">
        <div>
            <b>Longit: </b><xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="ACESSO">
        <div>
            <b>Acesso: </b><xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="QUADRO">
        <div>
            <b>Quadro: </b><xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="DESARQ">
        <div>
            <b>Desarq: </b><xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="INTERP">
        <div>
            <b>Interp: </b><xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="DEPOSI">
        <div>
            <b>Deposi: </b><xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="BIBLIO">
        <div>
            <b>Biblio: </b><xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="AUTOR">
        <div>
            <b>Autor: </b><xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="DATA">
        <div>
            <b>Data: </b><xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="CRONO">
        <div>
            <b>Crono: </b><xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="CONCEL">
        <div>
            <b>Concel: </b><xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="ALTITU">
        <div>
            <b>Altitu: </b><xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="TRAARQ">
        <div>
            <b>Traarq: </b><xsl:apply-templates/>
        </div>
    </xsl:template>
       
    <xsl:template match="INTERE">
        <div>
            <b>Intere: </b><xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="ARQELEM">
        <li id="{generate-id()}">
            <a href="{generate-id()}.html"><xsl:value-of select="IDENTI"/></a>
        </li>
    </xsl:template>
    
</xsl:stylesheet>