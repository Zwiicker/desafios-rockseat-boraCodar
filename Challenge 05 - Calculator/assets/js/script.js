let text = document.querySelector(".calculator") //Isto cria uma variável chamada text que armazena uma referência ao elemento HTML com a classe "calculator". 
let res = document.querySelector(".resultado") //Aqui, é criada uma variável res que armazena uma referência ao elemento HTML com a classe "resultado"

let calcular = (numbers)=>{  //Esta função calcular concatena números (ou operadores) ao conteúdo do elemento text.É chamada quando os botões numéricos ou de operadores são pressionados.
  text.value += numbers;
}

let resultado = () => { //Esta é a função principal que realiza a operação de cálculo. Ela começa por tentar executar o código dentro do bloco try, mas se algum erro ocorrer, ele será capturado e tratado no bloco catch.
  try {
    let expressao = text.value.replace(/%/g, '/100');
    let partes = expressao.match(/(\d+(\.\d+)?|[+\-*/])/g);
    let resultadoTemp = parseFloat(partes[0]);

    for (let i = 1; i < partes.length; i += 2) {
      let operador = partes[i];
      let numero = parseFloat(partes[i + 1]);

      if (operador === '+') {
        resultadoTemp += numero;
      } else if (operador === '-') {
        resultadoTemp -= numero;
      } else if (operador === '*') {
        resultadoTemp *= numero;
      } else if (operador === '/') {
        resultadoTemp /= numero;
      } else {
        throw new Error("Operação incorreta");
      }
    }

    if (!isNaN(resultadoTemp)) {
      res.value = resultadoTemp.toString();
    } else {
      throw new Error("Operação incorreta");
    }
  } catch (err) {
    alert(err.message);
  }
}



function reiniciar(){ //Esta função reinicia os campos de texto e resultado, definindo seus valores como uma string vazia.
  res.value = "";
  text.value = "";
}

function retroceder(){ //Esta função remove o último caractere do campo de texto text.
  text.value = text.value.slice(0,-1)
}

function toggleSign() { //Esta função muda o sinal +/-
  let resultado = res.value;
  if (resultado !== "") {
    res.value = (-parseFloat(resultado)).toString();
  }
}






