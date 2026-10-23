function sumar() {
    let n1, n2, suma;

    alert("Este algoritmo suma dos números ingresados por el usuario");
    n1 = parseFloat(prompt("Ingrese el primer valor"));
    n2 = parseFloat(prompt("Ingrese el segundo valor"));

    suma = n1 + n2;
    alert("El resultado de la suma es: " + suma);
}

function operacionesBasicas() {
    let n1, n2, sumar, restar, multiplicar, dividir;
    
    alert("Este algoritmo suma, resta, multiplica y divide dos numeros ingresados por el usuario");
    n1 = parseFloat(prompt("Ingrese el primer valor"));
    n2 = parseFloat(prompt("Ingrese el segundo valor"));

    sumar = n1 + n2
    restar = n1 - n2
    multiplicar = n1 * n2
    dividir = n1 / n2
    alert("El resultado de la suma es: " + suma +"El resultado de la resta es: " + resta +"El resutado de la multiplicacon es: " + multiplicar +"El resultado de la division es: " + dividir);
}

function conversiónDeUnidadesDeLongitud() {
    let metros, centimetros, kilometros;

    alert("Este algoritmo convierte de metros a centimetros y kilometros");
    metros = parseFloat(prompt("Ingrese el valor a convertir en metros"));

    centimetros = metros + 100 
    kilometros = metros / 1000
    alert("El resultado de metros a centimetros es: " + centimetros + "El resultado de metros a kilometros es: " + kilometros);
}

function conversiónDeUnidadesDeTemperatura() {
    let celsius, fahrenheit, kelvin;

    alert("Este algoritmo convierte de grados celsius a fahrenheit y kelvin");
    celcius = parseFloat(prompt("Ingrese el valor a convertir en celsius"));

    fahrenheit = celsius + 32
    kelvin = celsius + 273.15
    alert("El resultado de celsius a fahrenheit es: " + fahrenheit + "El resultadoe de celsius a kelvin es: "+ kelvin);
}

function áreaYPerímetroDeUnRectángulo() {
    let area, base, altura, perimetro;

    alert("Este algoritmo determina la besa y la altura del rectangulo para determinar el area y el perimetro");
    base = parseFloat(prompt("Ingrese la base"));
    altura = parseFloat(prompt("Ingrese la altura"));

    area = (base * altura)/2
    perimetro = 2*(base + altura)
    alert("El resultado de la conversion del area es: " + area + "El resultado de la conversion del perimetro es: " + perimetro);
}

function promedioDeTresNúmeros() {
    let n1, n2, n3, promedio;

    alert("Este algoritmo determina el promedio de tres notas y el total de si");
    n1 = parseFloat(prompt("Ingrese el primer numero"));
    n2 = parseFloat(prompt("Ingrese la segunda numero"));
    n3 = parseFloat(prompt("Ingrese la tercer numero"));

    promedio = (n1 + n2 + n3) / 3
    alert("El promedio de los tres numeros es: " + promedio);
}

function conversiónDeTiempo() {
    let segundos, minutos, horas;

    alert("Este algoritmo permite determinar de segundos a minutos y horas");
    segundos = parseFloat(prompt("Ingrese la cantidad a convertir en segundos"));
    
    minutos = segundos / 60
    horas =  segundos / 36000
    
    alert("El resultado de convertir segundos en minutos es: " + minutos + "El resultado de horas es: " + horas);
}

function conversiónDeUnidadesDePeso() {
    let kilogramos, gramos, libras, toneladas;

    alert("Este algoritmo convierte de kilogramos a gramos, libras y toneladas");
    kilogramos = parseFloat(prompt("Ingrese el valor a convertir en kilogramos"));

    gramos = kilogramos * 1000
    libras = kilogramos * 2.205
    toneladas = kilogramos / 1000

    alert("El resultado de la conversion de gramos es: " + gramos + "El resultado de libras es: " + libras +"El resultado de toneladas es: " + toneladas);
}

