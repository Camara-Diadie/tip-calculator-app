const facture = document.getElementById("facture");
const divisPers = document.getElementById("divis-pers");
const tipsPers = document.getElementById("tips-person");
const labelPeople = document.getElementById("pers-label");
let factureBefor = document.getElementById("facture-befor");
const buttonTips = document.querySelectorAll("button");

console.log("sa marche");

//cette fonction sert a calculer le prix  a payer au total avec les tips par personne
function calculFacturtotalTips(totalTips, prixTotal, nombrePerson) {
  return totalTips + prixTotal / nombrePerson;
}
/// cette fonction permet de calculer les tips par personne
function calculTipsPers(prixTotalTips, nombrePerson) {
  return prixTotalTips / nombrePerson;
}

// cette focntion permet de calucler le pourcentage de tips a payer par raport a facture
function CalculPoucentage(prixTotal, pourcentage) {
  return (prixTotal * pourcentage) / 100;
}
for (let i = 0; i < buttonTips.length; i++) {
  buttonTips[i].addEventListener("click", function () {
    let tip = buttonTips[i].value;
    factureBefor.addEventListener("input", function () {});
    const facturePrice = factureBefor.value;

    tipsPers.innerHTML = "$" + CalculPoucentage(facturePrice, tip);
    console.log(CalculPoucentage(facturePrice, tip));
  });
}

///

const errorSpan = document.createElement("span");
divisPers.addEventListener("keyup", function () {
  if (divisPers.value > 0) {
    errorSpan.innerHTML = "";
    labelPeople.appendChild(errorSpan);
    divisPers.classList.remove("error");
  } else {
    errorSpan.innerHTML = "can't be zero";
    labelPeople.appendChild(errorSpan);
    divisPers.classList.add("error");
  }
});
