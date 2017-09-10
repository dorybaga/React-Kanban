
const getCards = () => {
  return new Promise((resolve, reject) => {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function() {
      // console.log(this.responseText);
      var parseData = JSON.parse(this.responseText);
      console.log('parseData=', parseData);
      resolve(parseData);
    });
    oReq.open("GET", "/api/cards");
    oReq.send();
  });
};

export default getCards;