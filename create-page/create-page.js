import { checkAuth, logout } from '../fetch-utils.js';

const form = document.querySelector('.participant-form');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const participantForm = new FormData(form);
    console.log(participantForm);
});

checkAuth();
logoutButton.addEventListener('click', () => {
    logout();
});