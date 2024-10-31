const menu = require('./mcDonalds');
const guestsDatabase = require('./data.json');

// =================================================
// PARTE 1
// =================================================

// Requisito 1 - Crie uma função que divida uma frase
const splitSentence = (phrase) => phrase.split(' ');

// Requisito 2 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol
const footballPoints = (wins, ties) => {
  const vitoria = wins * 3;
  const empate = ties * 1;

  return vitoria + empate;
};

// Requisito 3 - Crie uma função que adiciona músicas em uma playlist

let playlist = [];
const addMusics = (artistName, musicName, musicTime) => {
  const music = {
    artist: artistName,
    music: musicName,
    musicTime,
  };

  playlist.push(music);
  return music;
};

// =================================================
// PARTE 2
// =================================================

// Requisito 4 - Crie uma função que retorna o produto mais caro de acordo com uma categoria
function moreExpensive(data, category) {
  let productName = '';
  let productPrice = 0;

  for (let index = 0; index < data[category].length; index += 1) {
    if (data[category][index].price > productPrice) {
      productPrice = data[category][index].price;
      productName = data[category][index].name;
    }
  }
  return `O produto mais caro é: ${productName}, que custa: R$${productPrice.toFixed(2)}.`;
}

// Requisito 5 - Crie uma função que verifica se um determinado item já existe
function checkItem(data, category, item) {
  for (let index = 0; index < data[category].length; index += 1) {
    if (data[category][index].name === item) {
      return true;
    }
  }
  return false;
}

// Requisito 6 - Crie uma função que adiciona um novo item caso ele ainda não exista
function addNewItem(data, category, item, price, ingredients, calories) {
  for (let index = 0; index < data[category].length; index += 1) {
    if (data[category][index].name === item) {
      return `O produto: "${item}" já existe!`;
    }
  }

  const newItem = {
    name: item,
    price,
    ingredients,
    calories,
  };

  data[category].push(newItem);
  return newItem;
}

// Requisito 7 - Crie uma função que conta a quantidade de pessoas por gênero
function counterGender(data) {
  countMale = 0;
  countFemale = 0;

  for (let index = 0; index < data.guests.length; index += 1) {
    if (data.guests[index].gender === 'male') {
      countMale += 1;
    } else if (data.guests[index].gender === 'female') {
      countFemale += 1;
    }
  }

  const countGender = {
    male: countMale,
    female: countFemale,
  };

  return countGender;
}

// =================================================
// PARTE 3
// =================================================

// Requisito 8 - Crie uma função que retorna os elementos de um determinado estado
function filterState(data, state) {
  let states = [];

  for (let index = 0; index < data.guests.length; index += 1) {
    if (data.guests[index].address.state === state) {
      states.push(data.guests[index]);
    }
  }

  return states;
}

console.log(filterState(guestsDatabase, 'Wisconsin'));
// Requisito 9 - Crie uma função que altera a propriedade `picture`

// Requisito 10 - Crie um função que gera um relatório

// Não modifique as linhas abaixo
module.exports = {
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  addMusics: typeof addMusics === 'function' ? addMusics : (() => {}),
  playlist: typeof playlist === 'undefined' ? [] : playlist,
  moreExpensive: typeof moreExpensive === 'function' ? moreExpensive : (() => {}),
  checkItem: typeof checkItem === 'function' ? checkItem : (() => {}),
  addNewItem: typeof addNewItem === 'function' ? addNewItem : (() => {}),
  counterGender: typeof counterGender === 'function' ? counterGender : (() => {}),
  filterState: typeof filterState === 'function' ? filterState : (() => {}),
  changePicture: typeof changePicture === 'function' ? changePicture : (() => {}),
  generateReport: typeof generateReport === 'function' ? generateReport : (() => {}),
};