function pesoDeUnObjetoEnDiferentesPlanetas() {
    let tierra, luna, mercurio, venus, marte, jupiter, uranio, neptuno, saturno;
    
    alert("Este algoritmo permite calcular el peso de una persona en la tierra y determinar su peso en los otros 9 planetas");
    tierra = parseFloat(prompt("Ingrese el valor a convertir en tierra"));

    luna = tierra *1.62 / 9.81
    mercurio = tierra * 3.70 / 9.81
    venus = tierra * 8.87 / 9.81
    marte = tierra * 3.71 / 9.81
    jupiter = tierra * 24.79 / 9.81
    uranio = tierra * 8.69 / 9.81
    neptuno = tierra * 11.15 / 9.81
    saturno = tierra * 16.44 / 9.81

    alert("El resultado de convertir el peso en luna es: " + luna + "El resulato en mercuroi es: " + mercurio + "El resulato en venus: " + venus + "El resulato en marte: " + marte + "El resulato en jupiter es: " + jupiter + "El resulato en uranio es: " + uranio + "El resulato en neptuno es: " + neptuno + "El resulato en sarurno es: " + saturno);
}

function cálculoDeUnaCompra() {
    let compra1, compra2, compra3, precio1, precio2, precio3;

    alert("Este algoritmo permite calculalr el precio y la cantidad de 3 productos");
    compra1 = parseFloat(prompt("Ingrese la cantidad de compra1"));
    precio1 = parseFloat(prompt("Ingrese el precio de la compra1"));
    compra2 = parseFloat(prompt("Ingrese la cantidad de compra2"));
    precio2 = parseFloat(prompt("Ingrese el precio de la compra2"));
    compra3 = parseFloat(prompt("Ingrese la cantidad decompra3"));
    precio3 = parseFloat(prompt("Ingrese el precio de la compra3"));

    total1 = compra1 * precio1
    total2 = compra2 * precio2
    total3 = compra3 * precio3

    alert("El resultado de la compra1 es: " + total1 + "El resultado de la compra2 es: " + total2 + "El resultado de la compra3 es: " + total3);
}

function cálculoDeSalario() {
    let salarioDias, salarioMensual, diasTrabajados, total;

    alert("Este algoritmo permite calcular el salario");
    diasTrabajados = parseFloat(prompt("Ingrese el valor de los dias trabajados"));

    salarioDias = diasTrabajados * 10000
    salarioMensual = diasTrabajados * 30000
    total = salarioDias + salarioMensual

    alert("El resultado de el salario por dias es: " + salarioDias + "El resultado del salario mensual es: " + salarioMensual);
}

function facturaDeUnServicio() {
    let consumo, valorUnitario, porcentaje, valorImpuesto, subTotal, totalPago;
    
    alert("Este algoritmo permite determinar el valor impuesto, su porcentaje, subtotal y total a paguar de un impuesto");
    consumo = parseFloat(prompt("Ingrese el valor del consumo"));

    valorUnitario = consumo
    valorImpuesto = valorUnitario    
    subTotal = consumo * valorUnitario
    porcentaje = valorUnitario / 100
    totalPago = subTotal - porcentaje

    alert("El resultado del porcentaje es: " + porcentaje + "El resultado del impuesto es: " + valorImpuesto + "El resultado del subtotal es: " + subTotal + "El total a pagar es: " + totalPago);
}

function costoDeUnViajeEnVehículo() {
    let consumo, distanciaRecorrida, precioCombustible, consumoPromedioVehículo;

    alert("Este algoritmo permite calcular el costo del combustible de un vehículo");
    consumo = parseFloat(prompt("Ingrese el valor del consumo"));
    distanciaRecorrida = parseFloat(prompt("Ingrese el total de la distancia recorrida"));
    consumoPromedioVehículo = parseFloat(prompt("Ingrese el valor del consumo del vehículo"));

    precioCombustible = consumoPromedioVehículo + distanciaRecorrida

    alert("El rsultado del costo del combustible es: " + precioCombustible);
}

