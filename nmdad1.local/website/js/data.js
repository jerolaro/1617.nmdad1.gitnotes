window.onload = function(){

var API_URL = [
    'https://datatank.stad.gent/4/cultuursportvrijetijd/routelichtfestivalen.json',
    'https://datatank.stad.gent/4/toerisme/visitgentevents.json',
];

for(i=0; i<API_URL.length; i++){
    function GoinGApp() {
        //get the API_URL 
        this.API_URL = API_URL[i];
        //define variable to store data 
        this._applicationData;
        //set uiGenerated to false
        this._uiGenerated = false;

        //initialize the app
        this.init = function(){
            this.loadData();
        }

        //Function do load the data
        this.loadData = function(){
            var that = this; //hack --> enclosure

            var xhr = new XMLHttpRequest();
            xhr.open('get', this.API_URL, true);
            xhr.responseType = 'json';
            xhr.onload = function(){
                if(xhr.status == 200){
                    var data = (!xhr.responseType)?JSON.parse(xhr.reponse):xhr.response;
                    that._applicationData = data;
                    that.updateUI();
                } else {
                    Error('network Error!');
                    //add function to load data from local JSON file
                }
            }//onload
            xhr.send();
        };//loadData

        //Update the User interface (UI)
        this.updateUI = function() {
            if(!this._uiGenerated){
                this.generateUI();
                this._uiGenerated = true;
            }
        }

        //Generate the interface
        this.generateUI = function() {

            switch(this.API_URL){
                //--------------- LICHTFESTIVAL ---------------
                case 'https://datatank.stad.gent/4/cultuursportvrijetijd/routelichtfestivalen.json':
                    var lichtFestival = [];
                    for (i=0; i < this._applicationData.length; i++){
                        var event = this._applicationData[i];
                        lichtFestival.push(event);
                    }
                    localStorage.setItem('lichtFestival', JSON.stringify(lichtFestival));
                    break;

                //--------------- VISIT GENT EVENTS ---------------
                case 'https://datatank.stad.gent/4/toerisme/visitgentevents.json':
                    var visitGentEvents = [];
                    for (i=0; i < this._applicationData.length; i++){
                        var event = this._applicationData[i];
                        visitGentEvents.push(event);
                    }
                    localStorage.setItem('visitGentEvents', JSON.stringify(visitGentEvents));
                    break;

                //--------------- DEFAULT CASE ---------------
                default:
                    tempStr += 'ERROR: API_URL not found!'
                    //console.log(tempStr);
                    break;
            } // End of switch statement
        }// generateUI

    };// End of GoinGApp function
    var app = new GoinGApp();
    app.init();
}// End of the for loop

};//readyfunction