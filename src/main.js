import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './styles.css';
import { Quotes } from './insults.js';

$(document).ready(function(){
  $("#quote").submit(function(event){
    event.preventDefault();

    let quotes = new Quotes();
    let promise = quotes.getQuotes();

    promise.then((response) => {
      let text = JSON.parse(response);
      text.forEach((quote) => {

      $("#output").html(`<h1>Quotes: ${quote}</h1>`);
    });

    });
  });
});