function cálculoDelTiempoDeUnViaje() {
    let distanciaViaje, velocidadPromedio, tiempoViaje;

    alert("Este algoritmo permite calcular el tiemo de un recorrido");
    distanciaViaje = parseFloat(prompt("Ingrese la distancia del viaje"));
    velocidadPromedio = parseFloat(prompt("Ingrese el valor de velocidad"));

    tiempoViaje = distanciaViaje * velocidadPromedio

    alert("El resultado del tiempo del viaje es: " + tiempoViaje);
}

function sistemaBásicoDeNotas() {
    let n1, n2, n3, notaFinal;

    alert("Este algoritmo permite identificar la nota final de un estudiante");
    n2 = parseFloat(prompt("Ingrese la primera nota"));
    n2 = parseFloat(prompt("Ingrese la segunda nota"));
    n3 = parseFloat(prompt("Ingrese la trecer nota"));

    notaFinal = n1 + n2 + n3

    alert("El resultado de las notas del estudiante es: " + notaFinal);
}

function conversorDeMonedas() {
    let pesosColombianos, dolares, euros;

    alert("Este algoritmo permite determinar el valor de pesos Colombianos en diferentes monedas");
    pesosColombianos = parseFloat(prompt("Ingrese el valor a convertir en pesos Colombianos"));

    dolares = pesosColombianos / 125
    euros = pesosColombianos / 113.64

    alert("El resultado de convertir de pesos Colombianos a dolares es: " + dolares + "El resultado de euros es: " + euros);
}

//Algoritmos condicoinales

function númeroPositivo() {
    let n1;

    alert("Este algoritmo permite determinar si un numero es positivo");
    n1 = parseFloat(prompt("Ingrese el numero"));

    if (n1 > 0) {
        alert("El numero es positivo");

    }else alert("El numero no es positivo"); 
}

function númeroParOImpar() {
    let n1;

    alert("Este algoritmo permite determinar si un numero es par o impar");
    n1 = parseFloat(prompt("Ingrese el numero"));

    if (n1 > 0) {
        alert("El numero es impar");

    }else alert("el numero es par");
}

function mayorDeDosNúmeros() {
    let n1, n2;

    alert("Este algoritmo permite determinar el mayor de dos numeros");
    n1 = parseFloat(prompt("Ingrese el primer numero"));
    n2 = parseFloat(prompt("Ingrese el segundo numero"));

    if (n1 < n2) {
        alert("El primer numero es menor");
    
    }else alert("El segundo numero es mayor");    
}

function descuentoPorCompra() {
    let compra;

    alert("Este algoritmo permite determinar el descuento de una compra");
    compra = parseFloat(prompt("Ingrese el valor de la compra"));

    if (compra >= 200000) {
        alert("Tiene un descuento del 10%");

    }else alert("No tiene descuento");
}

function temperaturaDeUnaCiudad() {

    alert("Este algoritmo permite determinar si la temperatura es alta o no");
    celcius = parseFloat(prompt("Ingrese el valor en celcius"));

    if (celcius > 30) {
        alert("La temperatura es alta");

    }else alert("La temperatura no es alta");
}

function mayorDeEdad() {
    let edad;

    alert("Este algoritmo permite determinar si una persona es mayor o menor de edad");
    edad = parseFloat(prompt("Ingrese el valor edad"));

    if (edad > 18) {
        alert("Usted es mayor de edad");
    
    }else alert("Usted es menor de edad");
}

function retiroDeDinero() {
    let saldo;

    alert("Este algoritmo permite determinar si una persona puede retirar una cantidad de su saldo");
    saldo = parseFloat(prompt("Ingrese la cantidad a retirar"));

    retiro = saldo

    if (saldo < 500000) {
        alert("Retiro exitoso");
        
        alert("El total de su retiro es: " + retiro);

    }else alert("saldo insuficiente");
}

