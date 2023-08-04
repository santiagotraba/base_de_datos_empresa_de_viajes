/*A)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados:

nombre del titular ,
lugar ( “Puerto Madryn”, “Villa Gessel” o “Córdoba”),
temporada(“alta”, “baja”),
cantidad de días que durará el viaje.
importe del viaje
altura del pasajero
peso del pasajero
sexo pasajero (F o M o NB)
Viaja con equipaje de mano?
paga con mercado , tarjeta o efectivo

1 
a- cantidad de personas que viajan en cada temporada
b- el peso acumulado de todos los que viajan a villa gessel
c- el lugar con la mayor cantidad de días acumulados
d- la suma de todos los importes

2
e-el nombre del más pesado de los pasajeros y el del más liviano
f-el lugar donde se pagó el mayor importe
g-el nombre de la mujer más alta

3
h- Cuál fue la forma de pago más utilizada
i- en qué temporada se viajó más
j- qué lugar tuvo más pasajeros

4
k- qué porcentaje usa equipaje de mano
l- que porcentaje hay de cada sexo

5-solo para alumnos que crean sus propios desafíos
m- inventate uno
n- se creativo en este
o- uno facil 
p- uno dificil*/
function mostrar() {
    //datos de entrada
    var nombreDelTitular,
        lugar,
        temporada,
        cantidadDeDias,
        importeDelViaje,
        altura,
        peso,
        sexo,
        equipajeDeMano,
        paga;

    //variables de ejercicio 1
    var cantidadPersonasTemporadaAlta = 0,
        cantidadPersonasTemporadaBaja = 0,
        pesoTotalVillaGesell = 0,
        lugarConMayorDiasAcumulados,
        sumaDeTodosLosImportes = 0,
        diasEnPuertoMadryn = 0,
        diasEnVillaGesell = 0,
        diasEnCordoba = 0;

    //variables de ejercicio 2
    var nombreDelPasajeroMasPesado,
        nombreDelPasajeroMasLiviano,
        pesoDelPasajeroMasPesado = 0,
        pesoDelPasajereoMasLiviano = 9999999999999,
        lugarDondeSePagoElMayorImporte = 0,
        alturaDeLaMujer = 0,
        nombreDeLaMujerMasAlta,
        importeEnPuertoMadryn = 0,
        importeEnVillaGesell = 0,
        importeEnCordoba = 0;

    //variables del ejercicio 3
    var formaDePagoMasUtilizada,
        pagoConMercado = 0,
        pagoConTarjeta = 0,
        pagoConEfectivo = 0,
        personasQueFueronAVillaGesell = 0,
        personasQueFueronAPuertoMadryn = 0,
        personasQueFueronACordoba = 0,
        temporadaQueSeViajoMas,
        lugarQueTuvoMasPasajeros;

    //variables del ejercicio 4
    var quePorcentajeUsaEquipajeDeMano, quePorcentajeHayDeCadaSexo;
    let totalDePersonasQueViajan = 0;
    let totalDePersonasConEquipajeDeMano = 0;
    let cantidadDeMujeres = 0;
    let cantidadDeHombres = 0;
    let porcentajeDeCantidadDeMujeres;
    let porcentajeDeCantidadDeHombres;

    do {
        do {
            nombreDelTitular = prompt("Ingrese su nombre");
            // si se carga un 6... nombreDelTitular = "6"
        } while (!nombreDelTitular.trim);

        do {
            lugar = prompt(
                "Ingrese si viaja a puerto madryn, villa gesell o cordoba"
            );
        } while (
            lugar != "puerto madryn" &&
            lugar != "villa gesell" &&
            lugar != "cordoba"
        );

        do {
            temporada = prompt("Ingrese si va en temporada baja o alta");
        } while (temporada != "baja" && temporada != "alta");

        do {
            cantidadDeDias = parseInt(
                prompt("Ingrese la cantidad de dias que durara el viaje")
            );
        } while (
            isNaN(cantidadDeDias) ||
            (!isNaN(cantidadDeDias) && cantidadDeDias < 1)
        );

        do {
            importeDelViaje = parseInt(
                prompt("Ingrese cuanto cuesta su viaje")
            );
        } while (isNaN(importeDelViaje));

        do {
            altura = parseInt(prompt("Ingrese su altura"));
        } while (isNaN(altura));

        do {
            peso = parseInt(prompt("Ingrese su peso"));
        } while (isNaN(peso));

        do {
            sexo = prompt("Ingrese su sexo");
        } while (sexo != "f" && sexo != "m" && sexo != "nb");

        do {
            equipajeDeMano = prompt("viaja con equipaje de mano?");
        } while (equipajeDeMano != "si" && equipajeDeMano != "no");

        do {
            paga = prompt("paga con mercado, tarjeta o efectivo?");
        } while (paga != "mercado" && paga != "tarjeta" && paga != "efectivo");
    } while (confirm("desea ingresar mas datos?"));

    //cantidad personas por temporada ejercicio 1
    if (temporada.toLowerCase() == "baja") {
        cantidadPersonasTemporadaBaja++;
    } else if (temporada.toLowerCase() == "alta") {
        cantidadPersonasTemporadaAlta++;
    }

    //Peso total de los que viajan a villa gesell
    if (lugar === "villa gesell") {
        pesoTotalVillaGesell += peso;
    }

    // el lugar con la mayor cantidad de días acumulados
    switch (lugar) {
        case "puerto madryn":
            diasEnPuertoMadryn += cantidadDeDias;
            break;
        case "villa gesell":
            diasEnVillaGesell += cantidadDeDias;
            break;
        case "cordoba":
            diasEnCordoba += cantidadDeDias;
            break;
    }

    if (
        diasEnPuertoMadryn > diasEnVillaGesell &&
        diasEnPuertoMadryn > diasEnCordoba
    ) {
        lugarConMayorDiasAcumulados = "puerto madryn";
    } else if (
        diasEnVillaGesell > diasEnPuertoMadryn &&
        diasEnVillaGesell > diasEnCordoba
    ) {
        lugarConMayorDiasAcumulados = "villa gesell";
    } else if (
        diasEnCordoba > diasEnPuertoMadryn &&
        diasEnCordoba > diasEnVillaGesell
    ) {
        lugarConMayorDiasAcumulados = "cordoba";
    }

    // la suma de todos los importes
    sumaDeTodosLosImportes += importeDelViaje;

    // el nombre del más pesado de los pasajeros y el del más liviano
    if (peso > pesoDelPasajeroMasPesado) {
        pesoDelPasajeroMasPesado = peso;
        nombreDelPasajeroMasPesado = pesoDelPasajeroMasPesado;
        nombreDelPasajeroMasPesado = nombre;
    } else if (peso < pesoDelPasajereoMasLiviano) {
        pesoDelPasajereoMasLiviano = peso;
        nombreDelPasajeroMasLiviano = pesoDelPasajereoMasLiviano;
        nombreDelPasajeroMasLiviano = nombre;
    }

    // el lugar donde se pagó el mayor importe
    switch (lugar) {
        case "puerto madryn":
            if (importeDelViaje > importeEnPuertoMadryn) {
                importeEnPuertoMadryn = importeDelViaje;
            }
            break;
        case "villa gesell":
            if (importeDelViaje > importeEnVillaGesell) {
                importeEnVillaGesell = importeDelViaje;
            }
            break;
        case "cordoba":
            if (importeDelViaje > importeEnCordoba) {
                importeEnCordoba = importeDelViaje;
            }
            break;
    }
    if (
        importeEnPuertoMadryn > importeEnVillaGesell &&
        importeEnPuertoMadryn > importeEnCordoba
    ) {
        lugarDondeSePagoElMayorImporte = importeEnPuertoMadryn;
    } else if (
        importeEnVillaGesell > importeEnPuertoMadryn &&
        importeEnVillaGesell > importeEnCordoba
    ) {
        lugarDondeSePagoElMayorImporte = importeEnVillaGesell;
    } else if (
        importeEnCordoba > importeEnPuertoMadryn &&
        importeEnCordoba > importeEnVillaGesell
    ) {
        lugarDondeSePagoElMayorImporte = importeEnCordoba;
    }

    // el nombre de la mujer más alta
    while (sexo === "f") {
        if (altura > alturaDeLaMujer) {
            alturaDeLaMujer = altura;
            nombreDeLaMujerMasAlta = alturaDeLaMujer;
            nombre = nombreDeLaMujerMasAlta;
        }
    }

    // Cuál fue la forma de pago más utilizada
    switch (paga) {
        case "mercado":
            pagoConMercado++;
            break;

        case "tarjeta":
            pagoConTarjeta++;
            break;
        case "efectivo":
            pagoConEfectivo++;
            break;
    }
    formaDePagoMasUtilizada = "mercado pago";

    if (pagoConTarjeta > pagoConMercado) {
        formaDePagoMasUtilizada = "tarjeta";
    }

    if (pagoConEfectivo > pagoConTarjeta && pagoConEfectivo > pagoConMercado) {
        formaDePagoMasUtilizada = "efectivo";
    }

    // qué lugar tuvo más pasajeros
    switch (lugar) {
        case "puerto madryn":
            personasQueFueronAPuertoMadryn++;
            break;

        case "villa gesell":
            personasQueFueronAVillaGesell++;
            break;
        case "cordoba":
            personasQueFueronACordoba++;
            break;
    }
    if (
        personasQueFueronAPuertoMadryn > personasQueFueronAVillaGesell &&
        personasQueFueronAPuertoMadryn > personasQueFueronACordoba
    ) {
        lugarQueTuvoMasPasajeros = "puerto madryn";
    } else if (
        personasQueFueronAVillaGesell > personasQueFueronAPuertoMadryn &&
        personasQueFueronAVillaGesell > personasQueFueronACordoba
    ) {
        lugarQueTuvoMasPasajeros = "villa gesell";
    } else {
        lugarQueTuvoMasPasajeros = "cordoba";
    }

    // qué porcentaje usa equipaje de mano
    totalDePersonasQueViajan =
        personasQueFueronAPuertoMadryn +
        personasQueFueronAVillaGesell +
        personasQueFueronACordoba;

    if (equipajeDeMano === "si") {
        totalDePersonasConEquipajeDeMano++;
    }

    quePorcentajeUsaEquipajeDeMano =
        (totalDePersonasConEquipajeDeMano * 100) / totalDePersonasQueViajan;

    // que porcentaje hay de cada sexo
    if (sexo === "m") {
        cantidadDeHombres++;
    } else if (sexo === "f") {
        cantidadDeMujeres++;
    }

    porcentajeDeCantidadDeHombres =
        (cantidadDeHombres * 100) / totalDePersonasQueViajan;

    porcentajeDeCantidadDeMujeres =
        (cantidadDeMujeres * 100) / totalDePersonasQueViajan;

    alert(
        "El total de personas que fueron en temporada baja son: " +
            cantidadPersonasTemporadaBaja +
            " y la cantidad de personas que fueron en temporada alta son: " +
            cantidadPersonasTemporadaAlta +
            "\n" +
            "El peso total de los que viajan a Villa Gesell es: " +
            pesoTotalVillaGesell +
            "\n" +
            "El lugar con la mayor cantidad de dias acumulados es: " +
            lugarConMayorDiasAcumulados +
            "\n" +
            "La suma de todos los importes es: " +
            sumaDeTodosLosImportes +
            "\n" +
            "El pasajero mas liviano es: " +
            pesoDelPasajereoMasLiviano +
            " y el pasajero mas pesado es: " +
            pesoDelPasajeroMasPesado +
            "\n" +
            "El lugar donde se pago el mayor importa es: " +
            lugarDondeSePagoElMayorImporte +
            "\n" +
            "El nombre de la mujer mas alta: " +
            nombre +
            "\n" +
            "La forma de pago mas utilizada es: " +
            formaDePagoMasUtilizada +
            "\n" +
            "El lugar con mas pasajeros fue: " +
            lugarQueTuvoMasPasajeros +
            "\n" +
            "El porcentaje que usa equipaje de mano es: %" +
            quePorcentajeUsaEquipajeDeMano +
            "\n" +
            "Hay un %" +
            porcentajeDeCantidadDeMujeres +
            " de mujeres y un %" +
            porcentajeDeCantidadDeHombres +
            " de hombres"
    );
}
