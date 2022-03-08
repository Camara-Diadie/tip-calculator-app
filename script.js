var factureAfter = document.getElementById("facture-after");
var facture = document.getElementById("facture");
var divisNbPers = document.getElementById("divis-pers");
var tipsPers = document.getElementById("tips-person");
var labelPeople = document.getElementById("pers-label");
var buttonTips = document.querySelectorAll("div#button-pourcentage > button");
var customButton = document.getElementById("pourcentage-custom");
var totalFactPerso = document.getElementById("total-person");
var divTips = document.getElementById("pourcentage-tips");

divisNbPers.addEventListener("click", function () {});

for (let i = 0; i < buttonTips.length; i++) {
  buttonTips[i].addEventListener("click", function () {
    var resultTipsTotalParPers =
      ((parseInt(factureAfter.value) / parseInt(divisNbPers.value)) *
        parseInt(buttonTips[i].value)) /
      100;
      tipsPers.innerHTML = resultTipsTotalParPers;

    //   //

    var testecustom = customButton.value;
    var resultTipsCustomTotalParPers =
      ((parseInt(factureAfter.value) / parseInt(divisNbPers.value)) *
        parseInt(testecustom)) /
      100;
    //   tipsPers.innerHTML = resultTipsTotalParPers.value;


    if (tipsPers.innerHTML === "") {
      tipsPers.innerHTML = resultTipsTotalParPers;
    } else {
      tipsPers.innerHTML = resultTipsCustomTotalParPers;
    }

    
  });
}

const errorSpan = document.createElement("span");
divisNbPers.addEventListener("keyup", function () {
  if (divisNbPers.value > 0) {
    errorSpan.innerHTML = " ";
    labelPeople.appendChild(errorSpan);
    divisNbPers.classList.remove("error");
  } else {
    errorSpan.innerHTML = "can't be zero";
    labelPeople.appendChild(errorSpan);
    divisNbPers.classList.add("error");
  }
});
