document.querySelectorAll('button').forEach(function(button){//seleciona todos os elementos <button> na página e  itera sobre cada um desses botões.
    button.addEventListener('click', //adiciona um ouvinte de evento de clique a cada botão selecionado.
            function(getElement){ //é a função que será executada quando o botão for clicado. Ela aceita um parâmetro chamado getElement que representa o evento de clique.
            const element = getElement.target // retorna o elemento DOM que foi clicado (neste caso, o botão que acionou o evento de clique).
            const button = element.outerHTML //armazena essa string na variável button.
            changeButtons(button) //Chama uma função chamada changeButtons e passa a string HTML do botão como argument.
        })
    })

async function changeButtons(button){  //comportamento assíncrono (async), o que significa que ela pode conter operações que levam um tempo indefinido para serem concluídas, como por exemplo, requisições de rede ou operações de leitura/escrita de arquivo.
    await replace(button) //Esta linha chama uma função chamada replace e aguarda até que ela seja concluída antes de continuar com a execução da função changeButtons. O uso de await implica que a função replace provavelmente retorna uma Promise. A execução da função é pausada até que a Promise seja resolvida ou rejeitada.
    document.getElementById('descriptions').innerText = '' //Esta linha limpa o conteúdo do elemento HTML com o ID 'descriptions'. Isso significa que qualquer texto dentro desse elemento será removido.
    document.querySelectorAll('#buttons').forEach(el => { //Esta parte do código seleciona todos os elementos com o ID 'buttons' e itera sobre eles usando forEach.
      el.addEventListener('click', function(getElement){  //Para cada elemento com ID 'buttons', um ouvinte de evento de clique é adicionado. Isso significa que quando um desses elementos for clicado, a função dentro do evento será executada. 
            const element = getElement.target //Dentro do evento de clique, esta linha obtém o elemento que foi clicado.
            descriptions(element) //Em seguida, a função descriptions é chamada, passando o elemento clicado como argumento. Presumivelmente, esta função é responsável por fazer alguma operação com base no elemento clicado.
        })
    })
}

function replace(button){ //HTML do elemento com o ID 'buttons' é atualizado para incluir três versões modificadas do botão original.
    if(button.includes('primary')){ //Verifica se a string do botão contém a palavra 'primary'. Isso indica que o botão possui a classe 'primary'.
        const button1 = button
        const button2 = button.replace('primary', 'secondary').replace('PRIMARY', 'SECONDARY')
        const button3 = button.replace('primary', 'tertiary').replace('PRIMARY', 'TERTIARY')
        buttons.innerHTML = `${button1} ${button2} ${button3}`
    } else if (button.includes('secondary')){
        const button1 = button.replace('secondary', 'primary').replace('SECONDARY', 'PRIMARY')
        const button2 = button
        const button3 = button.replace('secondary', 'tertiary').replace('SECONDARY', 'TERTIARY')
        buttons.innerHTML = `${button1} ${button2} ${button3}`
    } else if (button.includes('tertiary')){
        const button1 = button.replace('tertiary', 'primary').replace('TERTIARY', 'PRIMARY')
        const button2 = button.replace('tertiary', 'secondary').replace('TERTIARY', 'SECONDARY')
        const button3 = button
        buttons.innerHTML = `${button1} ${button2} ${button3}`
    }
}

function descriptions(element){
    const checkClass = element.classList // Esta linha obtém a lista de classes associadas ao elemento de entrada e a atribui à variável checkClass
    const text = document.getElementById('descriptions') // Isso obtém uma referência a um elemento HTML com o ID 'descriptions' e a atribui à variável text. Este será o elemento onde as explicações serão exibidas.

    if(checkClass.contains('tester')){
        text.innerText = 'Escolha um botão ao lado para testar.'
    } 
    else if(checkClass.contains('default')){
        text.innerText = 'Este é um botão simples!'
    } 
    else if(checkClass.contains('hover')){
        text.innerText = 'Este botão tem um efeito hover!'
    } 
    else if(checkClass.contains('focus')){
        text.innerText = 'Este botão tem foco!'
    } 
    else if(checkClass.contains('disabled')){
        text.innerText = 'Este botão está desabilitado!'
    } 
    else if(checkClass.contains('loading')){
        text.innerText = 'Este botão está carregando...'
    } 
    else if(checkClass.contains('movable')){
        text.innerText = 'Este botão pode ser movido!'
    }
}