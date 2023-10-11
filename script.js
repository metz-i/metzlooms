const form = document.querySelector('#signup-form');

const veggie = form.querySelector('#veggie');
const creditCard = form.querySelector('#cc');
const termsCheckbox = form.querySelector('#terms');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('form submitted');
    console.log('veggie', veggie.value);
    console.log('creditCard', creditCard.value);
    console.log('terms', termsCheckbox.checked);
    
})