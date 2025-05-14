document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-degustacao');
  
    form.addEventListener('submit', function (e) {
      alert('Formulário enviado com sucesso!');
      form.reset(); 
    });
  });