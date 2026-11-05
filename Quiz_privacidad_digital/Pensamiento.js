"use strict";

// PREGUNTAS DEL QUIZ
const preguntas = [
    {
        pregunta: "¿Publicas tu ubicación en tiempo real en redes sociales?",
        respuestaCorrecta: 2,
        opciones: [
            {
                texto: "Sí, suelo mostrar dónde estoy🙄",
                puntos: 2,
                consejo: "Evita publicar tu ubicación en tiempo real y revisa quién puede ver tus publicaciones :V"
            },
            {
                texto: "A veces, dependiendo d la publicación.",
                puntos: 1,
                consejo: "Antes de publicar, revisa si realmente quieres compartir tu ubicación."
            },
            {
                texto: "No suelo compartir mi ubicación :D👍",
                puntos: 0,
                consejo: "¡Excelente hábito! Revisa también si tus fotos revelan lugares que frecuentas."
            }
        ]
    },
    {
        pregunta: "Una aplicación solicita acceso a tu ubicación, contactos y micrófono. ¿Qué haces?",
        respuestaCorrecta: 2,
        opciones: [
            {
                texto: "Acepto todos los permisos para continuar🤡",
                puntos: 2,
                consejo: "Evita conceder permisos innecesarios a las aplicaciones."
            },
            {
                texto: "Acepto los permisos sin revisar demasiado",
                puntos: 1,
                consejo: "Lee para qué sirve cada permiso antes de aceptarlo."
            },
            {
                texto: "Reviso los permisos antes d decidir☝️🤓",
                puntos: 0,
                consejo: "¡Excelente! Continúa revisando los permisos desde la configuración d tu celular."
            }
        ]
    },
    {
        pregunta: "¿Cómo proteges tus cuentas personales?",
        respuestaCorrecta: 2,
        opciones: [
            {
                texto: "Uso la misma contraseña en varias cuentas🤡",
                puntos: 2,
                consejo: "Utiliza contraseñas diferentes para cada cuenta importante."
            },
            {
                texto: "Tengo algunas contraseñas diferentes.",
                puntos: 1,
                consejo: "Procura usar contraseñas únicas y activar la verificación en dos pasos."
            },
            {
                texto: "Uso contraseñas únicas y verificación en 2 pasos🙂‍↕️",
                puntos: 0,
                consejo: "¡Excelente! Mantén tus métodos d recuperación actualizados."
            }
        ]
    },
    {
        pregunta: "Si encuentras una vulnerabilidad digital en el software d la escuela... ¿QUE HACES? >:)...",
        respuestaCorrecta: 1,
        opciones: [
            {
                texto: "Intento aprovecharla para obtener información👹",
                puntos: 2,
                consejo: "Nunca aproveches una vulnerabilidad para acceder a información sin autorización diabliyo >:("
            },
            {
                texto: "Informo responsablemente al encargado d informática☝🤓",
                puntos: 0,
                consejo: "¡Excelente decisión! Reporta la vulnerabilidad de forma privada y evita explotarla o divulgarla."
            },
            {
                texto: "La comparto con todos mis compañeros🤟😎",
                puntos: 2,
                consejo: "Evita divulgar vulnerabilidades. Informa primero al personal responsable."
            }
        ]
    },
    {
        pregunta: "Recibes un mensaje que promete un premio y solicita tus datos personales. ¿Qué haces?",
        respuestaCorrecta: 2,
        opciones: [
            {
                texto: "Comparto mis datos para recibir el premio🤡",
                puntos: 2,
                consejo: "No compartas datos personales con mensajes sospechosos."
            },
            {
                texto: "Abro todos los enlaces para comprobarlo🤔",
                puntos: 2,
                consejo: "Evita abrir enlaces sospechosos. Verifica el mensaje por canales oficiales."
            },
            {
                texto: "Verifico el mensaje y evito compartir información.",
                puntos: 0,
                consejo: "¡Muy bien! Verifica siempre la identidad del remitente."
            }
        ]
    },
    {
        pregunta: "Estás conectado a una red Wi-Fi pública. ¿Cuál es una buena práctica?",
        respuestaCorrecta: 1,
        opciones: [
            {
                texto: "Realizar operaciones importantes sin precaución🤡",
                puntos: 2,
                consejo: "Evita hacer operaciones sensibles en redes públicas desconocidas bro :V"
            },
            {
                texto: "Evito ingresar información sensible y uso conexiones seguras☝️🤓",
                puntos: 0,
                consejo: "¡Excelente! Mantén tus dispositivos actualizados y usa conexiones seguras ;)"
            },
            {
                texto: "Compartir mis contraseñas con otras personas🤡🤌?",
                puntos: 2,
                consejo: "Nunca compartas tus contraseñas, especialmente en redes públicas :V."
            }
        ]
    }
];
// ELEMENTOS D LA PÁGINA:
const pantallaFinal = document.getElementById("pantallaFinal");
const contenidoResultados = document.getElementById("contenidoResultados");
const btnContinuarResultados = document.getElementById("btnContinuarResultados");

