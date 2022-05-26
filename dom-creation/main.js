/* exported pokedex */

var pokedex = [
  {
    number: '001',
    name: 'Bulbasaur',
    description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
    imageUrl: 'images/bulbasaur.png'
  },
  {
    number: '004',
    name: 'Charmander',
    description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
    imageUrl: 'images/charmander.png'
  },
  {
    number: '007',
    name: 'Squirtle',
    description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
    imageUrl: 'images/squirtle.png'
  },
  {
    number: '002',
    name: 'Ivysaur',
    description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
    imageUrl: 'images/ivysaur.png'
  },
  {
    number: '005',
    name: 'Charmeleon',
    description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
    imageUrl: 'images/charmeleon.png'
  },
  {
    number: '008',
    name: 'Wartortle',
    description: 'It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.',
    imageUrl: 'images/wartortle.png'
  },
  {
    number: '003',
    name: 'Venusaur',
    description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
    imageUrl: 'images/venusaur.png'
  },
  {
    number: '006',
    name: 'Charizard',
    description: 'It spits fire that is hot enough to melt boulders. It may cause forest fires by blowing flames.',
    imageUrl: 'images/charizard.png'
  },
  {
    number: '009',
    name: 'Blastoise',
    description: 'It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.',
    imageUrl: 'images/blastoise.png'
  }
];

function renderPokemon(pokemon) {
  var columnDiv = document.createElement('div');
  columnDiv.className = 'column-third';
  var cardDiv = document.createElement('div');
  cardDiv.className = 'pokemon-card';
  columnDiv.appendChild(cardDiv);
  var img = document.createElement('img');
  img.setAttribute('src', pokemon.imageUrl);
  cardDiv.appendChild(img);
  var cardTextDiv = document.createElement('div');
  cardTextDiv.className = 'pokemon-card-text';
  cardDiv.appendChild(cardTextDiv);
  var nameH2 = document.createElement('h2');
  var pokemonName = document.createTextNode(pokemon.name);
  nameH2.appendChild(pokemonName);
  cardTextDiv.appendChild(nameH2);
  var numberH3 = document.createElement('h3');
  var pokemonNum = document.createTextNode(pokemon.number);
  numberH3.appendChild(pokemonNum);
  cardTextDiv.appendChild(numberH3);
  var descript = document.createElement('p');
  var description = document.createTextNode(pokemon.description);
  descript.appendChild(description);
  cardTextDiv.appendChild(descript);

  return columnDiv;
}

var toAdd = document.querySelector('div.row');
for (var i = 0; i < pokedex.length; i++) {
  toAdd.appendChild(renderPokemon(pokedex[i]));
}

// function renderPokemon(pokemon) {
//   var toAdd = document.querySelector('div.row');
//   for (var i = 0; i < pokedex.length; i++) {
//     var columnDiv = document.createElement('div');
//     columnDiv.className = 'column-third';
//     toAdd.appendChild(columnDiv);
//     var cardDiv = document.createElement('div');
//     cardDiv.className = 'pokemon-card';
//     columnDiv.appendChild(cardDiv);
//     var img = document.createElement('img');
//     img.setAttribute('src', pokedex[i].imageUrl);
//     cardDiv.appendChild(img);
//     var cardTextDiv = document.createElement('div');
//     cardTextDiv.className = 'pokemon-card-text';
//     cardDiv.appendChild(cardTextDiv);
//     var nameH2 = document.createElement('h2');
//     var pokemonName = document.createTextNode(pokedex[i].name);
//     nameH2.appendChild(pokemonName);
//     cardTextDiv.appendChild(nameH2);
//     var numberH3 = document.createElement('h3');
//     var pokemonNum = document.createTextNode(pokedex[i].number);
//     numberH3.appendChild(pokemonNum);
//     cardTextDiv.appendChild(numberH3);
//     var descript = document.createElement('p');
//     var description = document.createTextNode(pokedex[i].description);
//     descript.appendChild(description);
//     cardTextDiv.appendChild(descript);
//   }
// }