function envíoGratuito() {
    let valorCompra, envio, totalPago;

    alert("Este algoritmo permite determinar el envio gratuito de una compra");
    valorCompra = parseFloat(prompt("Ingrese el valor de su compra"));

     envio = 12000

    if (valorCompra >= 150000) {
        alert("EL envio de su compra es gratis");

        alert("Su total a pagar es: " + valorCompra);

    }else { alert("El envio de su compra no es gratuito");
        totalPago = valorCompra + envio

        alert("Su total a pagar es: " + totalPago);    
    }
}

function númeroMayorOMenorQueOtro() {
    let n1, n2;

    alert("Este algoritmo permite determinar el mayor, menor o igual de tres numeros");
    n1 = parseFloat(prompt("Ingrese el primer numero"));
    n2 = parseFloat(prompt("Ingrese el segundo numero"));

    if (n1 == n2) {
        alert("Ambos numeros son iguales");

    }else if (n1 > n2) { 
        alert("El primer numero es mayor");
    
    }else { alert("El primer numero es menor");

    }
}

function tarifaDeParqueadero() {
    let timepoDePermanencia;
    
    alert("Este algoritmo permite determinar el timepo y el costo de un parqueadero");
    timepoDePermanencia = parseFloat(prompt("Ingrese las horas de permanencia"));

    if (timepoDePermanencia >= 1) {
        alert("Su tarifa es: " + 5000);

    }else if (timepoDePermanencia >= 3) {
        alert("Su tarifa es: " + 10000);
    
    }else if (timepoDePermanencia >= 6) {
        alert("Su tarifa es: " + 18000);

    }else { alert("Su tarifa es de " + 25000);
    
    }
}

function tarifaDeTransporte() {
    let edad;

    alert("Este algoritmo permite determinar el costo de un pasajero segun su edad");
    edad = parseFloat(prompt("Ingrese su edad"));

    if (edad <= 5) {
        alert("Su valor de pasaje es gratis");

    }else if (edad < 18) {
        alert("Su valor de pasaje es: " + 2000);
    
    }else if (edad <= 59) {
        alert("Su valor de pasaje es: " + 3500);

    }else if (edad > 60) { 
        alert("Su valor de pasaje es: " + 2500);
    }
}

function clasificaciónDeVelocidad() {
    let velocidad;

    alert("Este algoritmo permite clasificar la velocidad de un vehiculo");
    velocidad = parseFloat(prompt("Ingrese la velocidad del vehiculo"));

    if (velocidad <= 30) {
        alert("La velocidad es baja");

    }else if (velocidad >= 31) {
        alert("La velocidad es moderada");
    
    }else if (velocidad >=61) {
        alert("La velocidad es alta");

    }else if (velocidad > 100) {
        alert("La velocidad es muy alta");
    
    }else { alert("La velocidad es baja")

    }
}

function mesYDías() {
    let n1;

    alert("Este algorito permite determinar el mes, según el numero ingresado por el usuario");
    n1 = parseFloat(prompt("Ingrese el numero del mes"));

    if (n1 == 1 || n1 == 3 || n1 == 5 || n1 == 7 || n1 == 8 || n1 == 10 || n1 == 12 ) {
        alert("El mes tiene 31 dias");
    
    }else if (n1 == 4 || n1 == 6 || n1 == 9 || n1 == 11) {
        alert("El mes tiene 30 dias");

    }else if (n1 == 2) {
        alert("El mes tiene 28 dias");
    
    }else { alert("Mes no existente")

    }
}

