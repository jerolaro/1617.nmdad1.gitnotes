    //Get data from localStorage
    var lichtFestival = localStorage.getItem('lichtFestival');
    var visitGentEvents = localStorage.getItem('visitGentEvents');
    var visitGentSpots = localStorage.getItem('visitGentSpots');
    var kunstenplan = localStorage.getItem('kunstenplan');

    //Parse JSON data
    lichtFestival = JSON.parse(lichtFestival);
    visitGentEvents = JSON.parse(visitGentEvents);
    visitGentSpots = JSON.parse(visitGentSpots);
    kunstenplan = JSON.parse(kunstenplan);

    var retrDataId = localStorage.getItem('data-id');
    var retrDataSetId = localStorage.getItem('data-set-id');


    switch(retrDataSetId){
        case '1':
        var lichtFestivalStr = ''; 
        for (i=0; i < lichtFestival.length; i++){
            var event = this.lichtFestival[i];
            if(event.Nr == retrDataId){
                    lichtFestivalStr += '<section data-set-id="1" data-id="' + event.Nr + '" data-language="NL">';
                    lichtFestivalStr += '<img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Lichtfestival_Gent_2011.JPG\" />';
                    lichtFestivalStr += '<h1>' + event.Werk + '</h1>';
                    lichtFestivalStr += '<h2>' + event.Artiest + '</h2>';
                    lichtFestivalStr += '<p>' + event.Beschrijving + '<p>';
                    lichtFestivalStr += '<p>' + event.Locatie + '</p>';
                    lichtFestivalStr += '<iframe width="300" height="170" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q='+event.Lat+','+event.Long+'&hl=es;z=14&amp;output=embed"></iframe><br /><small><a href="https://maps.google.com/maps?q='+event.Lat+','+event.Long+'&hl=es;z=14&amp;output=embed" style="color:#0000FF;text-align:left" target="_blank">See map bigger</a></small>';
                    lichtFestivalStr += '</section>';
        }
        }
        document.querySelector('.container').innerHTML = lichtFestivalStr;
        break;

        case '2':
        var visitGentEventsStr = '';
        for (i=0; i < visitGentEvents.length; i++){
            var event = this.visitGentEvents[i];
            if(event.id == retrDataId){
                visitGentEventsStr += '<section data-set-id="2" data-id="' + event.id + '" data-language="'+ event.language +'">';
                visitGentEventsStr += '<img src="' + event.images[0] +'"/>';
                visitGentEventsStr += '<h1>' + event.title + '</h1>';
                visitGentEventsStr += '<h2>' + event.openinghours_short + '</h2>';
                visitGentEventsStr += '<p>' + event.description + '</p>';
                var adres = event.contact[0];
                visitGentEventsStr += '<p>' + adres.street + '</br>' + adres.city + '</p>';
                visitGentEventsStr += '<iframe width="300" height="170" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps?q='+ adres.street + adres.city +'&output=embed"></iframe>';
                visitGentEventsStr+= '</section>';
            }
        }
        document.querySelector('.container').innerHTML = visitGentEventsStr;
        break;

        case '3':
        var visitGentSpotsStr = '';
        for (i=0; i < visitGentSpots.length; i++){
            var event = this.visitGentSpots[i];
            if(event.id == retrDataId){
                visitGentSpotsStr += '<section data-set-id="2" data-id="' + event.id + '" data-language="'+ event.language +'">';
                visitGentSpotsStr += '<img src="' + event.images[0] +'"/>';
                visitGentSpotsStr += '<h1>' + event.title + '</h1>';
                visitGentSpotsStr += '<p>' + event.description + '</p>';
                var adres = event.contact[0];
                visitGentSpotsStr += '<p>' + adres.street + ' ' + adres.number + '</br>' + adres.city + '</p>';
                visitGentSpotsStr += '<iframe width="300" height="170" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.google.com/maps?q='+ adres.street + adres.number + adres.city +'&output=embed"></iframe>';
                visitGentSpotsStr += '</section>';
            }
        }
        document.querySelector('.container').innerHTML = visitGentSpotsStr;
        break;

        case '4':
        var kunstenplanStr = '';
        for (i=0; i < kunstenplan.length; i++){
            var event = this.kunstenplan[i];
            if(event.Naam = retrDataId){
                kunstenplanStr += '<section data-set-id="4" data-id="' + event.Naam + '" data-language="nl">';
                kunstenplanStr += '<img src="https://s-media-cache-ak0.pinimg.com/originals/71/4e/e4/714ee457656dd96af3cc3e9d433be2a2.jpg" />';
                kunstenplanStr += '<h1>' + event.Naam + '</h1>';
                kunstenplanStr += '<h2>' + event.website + '</h2>';
                kunstenplanStr += '<p>' + event.Straat + ' ' + event.huisnr + '</br>' + event.Postcode + ' ' + event.Gemeente + '</p>';
                kunstenplanStr += '<iframe width="300" height="170" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?q='+event.latitude+','+event.longitude+'&hl=es;z=14&amp;output=embed"></iframe><br /><small><a href="https://maps.google.com/maps?q='+event.latitude+','+event.longitude+'&hl=es;z=14&amp;output=embed" style="color:#0000FF;text-align:left" target="_blank">See map bigger</a></small>';                
                kunstenplanStr += '</section>';
                break;
            }
        }
        document.querySelector('.container').innerHTML = kunstenplanStr;
        break;
    }
    
