function verificarRespuesta(pregunta) {
    // Obtener todas las opciones visibles en el div actual
    let divActual = null;
    switch(pregunta) {
        case "pregunta1":
        case "pregunta4":
        case "pregunta7":
        case "pregunta9":
            divActual = document.getElementById('div_p1');
            break;
        case "pregunta2":
        case "pregunta5":
        case "pregunta8":
        case "pregunta10":
            divActual = document.getElementById('div_p2');
            break;
        case "pregunta3":
        case "pregunta6":
        case "pregunta11":
            divActual = document.getElementById('div_p3');
            break;
        case "pregunta12":
            divActual = document.getElementById('div_p4');
            break;
    }

    if (!divActual) return;

    // Obtener solo las opciones del div actual
    const opciones = divActual.getElementsByTagName('input');
    let seleccionada = null;

    // Buscar cuál opción está seleccionada
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].type === 'radio' && opciones[i].checked) {
            seleccionada = opciones[i].value;
            break;
        }
    }

    // Verificar si se seleccionó alguna opción
    if (seleccionada === null) {
        alert("Por favor, selecciona una respuesta.");
        return;
    }

    // Variables para controlar qué elementos difuminar y divs a mostrar/ocultar
    let respuestaCorrecta = null;
    let div_desaparece = null;
    let div_aparece = null;
    let elementos_difuminar = [];
    let nivel_difuminado = '';

    // Definir respuestas correctas y elementos para cada pregunta
    switch (pregunta) {
        // ENTRANTES
        case "pregunta1":
            respuestaCorrecta = "respuesta2";
            div_desaparece = "div_p1";
            div_aparece = "div_p2";
            elementos_difuminar = ["plato_entrante1", "desc_entrante1", "plato_entrante2", "desc_entrante2", "plato_entrante3", "desc_entrante3"];
            nivel_difuminado = "difuminado-medio";
            break;
        case "pregunta2":
            respuestaCorrecta = "respuesta8";
            div_desaparece = "div_p2";
            div_aparece = "div_p3";
            elementos_difuminar = ["plato_entrante1", "desc_entrante1", "plato_entrante2", "desc_entrante2", "plato_entrante3", "desc_entrante3"];
            nivel_difuminado = "difuminado-bajo";
            break;
        case "pregunta3":
            respuestaCorrecta = "respuesta11";
            div_desaparece = "div_p3";
            div_aparece = "div_continuar";
            elementos_difuminar = ["plato_entrante1", "desc_entrante1", "plato_entrante2", "desc_entrante2", "plato_entrante3", "desc_entrante3"];
            nivel_difuminado = "sin-difuminado";
            break;
        
        // PRINCIPALES
        case "pregunta4":
            respuestaCorrecta = "resp_prin2";
            div_desaparece = "div_p1";
            div_aparece = "div_p2";
            elementos_difuminar = ["plato_principal1", "desc_principal1", "plato_principal2", "desc_principal2", "plato_principal3", "desc_principal3"];
            nivel_difuminado = "difuminado-medio";
            break;
        case "pregunta5":
            respuestaCorrecta = "resp_prin5";
            div_desaparece = "div_p2";
            div_aparece = "div_p3";
            elementos_difuminar = ["plato_principal1", "desc_principal1", "plato_principal2", "desc_principal2", "plato_principal3", "desc_principal3"];
            nivel_difuminado = "difuminado-bajo";
            break;
        case "pregunta6":
            respuestaCorrecta = "resp_prin11";
            div_desaparece = "div_p3";
            div_aparece = "div_continuar";
            elementos_difuminar = ["plato_principal1", "desc_principal1", "plato_principal2", "desc_principal2", "plato_principal3", "desc_principal3"];
            nivel_difuminado = "sin-difuminado";
            break;
        
        // POSTRES
        case "pregunta7":
            respuestaCorrecta = "resp_postre3";
            div_desaparece = "div_p1";
            div_aparece = "div_p2";
            elementos_difuminar = ["plato_postre1", "desc_postre1", "plato_postre2", "desc_postre2"];
            nivel_difuminado = "difuminado-medio";
            break;
        case "pregunta8":
            respuestaCorrecta = "resp_postre8";
            div_desaparece = "div_p2";
            div_aparece = "div_continuar";
            elementos_difuminar = ["plato_postre1", "desc_postre1", "plato_postre2", "desc_postre2"];
            nivel_difuminado = "sin-difuminado";
            break;
        
        // BEBIDAS
        case "pregunta9":
            respuestaCorrecta = "resp_bebida4";
            div_desaparece = "div_p1";
            div_aparece = "div_p2";
            elementos_difuminar = ["plato_bebida1", "desc_bebida1", "plato_bebida2", "desc_bebida2", "plato_bebida3", "desc_bebida3", "plato_bebida4", "desc_bebida4"];
            nivel_difuminado = "difuminado-medio";
            break;
        case "pregunta10":
            respuestaCorrecta = "resp_bebida7";
            div_desaparece = "div_p2";
            div_aparece = "div_p3";
            elementos_difuminar = ["plato_bebida1", "desc_bebida1", "plato_bebida2", "desc_bebida2", "plato_bebida3", "desc_bebida3", "plato_bebida4", "desc_bebida4"];
            nivel_difuminado = "difuminado-bajo";
            break;
        case "pregunta11":
            respuestaCorrecta = "resp_bebida10";
            div_desaparece = "div_p3";
            div_aparece = "div_p4";
            elementos_difuminar = ["plato_bebida1", "desc_bebida1", "plato_bebida2", "desc_bebida2", "plato_bebida3", "desc_bebida3", "plato_bebida4", "desc_bebida4"];
            nivel_difuminado = "difuminado-bajo";
            break;
        case "pregunta12":
            respuestaCorrecta = "resp_bebida9";
            div_desaparece = "div_p4";
            div_aparece = "div_continuar";
            elementos_difuminar = ["plato_bebida1", "desc_bebida1", "plato_bebida2", "desc_bebida2", "plato_bebida3", "desc_bebida3", "plato_bebida4", "desc_bebida4"];
            nivel_difuminado = "sin-difuminado";
            break;
        
        default:
            respuestaCorrecta = "ninguna";
    }

    // Verificar si la respuesta es correcta
    if (seleccionada === respuestaCorrecta) {
        alert("¡Respuesta correcta!");
        
        // Cambiar el nivel de difuminado de los elementos correspondientes
        elementos_difuminar.forEach(id => {
            const elemento = document.getElementById(id);
            if (elemento) {
                // Remover todas las clases de difuminado
                elemento.classList.remove('difuminado-alto', 'difuminado-medio', 'difuminado-bajo', 'sin-difuminado');
                // Agregar el nuevo nivel
                elemento.classList.add(nivel_difuminado);
            }
        });
        
        // Cambiar la visibilidad de los divs
        document.getElementById(div_desaparece).style.display = "none";
        document.getElementById(div_aparece).style.display = "block";
    } else {
        alert("¡Respuesta incorrecta! Vuelve a intentarlo.");
    }
}
