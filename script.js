const divisPers = document.getElementById("divis-pers");
const tipsPers = document.getElementById("tips-person");
const labelPeople = document.getElementById("pers-label");
divisPers.addEventListener("keyup", myfunction);
const para = document.createElement("span");
const nombrePers = document.getElementById("nombre-pers");

function myfunction() {
  const valeurDivisPers = divisPers.value;
  tipsPers.innerText = valeurDivisPers;
  if (divisPers.value > 0) {
    para.innerHTML = "";
    labelPeople.appendChild(para);
    divisPers.classList.remove("error");
  } else {
    divisPers.classList.add("error");

    para.innerHTML = "can't be zero";
    labelPeople.appendChild(para);
  }
}
