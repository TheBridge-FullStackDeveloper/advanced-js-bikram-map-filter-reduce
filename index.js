//RESUELVE LOS EJERCICIOS AQUI
//EJERCICIO 1:
const numbers = [4, 5, 6, 7, 8, 9, 10];
function elevados(numbers) {
return numbers.map(num => num ** num);
}

//EJERCICIO 2:
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
const result = foodList.map((food, index) => {
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