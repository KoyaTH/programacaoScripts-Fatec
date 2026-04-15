const btnResposta = document.getElementById("btnResposta")
const btnLimpar = document.getElementById("btnLimpar")
const perguntas = document.getElementById("pergunta")
let mostrarRespostas = document.getElementById("verrespostas")
let eventoExemplo = document.getElementById("eventoExemplo")
let mostrarHistorico = document.getElementById("mostrarHistorico")
let historico = []
let perguntaTexto = ""
let perguntasTexto = []

btnResposta.addEventListener("click", function () {
    if (perguntas.value == 1) {
        mostrarRespostas.innerHTML = "Vetores são uma Lista que pode armazenar varios valores em uma unica variavel<br> cada valor do vetor é separado em indices<br> começando do 0 ['Indice0', 'indice1', 'indice2']"
        eventoExemplo.innerHTML = ""
        perguntaTexto = "O que são Vetores e como eles são utilizados em JavaScript"
    }
    else if (perguntas.value == 2) {
        mostrarRespostas.innerHTML = "Funções é um bloco de instruções que podem ser chamados de qualquer lugar no codigo<br> serve para não precisar escrever o mesmo codigo toda hora<br>  e tambem é possivel mandar parametros para ele: <br> function soma(n1, n2){<br>return n1+n2<br>}<br> posso chamar essa função assim: soma(10,30)<br> e vai me retornar 40"
        eventoExemplo.innerHTML = ""
        perguntaTexto = "O que são Funções e como elas são utilizadas em JavaScript"
    } else if (perguntas.value == 3)  {
        mostrarRespostas.innerHTML = "Eventos é algo semelhante a Funções, mas elas normalmente só são ativadas Caso Aconteça algo<br> Clicar em um botão<br> Selecionar alguma opção<br> sair da aba<br> esperar a aba carregar<br> pressionar uma tecla especifica do teclado<br> Entre outros eventos"
        eventoExemplo.innerHTML = "Exemplo: Coloca o Mouse Em Cima de Mim"
        perguntaTexto = "O que são Eventos?"
    }

    perguntasTexto.push(perguntaTexto)
    historico.push(mostrarRespostas.innerHTML)
    escrevendoHistorico(perguntasTexto)

    console.log(historico)
})

btnLimpar.addEventListener("click", function () {
    historico = []
    perguntasTexto = []
    mostrarHistorico.innerHTML = "";
})

eventoExemplo.addEventListener("mouseover", function () {
    eventoExemplo.innerHTML = "Seu Mouse está em cima do Texto"
})
eventoExemplo.addEventListener("mouseout", function () {
    eventoExemplo.innerHTML = "Coloca o Mouse Em Cima de Mim"
})

function escrevendoHistorico(perguntasTexto) {
    mostrarHistorico.innerHTML = "";
    for (let i = 0; i < historico.length; i++) {
        let tr = document.createElement("tr")
        mostrarHistorico.appendChild(tr)
        let tdPergunta = document.createElement("td")
        let tdResposta = document.createElement("td")
        tdPergunta.innerHTML ="<b>" + perguntasTexto[i] + "</b>"
        tdResposta.innerHTML = historico[i]
        tr.appendChild(tdPergunta)
        tr.appendChild(tdResposta)
        console.log(historico)
    }
}