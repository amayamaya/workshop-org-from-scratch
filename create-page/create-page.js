import { checkAuth, logout } from '../fetch-utils.js';
import { renderOption } from '../render-utils.js';

const participantForm = document.querySelector('.participant-form');
const workshopSelct = document.getElementById('workshops')
const logoutButton = document.getElementById('logout');



participantForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const Form = new FormData(participantForm);
    console.log(Form);
});

checkAuth();
logoutButton.addEventListener('click', () => {
    logout();
});