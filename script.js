document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('info-modal');
    const posters = document.querySelectorAll('.poster');
    const closeButton = document.querySelector('.close-button');

    // Elementos dentro do modal que serão preenchidos
    const modalTitle = document.getElementById('modal-title');
    const modalMembers = document.getElementById('modal-members');
    const modalSubject = document.getElementById('modal-subject');
    const modalDescription = document.getElementById('modal-description');

    posters.forEach(poster => {
        poster.addEventListener('click', () => {
            // Pega os dados do pôster clicado
            const title = poster.dataset.title;
            const members = poster.dataset.members;
            const subject = poster.dataset.subject;
            const description = poster.dataset.description;

            // Preenche o modal com os dados
            modalTitle.textContent = title;
            modalMembers.textContent = members;
            modalSubject.textContent = subject;
            modalDescription.textContent = description;

            // Mostra o modal
            modal.style.display = 'block';
        });
    });

    // Função para fechar o modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Fecha ao clicar no 'X'
    closeButton.addEventListener('click', closeModal);

    // Fecha ao clicar fora do conteúdo do modal
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });
});