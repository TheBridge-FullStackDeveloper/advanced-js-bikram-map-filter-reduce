let randomize = (maxNum = 177, min = 0) => {
    return (Math.floor(Math.random() * maxNum) + min);
}

let generateArray = (elementos = randomize(), min = 0, max = randomize()) => {
    let array = [];
    for (let i = 0; i < elementos; i++) {
        array.push(randomize(max) - min);
    }
    return (array);
}

let printArray = (array) => {
    return ("[" + array.map(element => element).join(", ") + "]");
}

let randomizeArrayOrder = (array) => {
    let rndArray = generateArray(array.length);
    for (let i = 0; i < array.length; i++) {
        if (rndArray[i] < rndArray[i + 1]) {
            let temp = rndArray[i];
            rndArray[i] = rndArray[i + 1];
            rndArray[i + 1] = temp;
            temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }
    }
    return (array);
}



describe('Ejercicios map', function () {



    describe('Ejercicio 1. Dado el array numbers crear una función llamada "elevados" que sea el resultado de elevar cada número a si mismo.', function () {

        it('El array numbers está declarado', function () {
            expect(numbers)
                .toEqual([4, 5, 6, 7, 8, 9, 10]);
        });

        it('Da como resultado [256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]', function () {
            expect(elevados())
                .toEqual([256, 3125, 46656, 823543, 16777216, 387420489, 10000000000]);
        });
        //TODO add this test to all tests
        it('Utiliza el método map', function () {
            expect(elevados.toString().indexOf('.map('))
                .not.toEqual(-1);
        });
    });


    describe(`Ejercicio 2. Dado el array foodList, generar un segundo array llamado result2 que consiga generar de salida el siguiente resultado ['Como soy de Italia, amo comer Pizza',
'Como soy de Japón, amo comer Ramen',
'Como soy de Valencia, amo comer Paella',
'Aunque no como carne, el Entrecot es sabroso']`, function () {
        it('El array foodList está correctamente declarado', function () {
            expect(foodList).toEqual(['Pizza', 'Ramen', 'Paella', 'Entrecot']);

        })
        it(`La variable result2 devuelve el array correcto`, function () {
            expect(result2).toEqual([
                'Como soy de Italia, amo comer Pizza',
                'Como soy de Japón, amo comer Ramen',
                'Como soy de Valencia, amo comer Paella',
                'Aunque no como carne, el Entrecot es sabroso'])
        })
    });


    describe(`Ejercicio 3. Dado el array staff, generar un segundo array staffDescriptions con el siguiente resultado [
    'Pepe es The Boss y le gusta leer y ver pelis',
    'Ana es becaria y le gusta nadar y bailar',
    'Luis es programador y le gusta dormir y comprar',
    'Carlos es secretario y le gusta futbol y queso'
] `, function () {
        it(`La variable result3 devuelve el array correcto`, function () {
            expect(result3).toEqual([
                'Pepe es The Boss y le gusta leer y ver pelis',
                'Ana es becaria y le gusta nadar y bailar',
                'Luis es programador y le gusta dormir y comprar',
                'Carlos es secretario y le gusta futbol y queso'
            ])
        })
        it('El array staff está declarado', function () {
            expect(staff).toEqual([
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
            ])
        })
    });

})


describe('Ejercicios filter', function () {
    describe('Ejercicio 4 - Crea un segundo array result4 a partir del array numbers2 que devuelva solo los impares'
        , function () {
            it('El Array numbers2 está declarado', function () {
                expect(numbers2).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
            })
            it('El Array result4 devuelve el valor correcto', function () {
                expect(result4).toEqual([1, 3, 5, 7, 9]);
            })

        })

    describe('Ejercicio 5 - Dado el array foodList2, genera un segundo array result5 que filtre los platos veganos y saque una sentencia como la del ejemplo'

        , function () {
            it('El Array foodList2 está declarado', function () {
                expect(foodList2).toEqual([
                    {
                        name: 'Tempeh',
                        isVeggie: true
                    },
                    {
                        name: 'Cheesbacon burguer',
                        isVeggie: false
                    },
                    {
                        name: 'Tofu burguer',
                        isVeggie: true
                    },
                    {
                        name: 'Entrecot',
                        isVeggie: false
                    }
                ])
            })
            it('El Array result5 devuelve el valor correcto', function () {
                expect(result5).toEqual([
                    'Que rico Tempeh me voy a comer!',
                    'Que rica Tofu burguer me voy a comer!'
                ]);
            })

        })
    describe('Ejercicio 6 - Dado el array inventory, devolver un array result 6 con los nombres de los elementos que valgan más de 300 euros', function () {
        it('El array inventory está declarado', function () {
            expect(inventory).toEqual([
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
            ])
        })
        it('El array result6 devuelve el valor correcto', function () {
            //TODO correct array in exercise HEADING
            expect(result6).toEqual([
                'TV Samsung',
                'Viaje a Cancún'
            ])
        })

    })

})


describe('Ejercicios reduce', function () {
    describe('Ejercicio 7 - Dado el array numeros3, obten la multiplicación de todos los elementos del array en la variale result7', function () {
        it('La variable result7 devuelve el resultado correcto', function () {
            expect(result7).toEqual(483600)
        });
        it('El array numeros3 está declarado', function () {
            expect(numeros3).toEqual([39, 2, 4, 25, 62]);
        })

    })
    describe('Ejercicio 8 - Concatena todos los elementos del array con reduce para que devuelva una sola frase en la variable result8', function () {

        it('Posicion 0 correcta', function () {
            expect(sentenceElements[0]).toEqual('Me')
        })

        it('Posicion 1 correcta', function () {
            expect(sentenceElements[1]).toEqual('llamo')
        })

        it('Posicion 3 correcta', function () {
            expect(sentenceElements[3]).toEqual('y')
        })

        it('Posicion 3 correcta', function () {
            expect(sentenceElements[4]).toEqual('quiero')
        })

        it('Posicion 4 correcta', function () {
            expect(sentenceElements[5]).toEqual('sentir')
        })

        it('Posicion 5 correcta', function () {
            expect(sentenceElements[6]).toEqual('la')
        })

        it('Posicion 6 correcta', function () {
            expect(sentenceElements[7]).toEqual('fuerza')
        })

        it('Posicion 7 correcta', function () {
            expect(sentenceElements[8]).toEqual('con')
        })

        it('Posicion 8 correcta', function () {
            expect(sentenceElements[9]).toEqual('javascript')
        })

    })
})
//TODO allow any value for name
it('La variable result9 devuelve el resultado correcto', function () {
    expect(result8).toEqual(`Me llamo ${sentenceElements[2]} y quiero sentir la fuerza con javascript`

    )
})

describe('Ejercicio 9 - Obtener el monto total de los elementos que pertenecen a catergory "code" en la variable result9', function () {
    it('La variable result9 devuelve el resultado esperado', function () {
        expect(result9).toEqual(60)
    });
    it('El array books está declarado', function () {
        expect(books).toEqual([
            {
                name: ' JS for dummies',
                author: 'Emily A. Vander Veer',
                price: 20,
                category: 'code'
            },
            {
                name: 'Don Quijote de la Mancha',
                author: 'Cervantes',
                price: 14,
                category: 'novel'
            },
            {
                name: 'Juego de tronos',
                author: 'George R. Martin',
                price: 32,
                category: 'Fantasy'
            },
            {
                name: 'javascript the good parts',
                author: 'Douglas Crockford',
                price: 40,
                category: 'code'
            }
        ])
    })
})
