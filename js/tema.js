<<<<<<< HEAD
//Função para alternar entre os temas claro e escuro
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');
    //Salva a preferência do usuário no localStorage
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
}

//Aplica o tema salva ao carregar a página
window.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
=======
//Função para alternar entre os temas claro e escuro
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('light-mode');
    //Salva a preferência do usuário no localStorage
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
}

//Aplica o tema salva ao carregar a página
window.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
    }
>>>>>>> master
});