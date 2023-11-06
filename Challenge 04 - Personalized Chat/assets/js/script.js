// CHAT BOT
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('chat-form');
    const userMessageInput = document.getElementById('user-input');
    const messagesContainer = document.querySelector('.messages');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
    
      const userMessage = userMessageInput.value;
      if (userMessage.trim() === '') return;
    
      const userMessageElement = document.createElement('div');
      userMessageElement.classList.add('message', 'you');
      userMessageElement.innerHTML = `
        <div class="top">
          <strong>Você</strong> - Agora
        </div>
        <div class="body">${userMessage}</div>
      `;
    
      const lastMessage = messagesContainer.querySelector('.message:last-child');
      messagesContainer.insertBefore(userMessageElement, lastMessage.nextSibling);
    
      userMessageInput.value = '';
    
      setTimeout(function() {
        const botMessageElement = document.createElement('div');
        botMessageElement.classList.add('message');
        botMessageElement.innerHTML = `
          <div class="top">
            <strong>Henrique</strong> - Agora
          </div>
          <div class="body">Oii, terminou ? 😊 </div>         
        `;
        messagesContainer.appendChild(botMessageElement);
    
        botMessageElement.scrollIntoView({ behavior: "smooth" });
      }, 1000);

      setTimeout(function() {
        const botMessageElement = document.createElement('div');
        botMessageElement.classList.add('message');
        botMessageElement.innerHTML = `
          <div class="top">
            <strong>Henrique</strong> - Agora
          </div>
        <div class="body"> 🚀 Caso tenha dúvidas, conecte-se ao meu <a href="https://www.linkedin.com/in/henriquezgm/" target="_blank">LinkedIn</a> e <a href="https://github.com/Zwiicker" target="_blank">GitHub</a>. 🚀</div>         
        `;
        messagesContainer.appendChild(botMessageElement);
    
        botMessageElement.scrollIntoView({ behavior: "smooth" });
      }, 5000);
    });
  
    userMessageInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        form.dispatchEvent(new Event('submit'));
      }
    });
  });
  


const messages = document.querySelector(".messages")  //Esta linha está criando uma variável chamada messages e a está associando ao primeiro elemento HTML que possui a classe CSS "messages". O método document.querySelector() é usado para selecionar o primeiro elemento que corresponde ao seletor CSS especificado. Neste caso, está procurando um elemento com a classe "messages".
messages.lastElementChild.scrollIntoView() //Esta parte está referenciando o último filho do elemento associado à variável messages. lastElementChild é uma propriedade que retorna o último elemento filho de um elemento.


//Portanto, a linha completa messages.lastElementChild.scrollIntoView() rola o último elemento filho do elemento associado à classe "messages" para a visão do usuário, se não estiver visível no momento.

 