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



//Generate interface

//Lichtfestival
var lichtFestivalStr = '';
for (i=0; i < lichtFestival.length; i++){
    var event = this.lichtFestival[i];
    lichtFestivalStr += '<div class="activiteit-container"> <div class="activiteit" data-set-id="1" data-id="' + event.Nr + '" data-language="NL">';
    lichtFestivalStr += '<div class="activiteitBeeld" style="background-image: url(\'https://upload.wikimedia.org/wikipedia/commons/b/b5/Lichtfestival_Gent_2011.JPG\'")><div class="overlay"></div>';
    lichtFestivalStr += '</div><h1>' + event.Werk + '</h1></div><a class="unfav" href="#"></a></div>';
}

//visitGentEvents
var visitGentEventsStr = '';
var otherLanguages = [];
for (i=0; i < visitGentEvents.length; i++){
    var event = this.visitGentEvents[i];
    if(event.language != 'nl'){
        otherLanguages.push(event);
    } else {
        visitGentEventsStr += '<div class="activiteit-container"> <div class="activiteit" data-set-id="2" data-id="' + event.id + '" data-language="'+ event.language +'">';
        visitGentEventsStr += '<div class="activiteitBeeld" style="background-image: url(\'' + event.images[0] +'\'")><div class="overlay"></div>';
        visitGentEventsStr += '</div><h1>' + event.title + '</h1></div><a class="unfav" href="#"></a></div>';
    }
}

//visitGentSpots
var visitGentSpotsStr = '';
var otherLanguages = [];
for (i=0; i < visitGentSpots.length; i++){
    var event = this.visitGentSpots[i];
    if(event.language != 'nl'){
        otherLanguages.push(event);
    } else {
        visitGentSpotsStr +='<div class="activiteit-container"><div class="activiteit" data-set-id="3" data-id="' + event.id + '" data-language="'+ event.language +'">';
        visitGentSpotsStr += '<div class="activiteitBeeld" style="background-image: url(\'' + event.images[0] +'\'")><div class="overlay"></div>';
        visitGentSpotsStr += '</div><h1>' + event.title + '</h1></div><a class="unfav" href="#"></a></div>';
    }
}

//kunstenplan
var kunstenplanStr = '';
for (i=0; i < kunstenplan.length; i++){
    var event = this.kunstenplan[i];
        kunstenplanStr += '<div class="activiteit-container"> <div class="activiteit" data-set-id="4" data-id="' + event.id + '" data-language="'+ event.language +'">';
        kunstenplanStr += '<div class="activiteitBeeld" style="background-image: url(\'https://s-media-cache-ak0.pinimg.com/originals/71/4e/e4/714ee457656dd96af3cc3e9d433be2a2.jpg\'")><div class="overlay"></div>';
        kunstenplanStr += '</div><h1>' + event.Naam + '</h1></div><a class="unfav" href="#"></a></div>';
}

detailTriggerd = function(){
    $(".activiteit").on('click',function(){
        $dataId = $(this).data("id");
        $dataSetId = $(this).data("set-id");

        localStorage.setItem('data-id', JSON.stringify($dataId));
        localStorage.setItem('data-set-id', JSON.stringify($dataSetId));
        
        window.location.href = 'detail.html';
    });
}


var dataArray=[];
var dataSetArray=[];
favoriteTriggerd = function(){

    $(".unfav").on('click',function(e){
        
        $dataId = $(this).siblings('.activiteit').data("id");
        $dataSetId = $(this).siblings('.activiteit').data("set-id");

        dataArray.push($dataId);
        localStorage.setItem('data-id', JSON.stringify(dataArray));

        dataSetArray.push($dataSetId);
        localStorage.setItem('data-set-id', JSON.stringify(dataSetArray));

        
        $(this).toggleClass("fav");
        e.preventDefault();

        console.log(dataArray);
        console.log(dataSetArray);
    });
}

window.onload = function(){
    document.querySelector('.container-data').innerHTML = visitGentEventsStr + lichtFestivalStr + kunstenplanStr + visitGentSpotsStr;
    detailTriggerd();
    favoriteTriggerd();

    
}

$('#category').change(function(){
    selected = $("#category").val();

    switch(selected){
        case 'indoor':
            document.querySelector('.container-data').innerHTML = kunstenplanStr;
            detailTriggerd();
            break;

        case 'outdoor':
            document.querySelector('.container-data').innerHTML = lichtFestivalStr;
            detailTriggerd();
            break;

        case 'event':
            document.querySelector('.container-data').innerHTML = visitGentEventsStr;
            detailTriggerd();
            break;
        
        case 'mooieplaats':
            document.querySelector('.container-data').innerHTML = visitGentSpotsStr;
            detailTriggerd();
            break;

        case 'all':
            document.querySelector('.container-data').innerHTML = visitGentEventsStr + lichtFestivalStr + kunstenplanStr + visitGentSpotsStr;
            detailTriggerd();
            break;
    }//End switch
});










