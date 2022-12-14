# GRUPPE-REPOSITORY

# Innlevering 1

| Navn | Github profil |
| ------------- | ------------- |
| Alexander Glasdam Andersen | https://github.com/xBroccoliMaster69x |
| Amir Krpo | https://github.com/AmirKrpo |
| Joackim Anglevik  | https://github.com/Ziaok |
| Rebekka Broderstad | https://github.com/RebekkaBroderstad |
| Simen Hølland | https://github.com/SiMENhol |
| Tobias Molland | https://github.com/ToBeAss |
| Victor Normannseth | https://github.com/vicnorm |

Før vi fikk oppgaven, hadde de fleste av oss allerede fikset egen Github konto, og laget egen repository. Vi var ikke helt trygge på hvordan pull og push fungerte, dermed var det med hjelp av LA, at vi fikk en liten forståelses av hvordan det hele går for seg. Vi støtte på en del små problemer som vi i gruppa kunne sammen se over å fikse. 
Selvevaluering: 3

# Innlevering 2

a) Vi valgte Github projects å jobbe med, der vi brukte scrum som metode å jobbe på. Vi strukturerte Github projects som “bord”, der vi fordelte arbeidsoppgaver ut ifra drafts og issues. Vi hadde fire enkle inndelinger vi kunne legge oppgavene inn i:
Til diskusjon: Der skulle vi da som gruppe diskutere oppgaven, hvem som skulle gjøre den å hvordan.
Todo: Her la vi oppgaver som var klar til å jobbes med, men som ikke var startet på enda.
In Progress: Under her havnet oppgaver som ble jobbet med.
Done: Dette var her vi la de ferdige oppgavene.

b) Arbeidsoppgavene delte vi opp i Github projects, og vi gjorde det med å ha to og to på hver arbeidsoppgave. Målet vårt var å dele oppgavene opp rettferdig at alle hadde rundt like mye arbeid, og gjøre det mest effektivt. Med å dele oppgavene inn med to og to på hver oppgave gjorde at hvis en ikke hadde tid å gjøre oppgaven av en eller annen grunn, så kunne den andre personen gjøre mesteparten, så det var mindre risiko enn å dele det opp til en og en per oppgave. Rammene i oppgaven består av tidsramme, der hadde vi over en måned på oppgaven, og ressursene våre var alle personene i oppgaven. I gruppen vår er vi 7 personer, og alle kunne jobbe når som helst, litt og litt. Planen vår ble beskrevet godt i Github projects, og gjorde det enkelt for oss å se hvem som skulle gjøre hva. Denne måten funket ganske bra, og vi vil mest sannsynlig bruke denne fremgangsmåten i de neste prosjektoppgavene.

c)
<p> elementet i html er brukes til å definere en paragraf med tekst, <p> elementet har egne regler og vil ha en standard margin. (W3Schools 2022) Dette er i motsetning til <div> som kan inneholde andre elementer, men ikke har predefinert regler for stil (W3Schools 2022). Når man bruker <p> elementet til å utforme stil på en paragraf. Kan man bruke <Style> til å bestemme verdier slik som farge på bakgrunn og tekst og dimensjoner på paragrafen. CSS, cascading style sheet, referer til språket vi bruker til å lage stilen i et html-dokument. Den kan befinne seg i html filen eller i en annen ekstern fil (W3Schools 2022). I CSS kan vi bruke ID og Class til å definere en. Denne IDen eller Classen kan refereres til for å hente style verdier. Forskjellen på ID og Classes som er relevant for oss er at Id kan bare hentes en gang, mens Classes kan hentes ubegrenset antall ganger (W3Schools 2022). Canvas elementet er et grafisk vindu hvor du kan via javascript tegne bokser, sirkler eller legge til bilder (W3Schools 2022). 

Den første fremgangsmetoden. Design av flag ved bruk av <p> element og style, fungerer fint til å tegne det tyske flagget, men ville være vanskelig å bruke til å tegne mer kompliserte flag da prosessen essensielt består av å fargelegge bakgrunnen til paragrafer som ikke inneholder tekst. 

Den andre fremgangsmetoden er enklere å bruke for mer kompliserte flag, da vi kan definere stil-verdier en gang og så hente dem etter behov, bruken av <div> gjør det også enklere å utforme flagget. 

