const fs = require('fs');
fs.copyFileSync("file1.txt", "file2.txt");


const superheroes = require('superheroes');
const supervillains = require('supervillains');

supervillains.all;
//=> ['Abattoir', 'Able Crown', …]
superheroes.all;
//=> ['3-D Man', 'A-Bomb', �]

var mySuperHero = superheroes.random();
var mySuperVillain = supervillains.random();
console.log(mySuperHero+" fights "+mySuperVillain);
