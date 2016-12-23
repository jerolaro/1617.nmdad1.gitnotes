

        var retrievedName = localStorage.getItem('gebruiker');
        $('.container').append('<h1> Hallo '+retrievedName+'</h1>');
        $('.container').append('<h2> favorieten </h2>');


//Get data from localStorage
var lichtFestival = localStorage.getItem('lichtFestival');
var visitGentEvents = localStorage.getItem('visitGentEvents');
var visitGentSpots = localStorage.getItem('visitGentSpots');
var kunstenplan = localStorage.getItem('kunstenplan');
var favorietenId = localStorage.getItem('data-id');
var favorietenSetId = localStorage.getItem('data-set-id');

//Parse JSON data
lichtFestival = JSON.parse(lichtFestival);
visitGentEvents = JSON.parse(visitGentEvents);
visitGentSpots = JSON.parse(visitGentSpots);
kunstenplan = JSON.parse(kunstenplan);
favorietenId = JSON.parse(favorietenId);
favorietenSetId = JSON.parse(favorietenSetId);

//lengte array in variabele
var favorietenSetLength = favorietenSetId.length;

 for (var s = 0; s < favorietenSetLength; s++){
     retrDataSetId = favorietenSetId[s];
     retrDataId = favorietenId[s];
     //console.log(favorietenSetId[s]);
     //console.log(favorietenId[s]);

     switch(retrDataSetId){
         case 1:
         var lichtFestivalStr = '';
            for (i=0; i < lichtFestival.length; i++){
            var event = this.lichtFestival[i];
                if(event.Nr == retrDataId){
                    lichtFestivalStr += '<div class="activiteit-container"> <div class="activiteit" data-set-id="1" data-id="' + event.Nr + '" data-language="NL">';
                    lichtFestivalStr += '<div class="activiteitBeeld" style="background-image: url(\'https://upload.wikimedia.org/wikipedia/commons/b/b5/Lichtfestival_Gent_2011.JPG\'")><div class="overlay"></div>';
                    lichtFestivalStr += '</div><h1>' + event.Werk + '</h1></div><a class="fav" href="#"></a></div>';
                }
            }
            document.querySelector('.container').innerHTML += lichtFestivalStr;
         break;

         case 2:
         var visitGentEventsStr = '';
            for (i=0; i < visitGentEvents.length; i++){
            var event = this.visitGentEvents[i];
                if(event.id == retrDataId){
                    visitGentEventsStr += '<div class="activiteit-container"> <div class="activiteit" data-set-id="2" data-id="' + event.id + '" data-language="'+ event.language +'">';
                    visitGentEventsStr += '<div class="activiteitBeeld" style="background-image: url(\'' + event.images[0] +'\'")><div class="overlay"></div>';
                    visitGentEventsStr += '</div><h1>' + event.title + '</h1></div><a class="fav" href="#"></a></div>';
                }
            }
            document.querySelector('.container').innerHTML += visitGentEventsStr;
         break;
         
         case 3:
         var visitGentSpotsStr = '';
            for (i=0; i < visitGentSpots.length; i++){
                var event = this.visitGentSpots[i];
                if(event.id == retrDataId){
                    visitGentSpotsStr +='<div class="activiteit-container"><div class="activiteit" data-set-id="3" data-id="' + event.id + '" data-language="'+ event.language +'">';
                    visitGentSpotsStr += '<div class="activiteitBeeld" style="background-image: url(\'' + event.images[0] +'\'")><div class="overlay"></div>';
                    visitGentSpotsStr += '</div><h1>' + event.title + '</h1></div><a class="fav" href="#"></a></div>';
                }
            }
         document.querySelector('.container').innerHTML += visitGentSpotsStr;
         break;

         case 4:
         var kunstenplanStr = '';
            for (i=0; i < kunstenplan.length; i++){
                 var event = this.kunstenplan[i];
                if(event.id == retrDataId){
                kunstenplanStr += '<div class="activiteit-container"> <div class="activiteit" data-set-id="4" data-id="' + event.id + '" data-language="'+ event.language +'">';
                kunstenplanStr += '<div class="activiteitBeeld" style="background-image: url(\'https://s-media-cache-ak0.pinimg.com/originals/71/4e/e4/714ee457656dd96af3cc3e9d433be2a2.jpg\'")><div class="overlay"></div>';
                kunstenplanStr += '</div><h1>' + event.Naam + '</h1></div><a class="fav" href="#"></a></div>';
            }
            }
         document.querySelector('.container').innerHTML += kunstenplanStr;
         break;
     }
 }