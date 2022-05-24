import { checkAuth, getWorkshops, logout } from '../fetch-utils.js';
import { renderWorkshop } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const workshopsEl = document.querySelector('workshops-container');

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayWorkshops() {
    const main = document.querySelector('main');
    main.textContent = '';
    const data = await getWorkshops();
    console.log(data);
}
displayWorkshops();