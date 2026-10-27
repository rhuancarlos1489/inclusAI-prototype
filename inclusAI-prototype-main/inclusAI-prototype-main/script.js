function enviar() {
    let mensagem = document.getElementById('aviso')
    let inputPergunta = document.getElementById('perguntaCaixa')
    let chat = document.getElementsByClassName('questInput')
    let texto = inputPergunta.value
    if(inputPergunta.value == '') {
        inputPergunta.placeholder = 'Digite alguma dúvida ou material para que o assistente possa te auxiliar!'
        aviso.textContent = 'Este campo é obrigatório!'
    } 
}
