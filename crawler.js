var request = require('request');
var cheerio = require('cheerio');
var URL = require('url-parse');

var urls = [
  "https://www.benoithamon2017.fr/thematique/pour-un-progres-social-et-ecologique/",
  "https://www.benoithamon2017.fr/thematique/pour-une-republique-bienveillante-et-humaniste/",
  "https://www.benoithamon2017.fr/thematique/pour-une-france-independante-et-protectrice/"
];

var nbResponse = 0;
var allPropositions = [];
urls.map(function(url){
  return crawl(url);
});

function crawl(url) {
  return request(url, function(error, response, body) {
    nbResponse++;
     if(response.statusCode === 200) {
       // Parse the document body
       var $ = cheerio.load(body);
       parseAllPropositions($);
     }
     if (nbResponse === urls.length) {
       console.log(JSON.stringify(allPropositions));
     }
  });
}

function parseAllPropositions($, word) {
  var propositions = $('.Propositions > .Propositions-Proposition');
  propositions.each(function(index){
    var element = propositions[index];
    var obj = {};
    obj.title = $(element).find(".flex-title").text();

    obj.description = $(element).find(".ExtendedPropal > *:first-child > span").text();

    // Si on a déjà récupéré cette proposition, on l'ignore
    if (!arrayContains(allPropositions, obj.title) && obj.description !== "") {
      allPropositions.push(obj);
    }
  });
}

function arrayContains(array, elt) {
  var filtered = array.filter(function(eltInArray){
    return elt === eltInArray.title;
  });
  return filtered.length > 0;
}
