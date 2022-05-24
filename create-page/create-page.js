import { checkAuth, getWorkshops, logout } from '../fetch-utils.js';
import { renderOption } from '../render-utils.js';

const participantForm = document.querySelector('.participant-form');
const workshopSelect = document.getElementById('workshops');
const logoutButton = document.getElementById('logout');

async function onLoad() {
    const workshops = await getWorkshops();
    for (let workshop of workshops) {
        const workshopOption = renderOption(workshop);
        workshopSelect.append(workshopOption);
    }
}
onLoad();

participantForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const Form = new FormData(participantForm);
    console.log(Form);
});

checkAuth();
logoutButton.addEventListener('click', () => {
    logout();
});