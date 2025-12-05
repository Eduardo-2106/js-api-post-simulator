<script src="script.js">
const postForm = document.querySelector('#postForm'); // evento de submit
const postTitleInput = document.querySelector('#postTitle'); // retirar o título
const postBodyTextarea = document.querySelector('#postBody'); // retirar o conteúdo

const renderizadorTitulo = document.querySelector('#renderizador-titulo'); // renderizar o título
const renderizadorConteudo = document.querySelector('#renderizador-conteudo'); // renderizar o conteúdo

// adicionar evento de "submit" ao formulário
postForm.addEventListener('submit', async (e) => {
    e.preventDefault(); 
    
    // capturar os valores
    const titleValue = postTitleInput.value;
    const bodyValue = postBodyTextarea.value;

    const data = {
        title: titleValue,
        body: bodyValue, 
        userId: 1
    };

    const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
    
    try {
        // requisitar o post
        const response = await fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(data), 
            headers: {
                "Content-type": "application/json; charset=UTF-8" 
            }
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const postCriado = await response.json();

        // limpar o formulário
        postForm.reset(); 

        // retorno da API na página
        renderizadorTitulo.innerHTML = `Post ID ${postCriado.id}: ${postCriado.title}`;
        renderizadorConteudo.innerHTML = postCriado.body;

        console.log('Post criado com sucesso:', postCriado);

    } catch (error) {
        // tratamento de erros
        console.error('Ocorreu um erro ao tentar postar:', error);
        renderizadorTitulo.innerHTML = `Erro ao postar: ${error.message}`;
        renderizadorConteudo.innerHTML = 'Por favor, tente novamente.';
    }
});
</script>
