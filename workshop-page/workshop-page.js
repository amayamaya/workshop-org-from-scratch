import {
    addParticipant,
    checkAuth,
    deleteParticipant,
    getWorkshops,
    logout,
} from '../fetch-utils.js';
import { renderWorkshop } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');
const workshopsEl = document.querySelector('.workshops-container');
const addParticipantButton = document.getElementById('participantButton');

logoutButton.addEventListener('click', () => {
    logout();
});

addParticipantButton.addEventListener('click', () => {
    addParticipant();
});

async function displayWorkshops() {
    // const main = document.querySelector('main');
    workshopsEl.textContent = '';
    const data = await getWorkshops();
    // console.log(data);
    for (let workshop of data) {
        const workshopDiv = renderWorkshop(workshop);

        const ul = document.createElement('ul');
        // console.log(workshop.participants);
        for (let participant of workshop.participants) {
            // const div3 = document.createElement('div');
            const li = document.createElement('li');
            li.textContent = `${participant.name}: ${participant.contact}`;
            ul.append(li);

            li.addEventListener('click', async () => {
                await deleteParticipant(participant.id);
                displayWorkshops();
            });
        }
        workshopDiv.append(ul);
        workshopsEl.append(workshopDiv);
    }
    // console.log(workshopsEl);
}
displayWorkshops();
