document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-degustacao');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // evita que a página recarregue
      alert('Formulário enviado com sucesso!');
      form.reset(); // limpa todos os campos
    });
  });