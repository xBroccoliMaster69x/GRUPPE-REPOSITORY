// NAVIGATION MENU - FUNKSJONALITET
// STATUS: DONE
// NEED HELP: -
/* COMMENT: Seksjonen bytter bakgrunnsfarge på knapper for å visualisere hvilken side du befinner deg på, etter knappetrykk.
    Den åpner også de relevante HTML sidene gjennom iframes.
*/

    var currentPage = "aboutUs"; // Default landing page

    // Starter variabelnavnet med HTML for å vise at det er et HTML-element
    var HTMLbuttonHowWeRoll = document.getElementById("buttonHowWeRoll");
    var HTMLbuttonHWRReport = document.getElementById("buttonHWRReport");
    var HTMLbuttonSyntax = document.getElementById("buttonSyntax");
    var HTMLbuttonAboutUs = document.getElementById("buttonAboutUs");

    var HTMLhowWeRoll = document.getElementById("howWeRoll");
    var HTMLhwrReport = document.getElementById("hwrReport");
    var HTMLsyntax = document.getElementById("syntax");
    var HTMLaboutUs = document.getElementById("aboutUs");

    // Når en knapp blir trykket på bytter variabelen "currentPage" til den respektive siden og funksjonen "UpdateNavigationMenu" blir kjørt
    HTMLbuttonHowWeRoll.onclick = function() {currentPage = "howWeRoll"; UpdateNavigationMenu(); UpdatePageContent();}
    HTMLbuttonHWRReport.onclick = function() {currentPage = "hwrReport"; UpdateNavigationMenu(); UpdatePageContent();}
    HTMLbuttonSyntax.onclick = function() {currentPage = "syntax"; UpdateNavigationMenu(); UpdatePageContent();}
    HTMLbuttonAboutUs.onclick = function() {currentPage = "aboutUs"; UpdateNavigationMenu(); UpdatePageContent();}

    // Funksjonen tester hva som er "currentPage" og bytter bakgrunnsfarge på den respektive knappen
    function UpdateNavigationMenu ()
    {
        if (currentPage == "howWeRoll")
        {
            HTMLbuttonHowWeRoll.style.backgroundColor = "#F40029";
            HTMLbuttonHWRReport.style.backgroundColor = "transparent";
            HTMLbuttonSyntax.style.backgroundColor = "transparent";
            HTMLbuttonAboutUs.style.backgroundColor = "transparent";
        }
        else if (currentPage == "hwrReport")
        {
            HTMLbuttonHowWeRoll.style.backgroundColor = "transparent";
            HTMLbuttonHWRReport.style.backgroundColor = "#F40029";
            HTMLbuttonSyntax.style.backgroundColor = "transparent";
            HTMLbuttonAboutUs.style.backgroundColor = "transparent";
        }
        else if (currentPage == "syntax")
        {
            HTMLbuttonHowWeRoll.style.backgroundColor = "transparent";
            HTMLbuttonHWRReport.style.backgroundColor = "transparent";
            HTMLbuttonSyntax.style.backgroundColor = "#F40029";
            HTMLbuttonAboutUs.style.backgroundColor = "transparent";
        }
        else if (currentPage == "aboutUs")
        {
            HTMLbuttonHowWeRoll.style.backgroundColor = "transparent";
            HTMLbuttonHWRReport.style.backgroundColor = "transparent";
            HTMLbuttonSyntax.style.backgroundColor = "transparent";
            HTMLbuttonAboutUs.style.backgroundColor = "#F40029";
        }
        else {document.write("ERROR: NAVIGATION MENU JS")}
    }

    // Funksjonen skjuler de sidene (HTML dokuementene hentet med iframe) som ikke er aktive (trykket på) og viser den som er aktiv
    function UpdatePageContent ()
    {
        if (currentPage == "howWeRoll")
        {
            HTMLhowWeRoll.hidden = false;
            HTMLhwrReport.hidden = true;
            HTMLsyntax.hidden = true;
            HTMLaboutUs.hidden = true;
        }
        else if (currentPage == "hwrReport")
        {
            HTMLhowWeRoll.hidden = true;
            HTMLhwrReport.hidden = false;
            HTMLsyntax.hidden = true;
            HTMLaboutUs.hidden = true;
        }
        else if (currentPage == "syntax")
        {
            HTMLhowWeRoll.hidden = true;
            HTMLhwrReport.hidden = true;
            HTMLsyntax.hidden = false;
            HTMLaboutUs.hidden = true;
        }
        else if (currentPage == "aboutUs")
        {
            HTMLhowWeRoll.hidden = true;
            HTMLhwrReport.hidden = true;
            HTMLsyntax.hidden = true;
            HTMLaboutUs.hidden = false;
        }
        else {document.write("ERROR: NAVIGATION MENU JS")}
    }

    // Kaller funksjonene ved oppstart
    UpdateNavigationMenu();
    UpdatePageContent();


    // UiA logoen åpner nettsiden til UiA ved klikk
    HTMLlogo.onclick = function ()
    {
        window.open("https://www.uia.no");
    }

    HTMLpageName.onclick = function ()
    {
        currentPage = "aboutUs";
        UpdateNavigationMenu();
        UpdatePageContent();
    }