const zonaInicio = document.querySelector(".hero");
const zonaQuiz = document.getElementById("zonaQuiz");
const zonaResultado = document.getElementById("zonaResultado");

const numeroPregunta = document.getElementById("numeroPregunta");
const porcentaje = document.getElementById("porcentaje");
const barra = document.getElementById("barra");

const preguntaTexto = document.getElementById("pregunta");
const opciones = document.getElementById("opciones");
const mensaje = document.getElementById("mensaje");

const tituloResultado = document.getElementById("tituloResultado");
const resumenResultado = document.getElementById("resumenResultado");
const listaConsejos = document.getElementById("listaConsejos");

const gif = document.getElementById("gifPregunta2");

// VARIABLES DEL QUIZ:
let preguntaActual = 0;
let respuestas = [];
let opcionSeleccionada = null;

btnIniciar.addEventListener("click", iniciarQuiz);// INICIAR EL QUIZ

function iniciarQuiz() {
    pantallaFinal.classList.add("oculto");
    contenidoResultados.classList.add("oculto");
    preguntaActual = 0;
    respuestas = [];
    opcionSeleccionada = null;
    zonaInicio.classList.add("oculto");
    zonaResultado.classList.add("oculto");
    zonaQuiz.classList.remove("oculto");
    mostrarPregunta();
    zonaQuiz.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}

// MOSTRAR LA PREGUNTA ACTUAL
function mostrarPregunta() {
    const actual = preguntas[preguntaActual];

    actualizarGifPregunta();
    opcionSeleccionada = null;
    const avance = (preguntaActual / preguntas.length) * 100;

    numeroPregunta.textContent =
        `PREGUNTA ${preguntaActual + 1} DE ${preguntas.length}`;
    porcentaje.textContent = `${Math.round(avance)}%`;
    barra.style.width = `${avance}%`;

// Restablecer las barras a verde:
    barra.style.backgroundColor = "#16a34a";
    preguntaTexto.textContent = actual.pregunta;
    opciones.replaceChildren();
    mensaje.textContent = "Selecciona una respuesta para continuar.";
    btnSiguiente.disabled = true;
    actual.opciones.forEach((opcion, indice) => {
        const boton = document.createElement("button");
        boton.type = "button";
        boton.className = "opcion";
        boton.textContent = opcion.texto;
        boton.setAttribute("aria-pressed", "false");
        boton.addEventListener("click", () => {
            seleccionarOpcion(indice);
        });
        opciones.appendChild(boton);
    });

    btnSiguiente.textContent =
        preguntaActual === preguntas.length - 1
            ? "VER MI RESULTADO →"
            : "SIGUIENTE →";
}

// SELECCIONAR UNA RESPUESTA SIN REVELAR SI ES CORRECTA:
function seleccionarOpcion(indice) {
    opcionSeleccionada = indice;
    const botones = opciones.querySelectorAll(".opcion");
    botones.forEach((boton, i) => {
        const seleccionada = i === indice;
        boton.classList.toggle("seleccionada", seleccionada);
        boton.setAttribute("aria-pressed", String(seleccionada));
    });

// No revelar si la respuesta es correcta o incorrecta:
    mensaje.textContent = "Respuesta seleccionada. Pulsa siguiente para continuar.";
    mensaje.style.color = "";

    // Mantener la barra verde durante el quiz
    barra.style.backgroundColor = "#16a34a";
    btnSiguiente.disabled = false;
}

// GUARDAR RESPUESTA Y AVANZAR:
btnSiguiente.addEventListener("click", () => {

    if (opcionSeleccionada === null) {
        return;
    }

    const actual = preguntas[preguntaActual];
    const respuesta = actual.opciones[opcionSeleccionada];
    const correcta = opcionSeleccionada === actual.respuestaCorrecta;

    respuestas.push({
        pregunta: actual.pregunta,
        respuestaUsuario: respuesta.texto,
        respuestaCorrecta: actual.opciones[actual.respuestaCorrecta].texto,
        puntos: respuesta.puntos,
        consejo: respuesta.consejo,
        correcta: correcta
    });

    preguntaActual++;

    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    } else {
        mostrarResultado();
    }
});

