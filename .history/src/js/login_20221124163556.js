let inp = document.querySelector('.input--js');

inp.addEventListener('focus', () => {
  inp.value = '';
});
