function openModal(modalID){
    const modal = document.getElementById(modalID);
    modal.classList.add('-show')
    modal.addEventListener('click', (evento) => {
        if (evento.target.id == modalID || evento.target.className == 'close-button'){
            modal.classList.remove('-show');
        };
    });
}



// classicos
const moscowMule = document.getElementById('recipeMoscow');
moscowMule.addEventListener('click', (modalID) => openModal('recipe-moscowMule'));


const mojito = document.getElementById('recipeMojito');
mojito.addEventListener('click', (modalID) => openModal('recipe-mojito'));

const sexBeach = document.getElementById('recipeSex');
sexBeach.addEventListener('click', (modalID) => openModal('recipe-sex'));

// autorais
const ceuAzul = document.getElementById('recipeCeuAzul');
ceuAzul.addEventListener('click', (modalID) => openModal('recipe-ceuAzul'));

const redBomb = document.getElementById('recipeRedBomb');
redBomb.addEventListener('click', (modalID) => openModal('recipe-redBomb'));

const noiteEstrelada = document.getElementById('recipeNoiteEstrelada');
noiteEstrelada.addEventListener('click', (modalID) => openModal('recipe-noiteEstrelada'));