const partesDoBoneco = Array.from(
  document.querySelectorAll(".parte-do-boneco")
);

const chutesEfetuados = [];
const palavra = "dias de luta";
let errosCometidos = 0;
const quantidadeMaximadeErros = partesDoBoneco.length;

mostrarPalavra();

function mostrarPalavra() {
  let palavraMostrada = "";

  for (let i = 0; i < palavra.length; i = i + 1) {
    if (chutesEfetuados.includes(palavra[i])) {
      palavraMostrada =
        palavraMostrada + '<span class="letra">' + palavra[i] + "</span>";
    } else if (palavra[i] === " ") {
      palavraMostrada = palavraMostrada + " ";
    } else {
      palavraMostrada = palavraMostrada + '<span class="letra">_</span>';
    }
  }
  document.querySelector(".palavra").innerHTML = palavraMostrada;
}

function chutar() {
  if (errosCometidos === quantidadeMaximadeErros) {
    alert("Você perdeu");
    return;
  }

  const chute = prompt("qual é o seu chute?");

  if (chutesEfetuados.includes(chute)) {
    alert("Chute já efetuado");
    return;
  }

  chutesEfetuados.push(chute);

  if (palavra.includes(chute)) {
    mostrarPalavra();
  } else {
    errosCometidos = errosCometidos + 1;

    for (let i = 0; i < errosCometidos; i = i + 1) {
      partesDoBoneco[i].classList.add("mostrar");
    }

    if (errosCometidos === quantidadeMaximadeErros) {
      alert("Você perdeu!");
    } else {
      alert("Chute errado, tente novamente!");
    }
  }
}
