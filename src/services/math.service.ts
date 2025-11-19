import { Injectable } from '@angular/core';
import { MathTopic } from '../models/math-topic.model';

@Injectable({
  providedIn: 'root',
})
export class MathService {
  getTopics(): MathTopic[] {
    return [
      {
        id: 'suma',
        title: 'Suma',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>',
        explanation: 'La suma o adición es la operación matemática que consiste en combinar o añadir dos o más números para obtener una cantidad final o total. Los números que se suman se llaman sumandos y el resultado es la suma.',
        example: {
          title: 'Ejemplo de Suma',
          problem: 'Calcular 125 + 34',
          steps: [
            '1. Alinear los números verticalmente por las unidades, decenas y centenas.',
            '   125',
            ' +  34',
            ' -----',
            '2. Sumar las unidades: 5 + 4 = 9.',
            '3. Sumar las decenas: 2 + 3 = 5.',
            '4. Bajar las centenas: 1.',
            'El resultado es 159.'
          ]
        },
        activities: [
          {
            problem: '¿Cuál es el resultado de 45 + 23?',
            solution: [
              '1. Alinear los números: 45 + 23.',
              '2. Sumar unidades: 5 + 3 = 8.',
              '3. Sumar decenas: 4 + 2 = 6.',
              'Resultado: 68.'
            ]
          },
          {
            problem: 'Suma 189 + 76.',
            solution: [
              '1. Alinear los números: 189 + 76.',
              '2. Sumar unidades: 9 + 6 = 15. Escribimos 5 y llevamos 1.',
              '3. Sumar decenas: 8 + 7 + 1 (llevada) = 16. Escribimos 6 y llevamos 1.',
              '4. Sumar centenas: 1 + 1 (llevada) = 2.',
              'Resultado: 265.'
            ]
          }
        ]
      },
      {
        id: 'resta',
        title: 'Resta',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" /></svg>',
        explanation: 'La resta o sustracción es una operación que consiste en quitar una cierta cantidad (el sustraendo) de otra (el minuendo) para averiguar la diferencia entre las dos. Es la operación inversa a la suma.',
        example: {
          title: 'Ejemplo de Resta',
          problem: 'Calcular 87 - 25',
          steps: [
            '1. Alinear los números verticalmente.',
            '    87',
            ' -  25',
            ' -----',
            '2. Restar las unidades: 7 - 5 = 2.',
            '3. Restar las decenas: 8 - 2 = 6.',
            'El resultado es 62.'
          ]
        },
        activities: [
          {
            problem: '¿Cuál es el resultado de 98 - 54?',
            solution: [
              '1. Alinear los números: 98 - 54.',
              '2. Restar unidades: 8 - 4 = 4.',
              '3. Restar decenas: 9 - 5 = 4.',
              'Resultado: 44.'
            ]
          },
          {
            problem: 'Calcula 152 - 68.',
            solution: [
              '1. Alinear los números: 152 - 68.',
              '2. Restar unidades: 2 - 8 no es posible. Pedimos prestado 1 a las decenas (5), que se convierte en 4. El 2 se convierte en 12. Ahora, 12 - 8 = 4.',
              '3. Restar decenas: 4 - 6 no es posible. Pedimos prestado 1 a las centenas (1), que se convierte en 0. El 4 se convierte en 14. Ahora, 14 - 6 = 8.',
              'Resultado: 84.'
            ]
          }
        ]
      },
      {
        id: 'multiplicacion',
        title: 'Multiplicación',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>',
        explanation: 'La multiplicación es una operación que consiste en sumar un número (el multiplicando) tantas veces como indica otro número (el multiplicador). Es una forma abreviada de realizar sumas repetidas.',
        example: {
          title: 'Ejemplo de Multiplicación',
          problem: 'Calcular 43 x 5',
          steps: [
            '1. Alinear los números.',
            '    43',
            ' x   5',
            ' -----',
            '2. Multiplicar 5 por las unidades de 43: 5 x 3 = 15. Escribimos el 5 y llevamos 1.',
            '3. Multiplicar 5 por las decenas de 43: 5 x 4 = 20. Sumamos la llevada: 20 + 1 = 21.',
            'El resultado es 215.'
          ]
        },
        activities: [
          {
            problem: '¿Cuál es el resultado de 27 x 3?',
            solution: [
              '1. Alinear: 27 x 3.',
              '2. Multiplicar 3 x 7 = 21. Escribimos 1, llevamos 2.',
              '3. Multiplicar 3 x 2 = 6. Sumar llevada: 6 + 2 = 8.',
              'Resultado: 81.'
            ]
          },
          {
            problem: 'Calcula 124 x 12.',
            solution: [
              '1. Multiplicar 124 por 2 (unidades de 12): 124 x 2 = 248.',
              '2. Multiplicar 124 por 1 (decenas de 12): 124 x 1 = 124. Escribimos este resultado debajo de 248, desplazado un lugar a la izquierda.',
              '   248',
              '  124 ',
              ' -----',
              '3. Sumar los resultados: 248 + 1240 = 1488.',
              'Resultado: 1488.'
            ]
          }
        ]
      },
      {
        id: 'division',
        title: 'División',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" /></svg>',
        explanation: 'La división es la operación para repartir una cantidad en grupos iguales. Sus partes son: Dividendo (la cantidad a repartir), Divisor (el número de grupos), Cociente (el resultado, cuánto toca a cada grupo) y Resto (lo que sobra).',
        example: {
          title: 'Ejemplo de División con Resto',
          problem: 'Calcular 75 ÷ 4',
          steps: [
            '1. Tomamos la primera cifra del dividendo (7). ¿Cuántas veces cabe el divisor (4) en 7? Cabe 1 vez.',
            '2. Escribimos 1 en el cociente. Multiplicamos 1 x 4 = 4.',
            '3. Restamos el resultado a la cifra tomada: 7 - 4 = 3.',
            '4. Bajamos la siguiente cifra del dividendo (5), formando el número 35.',
            '5. ¿Cuántas veces cabe 4 en 35? Cabe 8 veces. Multiplicamos 8 x 4 = 32.',
            '6. Escribimos 8 en el cociente. Restamos 35 - 32 = 3.',
            '7. Como no hay más cifras que bajar, el 3 es el resto.',
            'El resultado es: Cociente 18 y Resto 3.'
          ]
        },
        activities: [
          {
            problem: 'Calcula 125 ÷ 5.',
            solution: [
              '1. Tomar el 1 no es posible, así que tomamos 12.',
              '2. 12 ÷ 5 = 2. (2 x 5 = 10). Restamos 12 - 10 = 2.',
              '3. Bajar el 5. Ahora tenemos 25.',
              '4. 25 ÷ 5 = 5. (5 x 5 = 25). Restamos 25 - 25 = 0.',
              'Resultado: Cociente 25 y Resto 0.'
            ]
          },
          {
            problem: '¿Cuál es el resultado de 53 ÷ 6?',
            solution: [
              '1. Tomamos el 5, pero 6 no cabe en 5, así que tomamos 53.',
              '2. ¿Cuántas veces cabe 6 en 53? Buscamos en la tabla del 6. 8 x 6 = 48.',
              '3. Escribimos 8 en el cociente. Restamos 53 - 48 = 5.',
              '4. Como no hay más cifras que bajar, 5 es el resto.',
              'Resultado: Cociente 8 y Resto 5.'
            ]
          }
        ]
      },
      {
        id: 'fracciones',
        title: 'Fracciones',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" /></svg>',
        explanation: 'Una fracción representa una parte de un todo. Se escribe con dos números separados por una línea: el numerador (arriba), que indica cuántas partes se toman, y el denominador (abajo), que indica en cuántas partes iguales se divide el todo.',
        example: {
          title: 'Ejemplo de Suma de Fracciones',
          problem: 'Calcular 1/3 + 1/2',
          steps: [
            '1. Para sumar fracciones con diferente denominador, primero encontramos un denominador común. El mínimo común múltiplo (mcm) de 3 y 2 es 6.',
            '2. Convertimos cada fracción a una fracción equivalente con denominador 6.',
            '3. Para 1/3: (6 ÷ 3) x 1 = 2. La fracción es 2/6.',
            '4. Para 1/2: (6 ÷ 2) x 1 = 3. La fracción es 3/6.',
            '5. Ahora sumamos las nuevas fracciones: 2/6 + 3/6.',
            '6. Sumamos los numeradores y mantenemos el denominador: (2 + 3) / 6 = 5/6.',
            '7. El resultado es 5/6.'
          ]
        },
        activities: [
          {
            problem: 'Calcula 4/7 + 2/7.',
            solution: [
              '1. Como las fracciones tienen el mismo denominador, simplemente sumamos los numeradores.',
              '2. Sumamos los numeradores: 4 + 2 = 6.',
              '3. Mantenemos el denominador: 7.',
              'Resultado: 6/7.'
            ]
          },
          {
            problem: '¿Cuál es el resultado de 2/3 x 3/4?',
            solution: [
              '1. Para multiplicar fracciones, multiplicamos los numeradores entre sí y los denominadores entre sí.',
              '2. Multiplicar numeradores: 2 x 3 = 6.',
              '3. Multiplicar denominadores: 3 x 4 = 12.',
              '4. El resultado es 6/12.',
              '5. Podemos simplificar la fracción dividiendo el numerador y el denominador por su máximo común divisor, que es 6. (6 ÷ 6 = 1; 12 ÷ 6 = 2)',
              'Resultado simplificado: 1/2.'
            ]
          }
        ]
      },
      {
        id: 'multiplicacion_fracciones',
        title: 'Multiplicación de Fracciones',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m-10.5-3.375l6.75 6.75m-6.75 0l6.75-6.75" /></svg>',
        explanation: 'La multiplicación de fracciones es una de las operaciones más directas. Para multiplicar dos o más fracciones, simplemente se multiplican los numeradores entre sí para obtener el nuevo numerador, y se multiplican los denominadores entre sí para obtener el nuevo denominador. Finalmente, si es posible, se simplifica la fracción resultante.',
        example: {
          title: 'Ejemplo de Multiplicación de Fracciones',
          problem: 'Calcular 2/5 x 3/4',
          steps: [
            '1. Identificar los numeradores (2 y 3) y los denominadores (5 y 4).',
            '2. Multiplicar los numeradores: 2 x 3 = 6.',
            '3. Multiplicar los denominadores: 5 x 4 = 20.',
            '4. La fracción resultante es 6/20.',
            '5. Simplificar la fracción. El máximo común divisor de 6 y 20 es 2.',
            '6. Dividir numerador y denominador por 2: 6 ÷ 2 = 3; 20 ÷ 2 = 10.',
            '7. El resultado final es 3/10.'
          ]
        },
        activities: [
          {
            problem: '¿Cuál es el resultado de 1/2 x 3/5?',
            solution: [
              '1. Multiplicar numeradores: 1 x 3 = 3.',
              '2. Multiplicar denominadores: 2 x 5 = 10.',
              '3. El resultado es 3/10. Esta fracción no se puede simplificar más.',
              'Resultado: 3/10.'
            ]
          },
          {
            problem: 'Calcula 4/9 x 3/8.',
            solution: [
              '1. Multiplicar numeradores: 4 x 3 = 12.',
              '2. Multiplicar denominadores: 9 x 8 = 72.',
              '3. El resultado es 12/72.',
              '4. Simplificar la fracción dividiendo ambos por su máximo común divisor, que es 12.',
              '5. 12 ÷ 12 = 1.',
              '6. 72 ÷ 12 = 6.',
              'Resultado simplificado: 1/6.'
            ]
          }
        ]
      }
    ];
  }
}