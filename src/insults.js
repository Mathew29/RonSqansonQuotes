export class Quotes {
  getQuotes() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://ron-swanson-quotes.herokuapp.com/v2/quotes`

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
