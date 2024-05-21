const marvel_heros = ["thor", "ironman", "spiderman"]
const Dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(Dc_heros)

//console.log(marvel_heros);
//console.log(marvel_heros[3][2]);

const allHero = marvel_heros.concat(Dc_heros)

//console.log(allHero);


const all_new_heros = [...marvel_heros, ...Dc_heros]
//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// flat method---->returns a new array with all sub-array element concatenated into it recursivly upto specified depth

const real_another_array = another_array.flat(Infinity)  // infinity depth

//console.log(real_another_array)


// isArray method and Array.from method-------->

console.log(Array.isArray("hitesh"));  // false


console.log(Array.from("hitesh")); // [ 'h', 'i', 't', 'e', 's', 'h' ]


console.log(Array.from({ name: "hitesh" })); // interesting,  gives  the empty value because it does not determine weather it is going to be array of KEYS or VALUES


// Array.of method----> returns a new array from a set of element 

let score1=144
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));












