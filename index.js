//RESUELVE LOS EJERCICIOS AQUI
//EJERCICIO 1:
const numbers = [4, 5, 6, 7, 8, 9, 10];
function elevados(numbers) {
return numbers.map(num => num ** num);
}

//EJERCICIO 2:
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
const result2 = foodList.map((food, index) => {
  if (index === 0) {
    return `Como soy de Italia, amo comer ${food}`;
  } else if (index === 1) {
    return `Como soy de Japón, amo comer ${food}`;
  } else if (index === 2) {
    return `Como soy de Valencia, amo comer ${food}`;
  } else {
    return `Aunque no como carne, el ${food} es sabroso`;
  }
});

//EJERCICIO 3:
const staff = [
  {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];
const result3 = staff.map((persona) => {
  return `${persona.name} es ${persona.role} y le gusta ${persona.hobbies[0]} y ${persona.hobbies[1]}`;
});

//EJERCICIO 4: Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result4 = numbers2.filter(num => num % 2 !== 0);

//EJERCICIO 5:  Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo
const foodList2 =[
{name: 'Tempeh', isVeggie: true},
{name: 'Cheesbacon burguer', isVeggie: false},
{name: 'Entrecot',isVeggie: false},
];
const result5 =foodList2
  .filter(plato => plato.isVeggie === true) // 1. Filtramos: solo pasan los veganos
  .map(plato => {
let adjetivo = plato.name.includes('burguer') ? 'rica' : 'rico';
return `Que ${adjetivo} ${plato.name} me voy a comer!`
});

//EJERCICIO 6: Dado el array inventory, devolver un array con los nombres de los elementos que valgan más de 300 euros.
const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a Cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];
const result6 = inventory
  .filter(articulo => articulo.price > 300).map(articulo => articulo.name);

  //EJERCICIO 7: Dado el siguiente array numeros [39, 2, 4, 25, 62], obten la multiplicación de todos los elementos del array
  const numbers3 = [39, 2, 4, 25, 62]
const result7 = numbers3.reduce((acc, num) => acc * num, 1);


  //EJERCICIO 8: Concatena todos los elementos del array con reduce para que devuelva una sola frase
const sentenceElements = [
  'Me',
  'llamo',
  'Thaís',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];
const result8 = sentenceElements.reduce((acc, name) => {
  return `${acc} ${name}`;
});