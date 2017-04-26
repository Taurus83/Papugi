var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach';
var animal = 'Zielone słonie';

var animalUpperCased = animal.toUpperCase('Zielone słonie');
console.log(animalUpperCased);

var textCharsAfter = text.replace('Papugi', animalUpperCased);
console.log(textCharsAfter);

var partOfText = textCharsAfter.slice(0, textCharsAfter.length/2);

console.log(partOfText);