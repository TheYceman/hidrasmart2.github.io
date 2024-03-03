
function typewriter(valueText){
    // Texto a animar
    switch (valueText){
        case "text1":
            var textToAnimate = `Alcanza el máximo rendimiento con una visión hidráulica global en sistemas de distribución de agua, incorporando la inteligencia hidráulica para pasar de las medidas locales al conocimiento global, identificando el comportamiento de la red en cada punto logrando un control preciso en tiempo real.`;
            break;
        case "text2":
            var textToAnimate = `Logra el control global de canales hidráulicos, flexibilizando la respuesta a cambios de consumos de un modo ágil y seguro, reduciendo la inercia del canal,identificando anomalías mediante un seguimiento automático del estado del canal en tiempo real, y facilitando las labores del explotador, mejorando la eficiencia y el servicio.`;
            break;
        case "text3":
            var textToAnimate = `Controla la precisión y el estado de un parque de contadores volumétricos y la red de tuberías de modo sistemático y en tiempo real, de manera eficiente y económica, para una mejor gestión y control de los recursos hídricos.`;
            break;
        case "text4":
            var textToAnimate = `Optimiza las labores de conservación y mantenimiento en el drenaje transversal de infraestructuras lineales, priorizando actuaciones para minimizar riesgos, que son evaluados de forma integral y objetiva para realizar una gestión inteligente.`;
            break;
    }

    // Obtener el contenedor de texto
    var textContainer = document.querySelector('.text_container');


    // Dividir el texto en palabras
    var words = textToAnimate.split(' ');

    // Variable para almacenar el contenido HTML generado
    var htmlContent = '';

    // Generar el contenido HTML con los elementos span
    for (var i = 0; i < words.length; i++) {
        htmlContent += '<span>' + words[i] + '&nbsp</span>';
    }

    // Agregar el contenido HTML al contenedor de texto
    textContainer.innerHTML = htmlContent;

    // Obtener todas las etiquetas span generadas
    var spans = document.querySelectorAll('.text_container span');

    // Aplicar animaciones a cada span
    for (var j = 0; j < spans.length; j++) {
        spans[j].style.opacity = '0';
        spans[j].style.filter = 'blur(4px)';
        spans[j].style.animation = 'fade-in 0.8s ' + (0.3 * j) + 's forwards cubic-bezier(0.11, 0, 0.5, 0)';
    }

    // Animación para desvanecer el texto
    textContainer.style.fontFamily = "Montserrat Medium";
    textContainer.style.maxWidth = "40ch";
    textContainer.style.textAlign = "center";
    textContainer.style.transform = "scale(0.94)";
    textContainer.style.animation = "scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1)";

    // Animación de fade-in
    var fadeinKeyframes = `
        @keyframes fade-in {
            100% {
                opacity: 1;
                filter: blur(0);
            }
        }
    `;

    // Agregar las reglas de animación al CSS
    var style = document.createElement('style');
    style.innerHTML = fadeinKeyframes;
    document.head.appendChild(style);
};

function stopTypeWriter() {
    // Detener la animación eliminando las reglas de animación del contenedor de texto
    var textContainer = document.querySelector('.text_container');
    textContainer.style.animation = 'none';

    // Vaciar el contenido del contenedor de texto
    textContainer.innerHTML = '';
}

