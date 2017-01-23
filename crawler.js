var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

var START_URL = "https://www.benoithamon2017.fr/thematique/pour-un-progres-social-et-ecologique/";

var url = new URL(START_URL);
var baseUrl = url.protocol + "//" + url.hostname;

pagesToVisit.push(START_URL);
crawl();

function crawl() {
  request(url, function(error, response, body) {
     if(response.statusCode === 200) {
       // Parse the document body
       var $ = cheerio.load(body);
       var propositions = getAllPropositions($);
       propositions.forEach(function(proposition){
         console.log(proposition.title);
       });
     }
  });
}

function getAllPropositions($, word) {
  var propositions = $('.Propositions > Propositions-Proposition');
  propositions = propositions.map(function(element){

  });
  return propositions;
}
