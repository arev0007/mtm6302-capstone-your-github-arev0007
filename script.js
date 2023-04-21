const pokedex = document.getElementById('pokedex');
const pokeCache = {};
let count = 20;

//display poke
const displayPokemon = (pokemon) => {
    const pokemonHTMLString = pokemon //generate a string of html 
        .map(
            (p) => `
        <li class="card" onclick="selectPokemon(${p.id})">
            <img class="card-image" src="${p.image}"/>
            <h2 class="card-title">${p.name}</h2>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;

};// retrieve an array with the image, name, and type info

//select poke -poke info
const selectPokemon = async (id) => {
    if (!pokeCache[id]) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const pokemon = await res.json();  //individuals poke
        pokeCache[id] = pokemon;// id=key pokeman=value
        displayPopup(pokemon);
    } else {
        displayPopup(pokeCache[id]);
    }
};
// display popup
const displayPopup = (pokemon) => {
    const type = pokemon.types.map((type) => type.type.name).join(', ');
    const abilities = pokemon.abilities.map((ability) => ability.ability.name).join(', ');
    const image = pokemon.sprites['front_default'];
    const htmlString = `
        <div class="popup">
            <button id="closeBtn" onclick="closePopup()">Close</button>
            <div class="card">
                <img class="card-image" src="${image}"/>
                <h2 class="card-title">${pokemon.name}</h2>
                <p class="card-subtitle">Type: ${type}</p>
                <p class="card-subtitle">Height: ${pokemon.height} | Weight: ${pokemon.weight}</p>
                <p class="card-subtitle">Abilities: ${abilities}</p>
                </div>
        </div>
    `;
    pokedex.innerHTML = htmlString + pokedex.innerHTML;
};

const closePopup = () => {
    const popup = document.querySelector('.popup'); //find the popup
    popup.parentElement.removeChild(popup);
};

const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${count}`;
    const res = await fetch(url);
    const data = await res.json();  //convert that response to get the JSON data - we use await because it's an asynchronous function.
    const pokemon = data.results.map((result, index) => ({
        ...result,
        id: index + 1,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
        }.png`,
    }));
    displayPokemon(pokemon);
};//get each result and the index of each result.

fetchPokemon();

const addMore = () => {
    count += 20;
    fetchPokemon();
};

const addMoreButton = document.createElement('button');
addMoreButton.innerHTML = 'Add More';
addMoreButton.addEventListener('click', addMore);

const collection = document.querySelector('.collection');
collection.insertBefore(addMoreButton, pokedex.nextSibling);

