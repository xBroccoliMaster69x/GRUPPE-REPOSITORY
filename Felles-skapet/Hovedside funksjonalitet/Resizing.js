/*
    DETTE SCRIPTET TILPASSER INNHOLDET PÅ SIDEN SLIK AT DET ALLTID ER SYNLIG,
    SELV OM BRUKEREN ENDRER STØRRELSEN PÅ SKJERMVINDUET.
*/

    // HENTER INN HTML-ELEMENTENE SOM BLIR TATT I BRUK
    // STARTER VARIABELNAVNENE MED "HTML" FOR Å ILLUSTRERE AT DET ER HTML-ELEMENTER
    var HTMLheader = document.getElementById("header");
    var HTMLlogo = document.getElementById("header__logo");
    var HTMLtitle = document.getElementById("header__title");
    var HTMLgroupName = document.getElementById("header__group-name");
    var HTMLnavigationMenu = document.getElementById("header__navigation-menu");
    var HTMLpage = document.getElementById("page");
    var pageContents = document.getElementById("page").children; // Henter inn iframe-elementene som et array (med 4 elementer)

    var headerHight; // Lager en tom variabel som brukes til å bestemme høyden til "header", og deretter høyden til "page"

    // DENNE FUNKSJONEN VELGER MELLOM 3 FORSKJELLIGE STADIER ER SKJERM KAN HA (BREDDE) OG ENDRER DE ULIKE ELEMENTENE I "HEADER" VED HJELP AV CSS
    function resizeHeader ()
    {
        if (window.innerWidth < 560) // window.innerWidth er en innebygd variabel som måler bredden på skjermen
        {
            headerHight = 125;

            HTMLtitle.style.marginTop = "80px";
            HTMLtitle.style.position = "relative";
            HTMLtitle.style.textAlign = "center";
            HTMLtitle.style.marginRight = "0px";

            HTMLlogo.style.marginLeft = "0px";

            HTMLgroupName.style.marginLeft = "195px";

            HTMLnavigationMenu.style.marginTop = "125px";
            HTMLnavigationMenu.style.marginRight = (window.innerWidth/2)-82 + "px";
            HTMLnavigationMenu.style.width = "150px";

            HTMLpage.style.marginTop = "125px";
        }
        else if (window.innerWidth < 1175)
        {
            headerHight = 150;

            HTMLtitle.style.marginTop = "35px";
            HTMLtitle.style.position = "absolute";
            HTMLtitle.style.right = "0";
            HTMLtitle.style.marginRight = "25px";

            HTMLlogo.style.marginLeft = "25px";

            HTMLgroupName.style.marginLeft = "225px";

            HTMLnavigationMenu.style.marginTop = "100px";
            HTMLnavigationMenu.style.marginRight = (window.innerWidth/2)-237 + "px";
            HTMLnavigationMenu.style.width = "auto";

            HTMLpage.style.marginTop = "150px";
        }
        else // Om skjermen er bredere enn 1175
        {
            headerHight = 100;

            HTMLtitle.style.marginTop = "35px";
            HTMLtitle.style.position = "relative";
            HTMLtitle.style.textAlign = "center";
            HTMLtitle.style.marginRight = "0px";

            HTMLlogo.style.marginLeft = "25px";

            HTMLgroupName.style.marginLeft = "225px";

            HTMLnavigationMenu.style.marginTop = "40px";
            HTMLnavigationMenu.style.marginRight = "20px";
            HTMLnavigationMenu.style.width = "auto";

            HTMLpage.style.marginTop = "100px";
        }

        HTMLheader.style.height = headerHight + "px"; // Endrer høyden på "header" basert på den oppdaterte verdien av variabelen "headerHight" fra "if"-setningene
    }

    // DENNE FUNKSJONEN GÅR GJENNOM ARRAYET "pageContents" OG ENDRER HØYDEN PÅ ALLE DE ELEMENTENE (4) TIL HØYDEN AV VINDUET MINUS (-) HØYDEN TIL "HEADER"
    function resizePage ()
    {
        for (let i = 0; i < pageContents.length; i++)
        {
            pageContents[i].style.height = window.innerHeight-headerHight + "px";
        }
    }

    // DENNE FUNKSJONEN SJEKKER KONSTANT NÅR STØRRELSEN PÅ VINDUET BLIR ENDRET PÅ OG KJØRER DERETTER FUNKSJONENE "resizeHeader" OG "resizePage"
    window.onresize = function() {resizeHeader(); resizePage();}

    // KALLER BEGGE FUNKSJONENE VED OPPSTART SLIK AT SIDESTØRRELSEN ALLTID ER OPPDATERT
    resizeHeader();
    resizePage();