function accesoAUnaAtracción() {
    let edad, estatura;
    
    alert("Este algoritmo determina si una persona puede ingresar a una atraccion segun su tipo de edad y estatura");
    edad = parseFloat(prompt("Ingrese su edad"));
    estatura = parseFloat(prompt("Ingrese su estatura"));

    if (edad < 12) {
        alert("No puede entrar");
    
    }else if (estatura < 1.40) {
        alert("No puede entrar");
    
    }else { alert("Puede ingresar");

    }  
}

function descuentoSegúnCliente() {
    let compra, descuento1, descuento2, tipoCliente, normal, frecuente;

    alert("Este algoritmo permite determinar si el tipo de cliente es valido para obtener un decuento");
    tipoCliente = parseFloat(prompt("Ingrese el tipo de cliente si es: normal 1 o frecuente 2"));
    compra = parseFloat(prompt("Ingrese el valor de la compra"));

    normal = 1
    frecuente = 2
    descuento1 = compra - 0.05
    descuento2 = compra - 0.10
    
    if (tipoCliente == 1) {
        if (compra > 200000) {
            alert("El total de su compra es de " + descuento1);
        
        }

    }else if (tipoCliente == 2) {
        if (compra > 200000) {
            alert("El total de su compra es de " + descuento2);
        
        }
    }else {
        alert("Su compra es inferior de 200000");
    }
}

function cajeroAutomático() {
    let saldoDisponible, valorRetiro;

    alert("Este algoritmo permite determinar si su retiro es valido o no");
    saldoDisponible = parseFloat(prompt("Ingrese su saldo"));
    valorRetiro = parseFloat(prompt("Ingrese el valor a retirar"));

    if (valorRetiro < saldoDisponible) {
        alert("Retiro exitoso");
    
    }else {
        alert("Retiro insuficiente");
    
    }
}

function validaciónDeContraseña() {
    let contraseñaIngresada, contraseña;

    alert("Este algoritmo permite determinar si su contraseña es correcta o no");
    contraseñaIngresada = parseInt(prompt("Ingrese su contraseña"));

    contraseña = 52344724

    if (contraseñaIngresada == contraseña) {
            alert("Contraseña correcta");

        } else {
            alert("Contraseña incorrecta");
        
    }
}

function añoBisiesto() {
    let año, bisiesto;

    alert("Este algoritmo permite deteminar si un año es bisiesto o no");
    año = parseFloat(prompt("Ingrese el año"));

    if (año % 400 === 0 || (año % 4 === 0 && año % 100 !== 0)) {
        alert("El año ingresado es bisiesto");
    
    } else {
        alert("El año ingresado no es bisiesto");

    }
}

function clasificaciónDeTriángulos() {
    let lado1, lado2, lado3;

    alert("Este algoritmo permite determinar si un triangulo es equilátero isósceles o escaleno");
    lado1 = parseFloat(prompt("Ingrese el primer lado"));
    lado2 = parseFloat(prompt("Ingrese el segundo lado"));
    lado3 = parseFloat(prompt("ingrese el tercer lado"));

    equilátero = (lado1 + lado2 + lado3)
    isósceles = (lado1 + lado2) || lado3
    escaleno = lado1 || lado2 || lado3

   
    if (lado1 <= 0 || lado2 <= 0 || lado3 <= 0 ||
            
        lado1 + lado2 <= lado3 ||
        lado1 + lado3 <= lado2 ||
        lado2 + lado3 <= lado1) {

        alert("No es un triangulo");

    } else if (lado1 === lado2 && lado2 === lado3) {
        alert("Es un traingulo equilátero");

    } else if (lado1 === lado2 ||
        
        lado1 === lado3 ||
        lado2 === lado3) {
        
        alert("Es un triangulo isósceles");

    } else {
        alert("Es un triangulo escaleno");
        
    }
}

