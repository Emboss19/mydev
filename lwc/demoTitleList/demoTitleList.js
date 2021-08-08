import { LightningElement, api,track, wire } from 'lwc';
import testJsonFeed from './testJsonFeed.js';

export default class demoTitleList extends LightningElement {
    @track 
    jsonApiFeed = testJsonFeed();
    @api url;
    @api
    fromType
    @track
    seriesList=[];
    @track
    moviesList=[];
    @track
    displayList=[];
    @track
    urlList=[];

    connectedCallback(){
    
     for(let i in this.jsonApiFeed.entries){
     if(this.jsonApiFeed.entries[i].programType =='series'&&this.jsonApiFeed.entries[i].releaseYear >= 2010) this.seriesList.push(this.jsonApiFeed.entries[i]);
     if(this.jsonApiFeed.entries[i].programType =='movie' &&this.jsonApiFeed.entries[i].releaseYear >= 2010) this.moviesList.push(this.jsonApiFeed.entries[i]);
     
    }

    console.log(JSON.stringify(this.fromType));

    if(this.fromType=='series'){
        this.displayList=this.seriesList;
    }
    else this.displayList=this.moviesList;
     
    if(this.displayList.length>21){
        this.displayList=this.displayList.slice(0,21);
    }

    this.displayList.forEach(function(itm){
        itm.url = " ";
       });

    for(let j in this.displayList){
    console.log(JSON.stringify(this.displayList[0].images["Poster Art"].url));
    this.displayList[j].url=this.displayList[j].images["Poster Art"].url;
    console.log(JSON.stringify(this.displayList[0].url));
    }
    

    this.displayList.sort(function(a, b) {
        var textA = a.title.toUpperCase();
        var textB = b.title.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
    }
}