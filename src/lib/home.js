
export const getCards = () => {
  return new Promise((resolve, reject) => {
    var oReq = new XMLHttpRequest()
    oReq.addEventListener("load", function() {
      console.log('CONSOLE LOGGING THIS', this)
      resolve(this.responseText)
    })
    oReq.open("GET", "/home")
    oReq.send()
  })
}

export default getCards;