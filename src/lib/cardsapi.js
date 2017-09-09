
export const getCards = () => {
  return new Promise((resolve, reject) => {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", function() {
      console.log(this.responseText);
      resolve(JSON.parse(this.responseText));
    });
    oReq.open("GET", "/api/cards");
    oReq.send();
  });
};

export default getCards;