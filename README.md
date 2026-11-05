<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Quiz educativo sobre privacidad digital y derechos personales.">
    <title>Radar d Privacidad Digital</title>
    <link rel="stylesheet" href="Diseñio.css">
    <script src="Pensamiento.js" defer></script>
</head>

<body>
    <header class="encabezado">
        <div class="logo">🛡️ RADAR DIGITAL</div>
        <span class="etiqueta">MATERIA: LEGISLACIÓN INFORMÁTICA</span>
    </header>
    <main class="contenedor">

        <!-- GIF lateral izquierdo -->
        <div class="gif-lateral gif-izquierdo">
            <img src="imagenes/Camisa.gif" alt="Animación de seguridad digital">
        </div>

        <!-- GIF lateral derecho -->
        <div class="gif-lateral gif-derecho">
            <img src="imagenes/Chivas escudo.gif" alt="Animación de privacidad digital">
        </div>

        <!-- PANTALLA DE INICIO -->
        <section class="hero">
            <div class="icono-principal">🔐</div>
            <p class="subtitulo">OPERACIÓN: Examen de seguridad digital</p>

            <h1>¿Qué tanto proteges tu privacidad?</h1>

            <p class="descripcion">
                Responde 6 preguntas rápidas, descubre riesgos
                digitales y aprende cómo proteger tus datos
                de la mejor manera.
            </p>

            <button id="btnIniciar" class="boton principal">
                COMENZAR PRUEBA →
            </button>

            <p class="nota">Sin registro · Sin nombre · Sin respuestas enviadas
            </p>
        </section>

        <!-- QUIZ: TODO EL CONTENIDO VA DENTRO DE ESTA SECCIÓN -->
        <section id="zonaQuiz" class="panel oculto">

            <div class="progreso-texto">

                <span id="numeroPregunta">PREGUNTA 1 DE 6</span>

                <div class="progreso-derecho">

                    <img
                        id="gifPregunta2"
                        src="imagenes/67.gif"
                        alt="Animación de escaneo"
                        class="oculto"
                    >

                    <span id="porcentaje">0%</span>

                </div>

            </div>

            <div class="barra-progreso">
                <div id="barra" class="barra"></div>
            </div>

            <h2 id="pregunta"></h2>

            <p id="instruccion" class="ayuda">
                Selecciona la opción que mejor describa tu situación.
            </p>

            <div id="opciones" class="opciones"></div>

            <p id="mensaje" class="mensaje" aria-live="polite"></p>

            <button id="btnSiguiente" class="boton principal" disabled>
                SIGUIENTE →
            </button>

        </section>

        <!-- RESULTADOS -->
        
<!-- PANTALLA FINAL Y RESULTADOS -->
        <section id="zonaResultado" class="panel oculto" aria-live="polite">

            <!-- PANTALLA DE FINALIZACIÓN -->
            <div id="pantallaFinal" class="finalizacion oculto">

                <h2>¡Quiz completado! 🎉</h2>
                <img
                    src="imagenes/GOKU.gif"
                    alt="Quiz completado"
                    class="gif-finalizacion">
                <button id="btnContinuarResultados" class="boton principal">
                    VER RECOMENDACIONES →
                </button>
            </div>

            <!-- RECOMENDACIONES -->
            <div id="contenidoResultados" class="oculto">

                <div class="icono-principal">📊</div>

                <p class="subtitulo">ANÁLISIS COMPLETADO :D</p>

                <h2 id="tituloResultado"></h2>

                <p id="resumenResultado" class="descripcion"></p>

                <h3>Tus recomendaciones:</h3>

                <ul id="listaConsejos" class="consejos"></ul>

                <button id="btnReiniciar" class="boton principal">
                    REPETIR EXAMEN ↻
                </button>
            </div>
        </section>

        <!-- DERECHOS DIGITALES -->
        <section class="panel legal">

            <p class="subtitulo">TUS DERECHOS DIGITALES</p>
            <h2>¿Qué dice la ley en México?</h2>
            <article class="ley">
                <h3>⚖️ Artículo 16 constitucional:</h3>
                <p>Reconoce el derecho a la protección d los datos personales y los derechos ARCO, conforme a la ley y T puede ser muy util para este tipo d casos d vulneracion d informacion.</p>
            </article>

            <article class="ley">
                <h3>⚖️ Artículo 6 constitucional:</h3>
                <p>Reconoce el derecho a la expresion respetuosa d manera libre y garantizando el no regazo d la sociedad x ello, ademas d el libre acseso a informacion publica en el formato que sea.</p>
            </article>

            <article class="ley">
                <h3>📄Derechos ARCO:</h3>
                <p>
                    <strong>Acceso:</strong> conocer tus datos.
                    <strong>Rectificación:</strong> corregirlos.
                    <strong>Cancelación:</strong> solicitar su eliminación cuando proceda.
                    <strong>Oposición:</strong> oponerte a ciertos usos en los supuestos previstos por la ley.
                </p>
            </article>

            <article class="ley">
                <h3>🔎 ¿Qué puedes hacer?</h3>
                <p>Revisar los avisos d privacidad, cuidar los permisos d las aplicaciones e informarte sobre cómo ejercer tus derechos por ejemplo sitando los 2 articulos previamente expuestos cuando sea requerido ;></p>

            </article>

            <a
                class="enlace-ley"
                href="https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                Consultar la Constitución mexicana ↗
            </a>

            <a
                class="enlace-ley"
                href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                Consultar la ley de protección d datos personales ↗
            </a>

            <a
                class="enlace-ley"
                href="https://sites.google.com/d/1j7f5JfQjb-_go4YkrjnzDQRyLUBDTGmy/p/1ZN4OF_0t16mPt9B7i4NGzu9m3NQFW5Br/edit"
                target="_blank"
                rel="noopener noreferrer"
            >
                Consultar las leyes d la sociedad de mi compañero ↗
            </a>

            <p class="nota legal-nota">
                Material educativo. La aplicación d la ley depende d las circunstancias d cada caso.
            </p>
        </section>
    </main>

    <footer>
        <p>RADAR D PRIVACIDAD DIGITAL</p>
        <p>Proyecto by: Luis. Ing. Sistemas</p>
    </footer>

</body>
</html>
