const fs = require('fs');

function generarCombinaciones() {
    const letras = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const combinaciones = [];
    
    // Iniciar tiempo de ejecución
    console.time("Tiempo de ejecución");

    for (let letra1 of letras) {
        for (let letra2 of letras) {
            for (let letra3 of letras) {
                for (let letra4 of letras) {
                    combinaciones.push(`${letra1}${letra2}${letra3}${letra4}`);
                }
                for (let num of numeros) {
                    combinaciones.push(`${letra1}${letra2}${letra3}${num}`);
                }
            }
            for (let num of numeros) {
                for (let letra4 of letras) {
                    combinaciones.push(`${letra1}${letra2}${num}${letra4}`);
                }
                for (let num2 of numeros) {
                    combinaciones.push(`${letra1}${letra2}${num}${num2}`);
                }
            }
        }
        for (let num of numeros) {
            for (let letra3 of letras) {
                for (let letra4 of letras) {
                    combinaciones.push(`${letra1}${num}${letra3}${letra4}`);
                }
                for (let num2 of numeros) {
                    combinaciones.push(`${letra1}${num}${letra3}${num2}`);
                }
            }
            for (let num2 of numeros) {
                for (let letra4 of letras) {
                    combinaciones.push(`${letra1}${num}${num2}${letra4}`);
                }
                for (let num3 of numeros) {
                    combinaciones.push(`${letra1}${num}${num2}${num3}`);
                }
            }
        }
    }

    for (let num of numeros) {
        for (let letra1 of letras) {
            for (let letra2 of letras) {
                for (let letra3 of letras) {
                    combinaciones.push(`${num}${letra1}${letra2}${letra3}`);
                }
                for (let num2 of numeros) {
                    combinaciones.push(`${num}${letra1}${letra2}${num2}`);
                }
            }
            for (let num2 of numeros) {
                for (let letra3 of letras) {
                    combinaciones.push(`${num}${letra1}${num2}${letra3}`);
                }
                for (let num3 of numeros) {
                    combinaciones.push(`${num}${letra1}${num2}${num3}`);
                }
            }
        }
    }

    for (let num1 of numeros) {
        for (let num2 of numeros) {
            for (let letra1 of letras) {
                for (let letra2 of letras) {
                    combinaciones.push(`${num1}${num2}${letra1}${letra2}`);
                }
            }
        }
    }

    for (let num1 of numeros) {
        for (let num2 of numeros) {
            for (let letra of letras) {
                for (let num3 of numeros) {
                    combinaciones.push(`${num1}${num2}${letra}${num3}`);
                }
            }
        }
    }

    for (let num1 of numeros) {
        for (let num2 of numeros) {
            for (let num3 of numeros) {
                for (let letra1 of letras) {
                    combinaciones.push(`${num1}${num2}${num3}${letra1}`);
                }
            }
        }
    }

    for (let num1 of numeros) {
        for (let num2 of numeros) {
            for (let num3 of numeros) {
                for (let num4 of numeros) {
                    combinaciones.push(`${num1}${num2}${num3}${num4}`);
                }
            }
        }
    }
    
    // Imprimir las combinaciones
    combinaciones.forEach(combinacion => console.log(combinacion));

    // Imprimir el número de combinaciones generadas
    console.log(`Número de combinaciones generadas: ${combinaciones.length}`);

    // Mostrar el tiempo transcurrido
    console.timeEnd("Tiempo de ejecución");

// Guardar las combinaciones en un archivo .txt
fs.writeFile('combinaciones.txt', combinaciones.join('\n'), function (err) {
    if (err) throw err;
    console.log('Las combinaciones se han guardado en combinaciones.txt');
});
}

// Llamar a la función para generar e imprimir las combinaciones
generarCombinaciones();
