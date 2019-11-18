// A reminder of how a starter palette object is structured

// {
//   paletteName: 'Flat UI Colors Dutch',
//   id: 'flat-ui-colors-dutch',
//   emoji: '🇳🇱',
//   colors: [
//     { name: 'Sunflower', color: '#FFC312' },
//     { name: 'Energos', color: '#C4E538' },
//     { name: 'BlueMartina', color: '#12CBC4' },
//     { name: 'LavenderRose', color: '#FDA7DF' },
//     { name: 'BaraRose', color: '#ED4C67' },
//     { name: 'RadiantYellow', color: '#F79F1F' },
//     { name: 'AndroidGreen', color: '#A3CB38' },
//     { name: 'MediterraneanSea', color: '#1289A7' },
//     { name: 'LavenderTea', color: '#D980FA' },
//     { name: 'VerryBerry', color: '#B53471' },
//     { name: 'PuffinsBill', color: '#EE5A24' },
//     { name: 'PixelatedGrass', color: '#009432' },
//     { name: 'MerchantMarineBlue', color: '#0652DD' },
//     { name: 'ForgottenPurple', color: '#9980FA' },
//     { name: 'HollyHock', color: '#833471' },
//     { name: 'RedPigment', color: '#EA2027' },
//     { name: 'TurkishAqua', color: '#006266' },
//     { name: '20000LeaguesUnderTheSea', color: '#1B1464' },
//     { name: 'CircumorbitalRing', color: '#5758BB' },
//     { name: 'MagentaPurple', color: '#6F1E51' }
//   ]
// }

import chroma from 'chroma-js';

// define an array for the different levels
const levels = [ 50, 100, 200, 300, 400, 500, 600, 700, 800, 900 ];

// define a function that takes in a palette object and generates the different varieties of shades based on that palette's colors
function generatePalette(starterPalette) {
  // make new Palette
  let newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {
      // instead of hardcoding it, make it dynamic
    }
  };

  // build a new color object that will contain each level
  // and set them all to an empty array
  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  // fill in empty arrays by looping over every color (starterPalette.colors)
  // generate a scale with all those different colors
  // take the lightest color and add it as the '50' value
  // make sure to generate rgb and rgba as well
  // return new Palette
  for (let color of starterPalette.colors) return newPalette;
}

// create a range of colors (dark -> main color -> white)
// takes in a main hexColor
function getRange(hexColor) {
  // define the end color and set it to white
  const end = '#fff';

  // return an array that will include 3 colors:
  // a dark shade (generated),
  // the input hexColor (= our color)
  // and the end color (white)
  return [
    // The first color in the range will be the darkest.
    // Using black would produce too many dark colors when using it inside the
    // generateScale function, so instead we take the main color and darken it by 1.4.
    // That way the start of range color will be dark enough
    // but wont compromise half of the palette with too many dark shades.

    // Wrap hexColor into chroma() contructor to turn it into a chroma color
    // then darken it by 1.4 and get a hex value out of it
    chroma(hexColor).darken(1.4).hex(),
    hexColor,
    end
  ];
}

// generate a defined number of color variants based on the input color
// takes in a main hexColor
// and the number of colors to generate
function generateScale(hexColor, numberOfColors) {
  chroma.scale();
}