Den tredje fremgangsmåten via canvas er den mest anvendelige, da canvas har mange metoder for å utforme bokser, sirkler, linjer og bilder. Dette gjør Canvas til den beste fremgangsmetoden ved mer kompliserte flagg. 

P style-flagg

I body elementet, satte vi inn tre <p> element med attributten «style», deretter skrev vi navnet på hver enkelt farge. Så brukte vi «background-color» til å endre bakgrunnsfargen slik at den var lik navnet på fargen. Deretter endret vi fargen til skriften, slik at den var lik bakgrunnsfargen. Da hadde vi de tre fargene på rad, men det var mellomrom mellom dem og de hadde ikke riktig dimensjoner. For å endre på det så brukte vi «margin: 0 auto» for å fjerne marginene slik at det ikke var noen mellomrom og for å sette flagget i senter. Til slutt brukte vi «height» og «width» for å gi flagget den korrekte dimensjonen 3:5.

CSS-flagg

Når jeg brukte <p>-elementet så brukte jeg class, selv om jeg kunne brukt id. På det japanske flagget så hadde det ikke vært så mye forskjell på Id og class med tanke på at det er 2 forskjellige farger. Id hadde også funket. Jeg hadde to forskjellige <p>-element den første var den hvite delen av flagget og den andre var den røde delen av flagget. Jeg samlet også disse to elementene inne i en div. 
Det japanske flagget er ganske simpelt, hvor det er ett hvitt rektangel med en mørkere rød sirkel i midten, fargen som sirkelen har heter Crimson.  
For å få en sirkel så måtte jeg kutte radiusen på borderen, for å gjøre dette brukte jeg Border-Radius. 50 %. (css-tricks, 2022). 
vi brukte også top og left for å få sirkelen sentrert i flagget. I index filen er top og left litt forskjellig enn det den er i cssflagg. 

 
Canvas-flagg

I canvas elementet tegnet vi ulike firkanter med forskjellige farger og størrelser. Dette gjorde vi med konteksten “2D” (ctx = canvas.getContext("2d")) og deretter (ctx.beginPath();). Vi begynte med å tegne et rødt rektangel på størrelse med det norske flagg (16:22). Vi brukte “fillStyle” for å velge riktig farge og deretter “fillRect”, med startkoorinater (x,y), lengde og bredde, for å tegne et rektangel. Vi mulitpliserte en variabel kalt “scale” med alle argumentene i rektangelen, for å enkelt kunne endre størrelsen på hele flagget. Det så slik ut: (let scale = 4; ctx.fillRect(0*scale, 0*scale, 220*scale, 160*scale);). Videre tegnet vi hvite striper over den røde boksen, et horisontalt og et vertikalt rektangel. Til slutt gjorde vi det samme med de blå stripene, bare tynnere (W3Schools, u.å.).
  

 
  
 Referanseliste
  
 Cope, S. (2022, 20.September). Border-radius. Css-tricks. https://css-tricks.com/almanac/properties/b/border-radius/
 
 W3Schools (u.å.). HTML canvas fillRect() Method. W3Schools Online Web Tutorials. https://www.w3schools.com/tags/canvas_fillrect.asp

 W3Schools. (u.å.) HTML <p> Tag. Hentet 6. oktober 2022 fra https://www.w3docs.com/learn-html/html-p-tag.html 

W3Schools. (u.å.) HTML <div> Tag. Hentet 6. oktober 2022 fra https://www.w3schools.com/tags/tag_div.ASP 

W3Schools. (u.å.) HTML ID Attribute. Hentet 6. oktober 2022 fra https://www.w3schools.com/html/html_id.asp 

W3Schools. (u.å.) HTML class attribute. Hentet 6. oktober 2022 fra https://www.w3schools.com/html/html_classes.asp 

W3Schools. (u.å.) HTML Styles CSS. Hentet 6. oktober 2022 fra https://www.w3schools.com/html/html_css.asp 

W3Schools. (u.å.) CSS introduction. Hentet 6. oktober 2022 fra https://www.w3schools.com/css/css_intro.asp 

W3Schools. (u.å.) HTML Canvas. Hentet 6. oktober 2022 fra https://www.w3schools.com/html/html5_canvas.asp 
