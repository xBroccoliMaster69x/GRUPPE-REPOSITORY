// WINDOW RESIZING - HEADER CSS & PAGE CONTENT CSS
// STATUS: DONE
// NEED HELP: -
/* COMMENT: Seksjonen tilpasser utseendet til "header" slik at den alltid er synlig, selv om brukeren endrer størrelsen på skjermen.
*/

    // Lager en tom variabel som brukes senere
    var headerHight;

    // Starter variabelnavnet med HTML for å vise at det er et HTML-element
    var HTMLheader = document.getElementById("header"); 
    var HTMLpageName = document.getElementById("pageName");
    var HTMLlogo = document.getElementById("logo");
    var HTMLgroupName = document.getElementById("groupName");
    var HTMLnavigationMenu = document.getElementById("navigationMenu");
    var HTMLpage = document.getElementById("page");

    // Henter inn iframe-elementene med ClassName - det blir et array med 4 elementer
    var HTMLPageContents = document.getElementsByClassName("PageContents");

    // Sjekker når størrelsen på vinduet blir endra og kjører funksjonen "ResizeHeader" og "ResizePage"
    window.onresize = function() {ResizeHeader(); ResizePage();}

    // Funksjonen inneholder 4 forskjellige stadier en skjerm kan ha (bredde) og endrer de ulike elementene i "header" ved hjelp av CSS, slik at de alltid er synlige
    function ResizeHeader ()
    {
        if (window.innerWidth < 560)
        {
            headerHight = 125;
            HTMLheader.style.height = headerHight + "px";

            HTMLpageName.style.marginTop = "80px";
            HTMLpageName.style.position = "relative";
            HTMLpageName.style.textAlign = "center";
            HTMLpageName.style.marginRight = "0px";

            HTMLlogo.style.marginLeft = "0px";

            HTMLgroupName.hidden = false;
            HTMLgroupName.style.marginLeft = "195px";

            HTMLnavigationMenu.style.marginTop = "125px";
            HTMLnavigationMenu.style.marginRight = (window.innerWidth/2)-82 + "px";
            HTMLnavigationMenu.style.width = "150px";

            HTMLpage.style.marginTop = "125px";
        }
        else if (window.innerWidth < 1175)
        {
            headerHight = 150;
            HTMLheader.style.height = headerHight + "px";

            HTMLpageName.style.marginTop = "35px";
            HTMLpageName.style.position = "absolute";
            HTMLpageName.style.right = "0";
            HTMLpageName.style.marginRight = "25px";

            HTMLlogo.style.marginLeft = "25px";

            HTMLgroupName.hidden = false;
            HTMLgroupName.style.marginLeft = "225px";

            HTMLnavigationMenu.style.marginTop = "100px";
            HTMLnavigationMenu.style.marginRight = (window.innerWidth/2)-237 + "px";
            HTMLnavigationMenu.style.width = "auto";

            HTMLpage.style.marginTop = "150px";
        }
        else
        {
            headerHight = 100;
            HTMLheader.style.height = headerHight + "px";

            HTMLpageName.style.marginTop = "35px";
            HTMLpageName.style.position = "relative";
            HTMLpageName.style.textAlign = "center";
            HTMLpageName.style.marginRight = "0px";

            HTMLlogo.style.marginLeft = "25px";

            HTMLgroupName.hidden = false;
            HTMLgroupName.style.marginLeft = "225px";

            HTMLnavigationMenu.style.marginTop = "40px";
            HTMLnavigationMenu.style.marginRight = "20px";
            HTMLnavigationMenu.style.width = "auto";

            HTMLpage.style.marginTop = "100px";
        }
    }

    // Funksjonen kjører gjennom arrayet HTMLPageContents og endrer høydem på de 4 elementene til høyden på vinduet - høyden på header-en
    function ResizePage ()
    {
        for (let i = 0; i < HTMLPageContents.length; i++)
        {
            HTMLPageContents[i].style.height = window.innerHeight-headerHight + "px";
        }
    }

    // Kaller funksjonene ved oppstart
    ResizeHeader();
    ResizePage();