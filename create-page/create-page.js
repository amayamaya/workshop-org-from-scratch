import { checkAuth, createParticipant, getWorkshops, logout } from '../fetch-utils.js';
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
    const form = new FormData(participantForm);
    console.log(form.get('workshop_id'));
    await createParticipant({
        name: form.get('name'),
        contact: form.get('contact'),
        workshop_id: form.get('workshop_id'),
    });
    console.log(participantForm);
    // window.location.href = '/workshop-page';
});

checkAuth();
logoutButton.addEventListener('click', () => {
    logout();
});