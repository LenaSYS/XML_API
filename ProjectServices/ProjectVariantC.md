## There are two variants of this test! You need to be logged in to see which version of the test that applies to you

# Introduktion

Projektarbetet går ut på att använda en odokumenterad webbtjänst för att bygga en applikation bestående av ett antal under-sidor.

Du skall själv bestämma hur sidan skall utformas enligt reglerna nedan.

Notera: Om du tycker att någon endpoint saknas, skriv meddelande om detta på discord så kan lärarna besluta att utöka interfacet mot webbtjänsten med ytterligare endpoints/alternativ

Kom tillbaka till denna sidan ofta då informationen uppdateras fortlöpande (exv när något behöver förtydligas eller om nya endpoints tillkommer).

# Endpoints

https://wwwlab.iit.his.se/gush/XMLAPI/scheduleservice/courses?coursename=Introduktion
https://wwwlab.iit.his.se/gush/XMLAPI/scheduleservice/courses?coursename=ALL
https://wwwlab.iit.his.se/gush/XMLAPI/scheduleservice/courses?id=IT125G
https://wwwlab.iit.his.se/gush/XMLAPI/scheduleservice/courses?dept=IT

https://wwwlab.iit.his.se/gush/XMLAPI/scheduleservice/staff?fname=Charlotta
https://wwwlab.iit.his.se/gush/XMLAPI/scheduleservice/staff?login=TOLO
https://wwwlab.iit.his.se/gush/XMLAPI/scheduleservice/staff?login=ALL

https://wwwlab.iit.his.se/gush/XMLAPI/scheduleservice/programs?name=neuro
https://wwwlab.iit.his.se/gush/XMLAPI/scheduleservice/programs?id=KONE20


# Krav på Applikationen

Alla endpoints skall användas i applikationen (man kan hoppa över enstaka sökvariant). 
Man behöver inte ha använt alla sökvarianter (exv ALL är mest nyttigt när man testar för hand i webbläsaren så de söktermerna behöver ej användas)
Alla element och Alla attribut behöver inte visas upp i applikationen men huvuddelen skall användas på något sätt.

* Applikationen skall ha flera olika vyer i mera komplexa webb-sidor eller flera olika under-sidor. (Flera forms behövs men man kan lägga upp det på oändligt många sätt, en sida kan ha flera forms, och en svarssida kan ha forms blandat med tabeller, och vi kan ha separata formulär och svar eller låta formulären referera sig själva)
* Sökning skall användas på minst ett ställe (**Search form example**)
* Dropdown skall användas på minst ett ställe (**Dom/SAX/XSLT select dropdown example**)
* Länkar <a href='test.php?id=7243'> skall användas på minst ett ställe (lämpligt för att komma till detaljvy exv för en specifik författare -- **SAX / DOM Link Creation Examples**).
* Tabeller skall användas för att representera datan på skärmen (välj rad eller kolumn-layout)
* Styling skall användas på de flesta element
	
# VG-Krav

* Grafiska/Box-element skall användas exv boxmodellen för att representera en storlek eller ett antal
* Bilder skall genereras utifrån url-er i filerna (eller med egna bilder från datavärden i filerna)
* 

# Teorifrågor

Börja med att för hand i webbläsaren med URL anropa endpoints ovan för att se hur de fungerar. Skriv dokumentation för respektive Endpoint och för respektive XML-dokument.

Läs böran av forskningsartikeln "A semi-automatic solution for XML query response enrichment using a terminological domain ontology"
Diskutera om den webbtjänst du fått att arbeta med är data centric eller document centric.
https://dl.acm.org/doi/10.1145/3129186.3131941

Diskutera fördelar/nackdelar med respektive API för att processa datan i webbtjänsten. Diskutera vilket eller vilka API (SAX / DOM / XSLT) du tycker är mest lämplig för att bygga din applikation. 
(Det är tillåtet att använda olika API på olika delar av applikationen)

Diskutera och kontrastera för vilka delar av applikationen som formulär-svars-sidor är lämpligast samt för vilka delar själv-refererande-formulär är lämpligast.

Diskutera och kontrastera användandet av radlayout eller kolumnlayout för datan (man måste inte använda och det är tillåtet att använda båda på olika ställen).

Diskutera fördelar och nackdelar med att arbeta med XML-datan jämfört med om du hade haft samma data men i stället representerad som arrayer.

