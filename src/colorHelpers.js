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

  // build a new colors object that will contain each level
  // and set them all to an empty array
  for (let level of levels) {
    newPalette.colors[level] = [];
  }

  // fill in empty arrays by looping over every color (starterPalette.colors)
  // generate a scale with all those different colors
  // take the lightest color and add it as the '50' value
  // make sure to generate rgb and rgba as well
  // return new Palette
  for (let color of starterPalette.colors) {
    // "color" represents one color object from the palette
    // "color.color" is the actual color value
    // 10 is the numberOfColor we wish to generate
    // reverse it so the scale starts from white and gradually darkens from there
    let scale = generateScale(color.color, 10).reverse();

    // newPalette.colors object has all the levels set to an empty array
    // like -> colors: { 50: [], 100: [], ...}
    // there are 10 levels, and a scale of 10 colors has just been generated

    // loop through each newly generated color in scale and
    // push them to the corresponding level.
    for (let i in scale) {
      // push as an object
      // levels[i] is the current level we are on, like 50, 100, ...
      newPalette.colors[levels[i]].push({
        // name: "Sunflower 500"
        name: `${color.name} ${levels[i]}`,
        // since some of the color names have spaces in them, and
        // its most likely that we want to use the id for routing,
        // replace spaces with dashes instead using regEx
        // replace a space globally / /g
        // with a dash "-"
        id: color.name.toLowerCase().replace(/ /g, '-'),
        // set the hex value as the value that already came back to the scale array
        hex: scale[i],
        // set the rgb value, first turn it to a chroma color then call .css() on it.
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i]).css().replace('rgb', 'rgba').replace(')', ',1.0)')
      });
    }
  }

  return newPalette;
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
  // chroma.scale takes in the range of colors that got generated by getRange()
  // then set .mode() to "lab", as "lab" mode produces less greyish
  // then call .colors() in it and pass the numberOfColors
  // .colors(n) produces n equally distant colors from a scale.
  return chroma.scale(getRange(hexColor)).mode('lab').colors(numberOfColors);
}

// export it, import it, call it
export { generatePalette };

// console.log(generatePalette(seedColors[2])) shows how the generated Palette looks like:

// {paletteName: "Flat UI Colors Dutch", id: "flat-ui-colors-dutch", emoji: "🇳🇱", colors: {…}}
// colors:
// 50: (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// ...
// ...
// 800: Array(20)
// 0: {name: "Sunflower 800", id: "sunflower", hex: "#c28f03", rgb: "rgb(194,143,3)", rgba: "rgb(194,143,3,1.0)"}
// 1: {name: "Energos 800", id: "energos", hex: "#8baf10", rgb: "rgb(139,175,16)", rgba: "rgb(139,175,16,1.0)"}
// 2: {name: "BlueMartina 800", id: "bluemartina", hex: "#03958f", rgb: "rgb(3,149,143)", rgba: "rgb(3,149,143,1.0)"}
// 3: {name: "LavenderRose 800", id: "lavenderrose", hex: "#c473a9", rgb: "rgb(196,115,169)", rgba: "rgb(196,115,169,1.0)"}
// 4: {name: "BaraRose 800", id: "bararose", hex: "#b01839", rgb: "rgb(176,24,57)", rgba: "rgb(176,24,57,1.0)"}
// 5: {name: "RadiantYellow 800", id: "radiantyellow", hex: "#ba6d06", rgb: "rgb(186,109,6)", rgba: "rgb(186,109,6,1.0)"}
// 6: {name: "AndroidGreen 800", id: "androidgreen", hex: "#6c9610", rgb: "rgb(108,150,16)", rgba: "rgb(108,150,16,1.0)"}
// 7: {name: "MediterraneanSea 800", id: "mediterraneansea", hex: "#035874", rgb: "rgb(3,88,116)", rgba: "rgb(3,88,116,1.0)"}
// 8: {name: "LavenderTea 800", id: "lavendertea", hex: "#a14cc2", rgb: "rgb(161,76,194)", rgba: "rgb(161,76,194,1.0)"}
// 9: {name: "VerryBerry 800", id: "verryberry", hex: "#7d0d42", rgb: "rgb(125,13,66)", rgba: "rgb(125,13,66,1.0)"}
// 10: {name: "PuffinsBill 800", id: "puffinsbill", hex: "#af2007", rgb: "rgb(175,32,7)", rgba: "rgb(175,32,7,1.0)"}
// 11: {name: "PixelatedGrass 800", id: "pixelatedgrass", hex: "#01600b", rgb: "rgb(1,96,11)", rgba: "rgb(1,96,11,1.0)"}
// 12: {name: "MerchantMarineBlue 800", id: "merchantmarineblue", hex: "#0329a5", rgb: "rgb(3,41,165)", rgba: "rgb(3,41,165,1.0)"}
// 13: {name: "ForgottenPurple 800", id: "forgottenpurple", hex: "#614fc2", rgb: "rgb(97,79,194)", rgba: "rgb(97,79,194,1.0)"}
// 14: {name: "HollyHock 800", id: "hollyhock", hex: "#500b42", rgb: "rgb(80,11,66)", rgba: "rgb(80,11,66,1.0)"}
// 15: {name: "RedPigment 800", id: "redpigment", hex: "#aa0609", rgb: "rgb(170,6,9)", rgba: "rgb(170,6,9,1.0)"}
// 16: {name: "TurkishAqua 800", id: "turkishaqua", hex: "#003338", rgb: "rgb(0,51,56)", rgba: "rgb(0,51,56,1.0)"}
// 17: {name: "20000LeaguesUnderTheSea 800", id: "20000leaguesunderthesea", hex: "#040837", rgb: "rgb(4,8,55)", rgba: "rgb(4,8,55,1.0)"}
// 18: {name: "CircumorbitalRing 800", id: "circumorbitalring", hex: "#1d2c86", rgb: "rgb(29,44,134)", rgba: "rgb(29,44,134,1.0)"}
// 19: {name: "MagentaPurple 800", id: "magentapurple", hex: "#3e0525", rgb: "rgb(62,5,37)", rgba: "rgb(62,5,37,1.0)"}
// length: 20
// __proto__: Array(0)
// ...
// ...
// 900: (20) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// emoji: "🇳🇱"
// id: "flat-ui-colors-dutch"
// paletteName: "Flat UI Colors Dutch"