// CALCULAR Y MOSTRAR RESULTADO
function mostrarResultado() {

    zonaQuiz.classList.add("oculto");
    zonaResultado.classList.remove("oculto");

    // Mostrar primero el GIF de finalización
    pantallaFinal.classList.remove("oculto");
    contenidoResultados.classList.add("oculto");

    barra.style.width = "100%";
    porcentaje.textContent = "100%";
    numeroPregunta.textContent = "ANÁLISIS COMPLETADO";

    const total = respuestas.reduce(
        (suma, respuesta) => suma + respuesta.puntos,
        0
    );

    if (total <= 2) {
        tituloResultado.textContent = "Buenas prácticas digitales";
        resumenResultado.textContent =
            "Tus respuestas reflejan varios hábitos positivos :D" +
            "Continúa revisando cómo compartes y proteges tus datos.";

    } else if (total <= 5) {
        tituloResultado.textContent = "Hay hábitos que puedes mejorar";
        resumenResultado.textContent =
            "Algunas de tus decisiones podrían aumentar tu exposición. " +
            "Revisa los consejos y aplica los que T sean útiles.";

    } else {

        tituloResultado.textContent = "Es momento d reforzar tu privacidad";

        resumenResultado.textContent =
            "Tus respuestas muestran varios hábitos que conviene revisar. " +
            "Pequeños cambios pueden ayudarte a proteger mejor tus cuentas y datos.";
    }

// MOSTRAR RECOMENDACIONES Y EXPLICAR CADA RESPUESTA
listaConsejos.replaceChildren();

respuestas.forEach((respuesta, indice) => {

    const elemento = document.createElement("li");

    const color = respuesta.correcta ? "#16a34a" : "#dc2626";

    elemento.style.borderLeft = `5px solid ${color}`;
    elemento.style.paddingLeft = "12px";
    elemento.style.marginBottom = "20px";

    // Número y pregunta
    const pregunta = document.createElement("h3");
    pregunta.textContent = `${indice + 1}. ${respuesta.pregunta}`;
    elemento.appendChild(pregunta);

    // Respuesta elegida
    const elegida = document.createElement("p");
    elegida.textContent = "Tu respuesta: " + respuesta.respuestaUsuario;
    elegida.style.color = color;
    elemento.appendChild(elegida);

    // Respuesta correcta
    const correcta = document.createElement("p");
    correcta.textContent = "Respuesta correcta: " + respuesta.respuestaCorrecta;
    correcta.style.color = "#16a34a";
    elemento.appendChild(correcta);

    // Resultado
    const resultado = document.createElement("p");
    resultado.textContent = respuesta.correcta
        ? "¡Correcto! 🎉"
        : "Respuesta incorrecta.";

    resultado.style.fontWeight = "bold";
    resultado.style.color = color;
    elemento.appendChild(resultado);

    // Consejo educativo
    const consejo = document.createElement("p");
    consejo.textContent = "Recomendación: " + respuesta.consejo;
    elemento.appendChild(consejo);

    listaConsejos.appendChild(elemento);

});

// Desplazarse a los resultados
pantallaFinal.scrollIntoView({
    behavior: "smooth",
    block: "start"
});
}
// VOLVER A EMPEZAR
btnReiniciar.addEventListener("click", () => {

    preguntaActual = 0;
    respuestas = [];
    opcionSeleccionada = null;

    listaConsejos.replaceChildren();

    tituloResultado.textContent = "";
    resumenResultado.textContent = "";

    zonaQuiz.classList.add("oculto");
    zonaResultado.classList.add("oculto");

    zonaInicio.classList.remove("oculto");

    barra.style.width = "0%";
    porcentaje.textContent = "0%";
    numeroPregunta.textContent = "PREGUNTA 1 DE 6";

    barra.style.backgroundColor = "#16a34a";

    actualizarGifPregunta();

    zonaInicio.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

// MOSTRAR GIF AL LLEGAR A LA PREGUNTA 4 (67%)
function actualizarGifPregunta() {

    if (preguntaActual === 4) {

        gif.classList.add("visible");
        gif.classList.remove("oculto");

    } else {

        gif.classList.add("oculto");
        gif.classList.remove("visible");
    }
}

btnContinuarResultados.addEventListener("click", () => {

    pantallaFinal.classList.add("oculto");
    contenidoResultados.classList.remove("oculto");

    zonaResultado.scrollIntoView({
        behavior: "smooth",
        block: "start"
    }); 
});