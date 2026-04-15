// Função para armazenar o perfil selecionado no localStorage
document.addEventListener('DOMContentLoaded', function() {
    const profiles = document.querySelectorAll('.profile');

    profiles.forEach(profile => {
        profile.addEventListener('click', function(event) {
            // Impede o comportamento padrão do link
            event.preventDefault();

            // Pega o nome do perfil (figcaption)
            const name = this.querySelector('figcaption').textContent;

            // Pega a imagem do perfil (src da img, relativo)
            const image = this.querySelector('img').getAttribute('src');

            // Armazena no localStorage
            const activeProfile = {
                name: name,
                image: image
            };
            localStorage.setItem('activeProfile', JSON.stringify(activeProfile));

            // Redireciona para a página do catálogo
            window.location.href = this.href;
        });
    });
});