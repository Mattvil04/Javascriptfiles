const pokemonList = document.querySelector("#pokemonList");
const buttonsHeader = document.querySelectorAll(".btn-header");
const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
let URL = "https://pokeapi.co/api/v2/pokemon/";

// Fetch and display all Pokémon
for (let i = 1; i <= 151; i++) {
  fetch(URL + i)
    .then((response) => response.json())
    .then((data) => showPokemon(data));
}

// Function to display a Pokémon card
function showPokemon(poke) {
  let types = poke.types
    .map((type) => `<p class="${type.type.name} type">${type.type.name}</p>`)
    .join("");

  let pokeId = poke.id.toString().padStart(3, "0");

  const div = document.createElement("div");
  div.classList.add("pokemon");
  div.innerHTML = `
    <p class="pokemon-id-back">#${pokeId}</p>
    <div class="pokemon-imagen">
        <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
    </div>
    <div class="pokemon-info">
        <div class="name-container">
            <p class="pokemon-id">#${pokeId}</p>
            <h2 class="pokemon-name">${poke.name}</h2>
        </div>
        <div class="pokemon-types">
            ${types}
        </div>
        <div class="pokemon-stats">
            <p class="stat">${poke.height}m</p>
            <p class="stat">${poke.weight}kg</p>
        </div>
    </div>
  `;
  pokemonList.append(div);
}

// Filter Pokémon based on type buttons
buttonsHeader.forEach((button) =>
  button.addEventListener("click", (event) => {
    const buttonId = event.currentTarget.id;

    pokemonList.innerHTML = "";

    for (let i = 1; i <= 151; i++) {
      fetch(URL + i)
        .then((response) => response.json())
        .then((data) => {
          if (buttonId === "see-all") {
            showPokemon(data);
          } else {
            const types = data.types.map((type) => type.type.name);
            if (types.some((type) => type.includes(buttonId))) {
              showPokemon(data);
            }
          }
        });
    }
  })
);

// Filter Pokémon based on search input
searchButton.addEventListener("click", () => {
  const searchTerm = searchInput.value.toLowerCase().trim();

  pokemonList.innerHTML = "";

  for (let i = 1; i <= 151; i++) {
    fetch(URL + i)
      .then((response) => response.json())
      .then((data) => {
        const pokemonName = data.name.toLowerCase();
        if (pokemonName.includes(searchTerm)) {
          showPokemon(data);
        }
      });
  }
});