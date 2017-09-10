
export const getCardsFromDB = () => {
  return new Promise((resolve, reject) => {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function() {
      // console.log(this.responseText);
      var parseData = JSON.parse(this.responseText);
      resolve(parseData);
    });
    oReq.open("GET", "/api/cards");
    oReq.send();
  });
};

export const addCardToDB = (card) => {
  return new Promise((resolve, reject) => {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function(){
      var parseData = JSON.parse(this.responseText);
      resolve(parseData);
    });
    oReq.open("POST", "/api/cards");
    oReq.setRequestHeader("Content-type", "application/json");
    oReq.send(JSON.stringify(card));
  });
};

export const deleteCardFromDB = (card) => {
  return new Promise((resolve, reject) => {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function(){
      var parseData = JSON.parse(this.responseText);
      resolve(parseData);
    });
    oReq.open("DELETE", "/api/cards");
    oReq.setRequestHeader("Content-type", "application/json");
    oReq.send(JSON.stringify(card));
  });
};
