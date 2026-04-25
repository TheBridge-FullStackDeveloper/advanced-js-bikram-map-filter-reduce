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