function calculadora() {
    let n1, n2, operación, sumar, restar, multiplicar, dividir;

    alert("Este algoritmo permite ejecutar dos numeros como una calculadora");
    n1 = parseFloat(prompt("Ingrese el primer numero"));
    n2 = parseFloat(prompt("Ingrese el segundo numero"));
    operación = prompt("Ingrese la operación a realizar sumar 1, restar 2, multiplicar 3, dividir 4");
    
    sumar = n1 + n2
    restar = n1 - n2
    multiplicar = n1 * n2
    dividir = n1 / n2

    if (operación == 1) {
        alert("El resultado de la operación de suma es " + n1 + " más " + n2 + " igual a " + sumar);        
    
    } else if (operación == 2) {
        alert("El resultado de la operación de resta es " + n1 + " menos " + n2 + " igual a " + restar);
    
    } else if (operación == 3) {
        alert("El resultado de la operación de multiplicar es " + n1 + " por " + n2 + " igual a " + multiplicar);
    
    } else {
        alert("El resultado de la operación de dividir es " + n1 + " dividido " + n2 + " igual a " + dividir);
    
    }
}

function sistemaDeTarifasDeEquipaje() {
    let pesoMaleta;

    alert("Este algoritmo permite determinar el peso de una maleta para saber si tiene costo adicional");
    pesoMaleta = parseInt(prompt("Ingrese el peso de la maleta"));

    pesoMaximo = 23

    if (pesoMaleta > 23) {
        if (pesoMaleta <= 30) {
            alert("Su costo adicional es de 50000");
        
        }else if (pesoMaleta <= 40) {
            alert("El costo adicional es de 100000");
        
        }else {
            alert("No se permite transportar la maleta");
        
        }
    }
}

function facturaDeCompra() {
    let valorCompra, descuento, iva;

    alert("Este algoritmo permite determinar según la compra cuanto es su descuento y su IVA");
    valorCompra = parseFloat(prompt("Ingrese el valor de su compra"));

    iva = valorCompra - descuento

    if (valorCompra < 100000) {
        alert("No tiene descuento")
    
    }else if (valorCompra < 300000) {
        alert("Tiene un descuento del " + descuento + "Y un IVA de " + iva);

        descuento = valorCompra - 0.05

    }else if (valorCompra < 500000) {
        alert("Tiene un descuento del " + descuento + "Y  un IVA de " + iva);

        descuento = valorCompra - 0.10

    }else {
        alert("Tiene un descuento del " + descuento + "Y  un IVA de " + iva);
        
        descuento = valorCompra - 0.15
    }
}

function sistemaDeCalificaciónDeRiesgo() {
    let ingresosMensuales, edad;

    alert("Este algoritmo permite determinar si una persona es elegible según sus ingresos y edad");
    edad = parseFloat(prompt("Ingrese su edad"));
    ingresosMensuales = parseFloat(prompt("Ingrese el valor de sus ingresos mensuales"));

     if (edad < 18) {
        alert("No es elegible");

    } else if (edad <= 25 && ingresosMensuales >= 2000000) {
        alert("Usted es elegible");

    } else if (edad > 25 && ingresosMensuales >= 1500000) {
        alert("Usted es elegible");

    } else {
        alert("No es elegible");
    }
}

function mayorMenorEIgualdadEntreTresNúmeros() {
    let n1, n2, n3;

    alert("Este algoritmo permite determinar el mayor, menor o igual entre tres números");

    n1 = parseFloat(prompt("Ingrese el primer número"));
    n2 = parseFloat(prompt("Ingrese el segundo número"));
    n3 = parseFloat(prompt("Ingrese el tercer número"));

     if (n1 === n2 && n2 === n3) {
        alert("Los tres números son iguales");

    } else if (n1 === n2 && n1 > n3) {
        alert("El primer y segundo número son iguales y mayores que el tercero");

    } else if (n1 === n3 && n1 > n2) {
        alert("El primer y tercer número son iguales y mayores que el segundo");

    } else if (n2 === n3 && n2 > n1) {
        alert("El segundo y tercer número son iguales y mayores que el primero");

    } else if (n1 === n2 && n1 < n3) {
        alert("El primer y segundo número son iguales y menores que el tercero");

    } else if (n1 === n3 && n1 < n2) {
        alert("El primer y tercer número son iguales y menores que el segundo");

    } else if (n2 === n3 && n2 < n1) {
        alert("El segundo y tercer número son iguales y menores que el primero");

    } else if (n1 > n2 && n1 > n3) {
        alert("El primer número es el mayor");

    } else if (n2 > n1 && n2 > n3) {
        alert("El segundo número es el mayor");

    } else if (n3 > n1 && n3 > n2) {
        alert("El tercer número es el mayor");

    } else {
        alert("Los tres números son diferentes");
    }
}

