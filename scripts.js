let numeroSecreto = parseInt(Math.random() * 11);
let contador = 1;

document.addEventListener("keypress", function (e) {
  let chute = document.querySelector("#valor").value;
  if (e.key === "Enter") {
    document.querySelector("#valor").value;
    Chutar();
  }
});

function Chutar() {
  let chute = document.querySelector("#valor").value;
  let res = document.querySelector("#resultado");
  let cont = document.querySelector(".contagem");
  cont.innerHTML = `Número de Tentativas: ${contador}`;
  cont.style.color = "white";

  if (contador < 3) {
    if (chute > 10 || chute < 0 || !chute) {
      alert("Escolha um Número de 0 a 10");
    } else if (chute == numeroSecreto) {
      res.innerHTML = "Parabéns,você acertou o número secreto";
      res.style.color = "green";
      res.style.fontSize = "40px";
      //tentar dar reload na página depois de um tempo X
    } else if (chute > numeroSecreto) {
      res.innerHTML = `O número secreto é menor que ${chute}`;
      contador++;
    } else if (chute < numeroSecreto) {
      res.innerHTML = `O número secreto é maior que ${chute}`;
      contador++;
    } else {
      alert("Erro");
    }
  } else if (contador > 2) {
    if (chute == numeroSecreto) {
      res.innerHTML = "Parabéns,você acertou o número secreto";
      res.style.color = "green";
      //trying to reload the page after X seconds
    } else {
      res.innerText = "Game Over";
      res.style.color = "red";
      res.style.fontSize = "40px";
    }
  }
}
