/* 
    DETTE SCRIPTET ÅPNER DE RELEVANTE HTML SIDENE GJENNOM "iframes" BASERT PÅ HVILKEN KNAPP MAN TRYKKER PÅ.
    DEN ENDRER OGSÅ UTSEENDE TIL KNAPPENE FOR Å VISUALISERE HVILKEN SIDE DU BEFINNER DEG PÅ.
*/

    // MED DENNE VARIABELEN KAN MAN ENDRE HVILKEN SIDE SOM ER FORSIDA
    var landingPage = "aboutUs"; // Setter default landing page (aboutUs)

    var currentPage = landingPage; // Gjør at forsida blir den aktive siden (IKKE BYTT)

    // HENTER INN HTML-ELEMENTENE SOM BLIR TATT I BRUK
    // STARTER VARIABELNAVNENE MED "HTML" FOR Å ILLUSTRERE AT DET ER HTML-ELEMENTER
    var HTMLbuttonHwr = document.getElementById("navigation-menu__button--hwr");
    var HTMLbuttonHwrReport = document.getElementById("navigation-menu__button--hwr-report");
    var HTMLbuttonSyntax = document.getElementById("navigation-menu__button--syntax");
    var HTMLbuttonAboutUs = document.getElementById("navigation-menu__button--about-us");
    var navigationMenuContents = document.getElementById("header__navigation-menu").children; // Et array av elementene (4) over

    var HTMLhowWeRoll = document.getElementById("page__hwr");
    var HTMLhwrReport = document.getElementById("page__hwr-report");
    var HTMLsyntax = document.getElementById("page__syntax");
    var HTMLaboutUs = document.getElementById("page__about-us");
    var pageContents = document.getElementById("page").children; // Et array av elementene (4) over

    // DENNE FUNKSJONEN GJØR FØRST ALLE KNAPPENE GJENNOMSIKTIGE OG SER DERETTER ETTER HVA SOM ER "currentPage",
    // OG BYTTER SÅ BAKGRUNNSFARGE PÅ DEN RESPEKTIVE KNAPPEN FOR Å VISUALISERE HVOR DU BEFINNER DEG
    function updateNavigationMenu ()
    {
        for (let i = 0; i < navigationMenuContents.length; i++)
        {
            navigationMenuContents[i].style.backgroundColor = "transparent";
        }
        if (currentPage == "howWeRoll") {HTMLbuttonHwr.style.backgroundColor = "#F40029";}
        else if (currentPage == "hwrReport") {HTMLbuttonHwrReport.style.backgroundColor = "#F40029";}
        else if (currentPage == "syntax") {HTMLbuttonSyntax.style.backgroundColor = "#F40029";}
        else if (currentPage == "aboutUs") {HTMLbuttonAboutUs.style.backgroundColor = "#F40029";}
        else {alert("ERROR: Navigation.js: currentPage Not Found");} // Feilmelding om variabelen "currentPage" ikke stemmer med de 4 alternativene
    }

    // DENNE FUNKSJONEN SKJULER FØRST ALLE SIDENE (HTML DOKUMENTENE HENTET MED "iframe") OG VISER DERETTER DEN SOM ER AKTIV (BASERT PÅ "currentPage")
    function updatePageContents ()
    {
        for (let i = 0; i < pageContents.length; i++)
        {
            pageContents[i].hidden = true;
        }
        if (currentPage == "howWeRoll") {HTMLhowWeRoll.hidden = false;}
        else if (currentPage == "hwrReport") {HTMLhwrReport.hidden = false;}
        else if (currentPage == "syntax") {HTMLsyntax.hidden = false;}
        else if (currentPage == "aboutUs") {HTMLaboutUs.hidden = false;}
        else {alert("ERROR: Navigation.js: currentPage Not Found");} // Feilmelding om variabelen "currentPage" ikke stemmer med de 4 alternativene
    }

    // DISSE FUNKSJONENE REGISTRERER NÅR EN KNAPP BLIR TRYKKET PÅ OG ENDRER VARIABELEN "currentPage" TIL DEN RESPEKTIVE SIDEN,
    // OG KJØRER DERETTER FUNKSJONENE "updateNavigationMenu" og "updatePageContents"
    HTMLbuttonHwr.onclick = function () {currentPage = "howWeRoll"; updateNavigationMenu(); updatePageContents();}
    HTMLbuttonHwrReport.onclick = function () {currentPage = "hwrReport"; updateNavigationMenu(); updatePageContents();}
    HTMLbuttonSyntax.onclick = function () {currentPage = "syntax"; updateNavigationMenu(); updatePageContents();}
    HTMLbuttonAboutUs.onclick = function () {currentPage = "aboutUs"; updateNavigationMenu(); updatePageContents();}

    // DENNE FUNKSJONEN GJØR AT SIDETITTELEN TAR DEG TILBAKE TIL FORSIDEN (aboutUs)
    HTMLtitle.onclick = function () {currentPage = landingPage; updateNavigationMenu(); updatePageContents();}
    
    // KALLER BEGGE FUNKSJONENE VED OPPSTART SLIK AT INNHOLDET PÅ SIDEN ALLTID ER OPPDATERT
    updateNavigationMenu();
    updatePageContents();