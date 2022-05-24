import { checkAuth, getWorkshops, logout } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const workshopsEl = document.querySelector('.workshops-container');

logoutButton.addEventListener('click', () => {
    logout();
});

async function displayWorkshops() {
    // const main = document.querySelector('main');
    workshopsEl.textContent = '';
    const data = await getWorkshops();
    console.log(data);
    for (let workshop of data) {
        const div = document.createElement('div');
        div.classList.add('workshop');

        const h3 = document.createElement('h3');
        h3.textContent = workshop.name;

        const div2 = document.createElement('div');
        div2.classList.add('bunnies');

        div.append(h3, div2);
        workshopsEl.append(div);
    }
    // console.log(workshopsEl);
}
displayWorkshops();
