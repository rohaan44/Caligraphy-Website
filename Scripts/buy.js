
$(document).ready(() => {
    fetch("/shop.html")
    .then (response => response.text())
    .then (htmlData => {
      const Divv = document.getElementById("sampleD")
      Divv.innerHTML = htmlData
    })

    const h2 = document.querySelector("h2")
    const selectedCard = document.querySelector(".selectedCard")
    const h5 = document.querySelector("h5")
  })