function numeroDelMes() {
    let numeromes;

    numeromes = parseInt(prompt("Ingrese el numero del mes"));

    switch (numeromes) {
        case "1":
            console.log("Enero");
            
        break;
        
        case "2":
            console.log("Febrero");
             
        break

        case "3":
            console.log("Marzo");
        
        break

        case "4":
            console.log("Abril");
            
        break

        case "5":
            console.log("Mayo");
            
        break

        case "6":
            console.log("Junio");
            
        break

        case "7":
            console.log("Julio");
            
        break

        case "8":
            console.log("Agosto");
            
        break

        case "9":
            console.log("Septiembre");
            
        break

        case "10":
            console.log("Octubre");
            
        break

        case "11":
            console.log("Noviembre");
            
        break

        case "12":
            console.log("Diciembre");
            
        break

        default:

        console.log("El numero ingresado es no pertenece a algún mes");
        

    break;

    }
}

//Algoritmos bucles

function contarNúmeros() {
    let contador, n1;

    alert("Este algoritmo permite contar los numeros desde un punto de partida hasta un punto final");
    contador = parseInt(prompt("Ingrese el punto de partida"));
    n1 = parseInt(prompt("Ingrese el punto final"));

    while (contador <= n1) {
        console.log(contador);
        
        contador = contador + 1;

    }
}

function cuentaRegresiva() {
    let n1;

    alert("Este algoritmo permite realizar una cuenta regresiva desde un numero ingresado hasta cero");
    n1 = parseInt(prompt("Ingrese el valor de numero"));

for (let i = n1; i >= 0; i--) {
        console.log(i);
    }
}

function númerosPares() {
    let contador, numeroLimite;

    alert("Este algoritmo permite mostrar todos los numeros pares ingresados");
    numeroLimite = parseInt(prompt("Ingrese el numero limite"));

    contador = 2;

    while (contador <= numeroLimite) {
        console.log(contador);
        contador = contador + 2;
    
    }
}

function númerosImpares() {
    let numeroLimite;

    alert("Este algoritmo permite mostrar todos los numeros impares ingresados");
    numeroLimite = parseInt(prompt("Ingrese el número límite:"));

    for (let contador = 1; contador <= numeroLimite; contador += 2) {
        console.log(contador);

    }
}

function sumaDeNúmeros() {
    let n, contador, suma;
    
    alert("Este algoritmo permite solicitar un número N y calcular la suma de todos los números comprendidos entre 1 y N");
    n = parseInt(prompt("Ingrese el valor de numero N"));

    contador = 1;
    suma = 0;

    while (contador <= n) {
        suma = suma + contador;
        contador++;
    }

console.log("La suma es " + suma);

}

function tablaDeMultiplicar() {
    let n1, contador, multiplicar;

    alert("Este algoritmo permite determinar la multiplicacion de ese numero");
    n1 = parseInt(prompt("Ingrese el valor de numero"));

    contador = 1 
    multiplicar = 0

    for (let contador = 1; contador <= numeroLimite; contador += 2) {
        console.log(contador);

    }
}

    while (contador <= n1) {
         contador ++;
        multiplicar = multiplicar + contador;
       
    }

    console.log("El resultado de la multiplicación es " + multiplicar);
    


