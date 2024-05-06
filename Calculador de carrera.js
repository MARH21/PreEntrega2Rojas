        // Función para calcular la próxima carrera de Fórmula 1
        function calcularProximaCarrera() {
            // Obtenemos el elemento select y su valor seleccionado
            let selectFechas = document.getElementById("fechas");
            let fechaSeleccionada = selectFechas.value;

            // Convertimos la cadena de fecha seleccionada en un objeto de fecha
            let fechaProximaCarrera = convertirFecha(fechaSeleccionada);

            // Calculamos el tiempo restante hasta la próxima carrera
            let tiempoRestante = calcularTiempoParaProximaCarrera(fechaProximaCarrera);

            // Mostramos el resultado en el elemento resultado
            let resultado = document.getElementById("resultado");
            resultado.textContent = `La próxima carrera de Fórmula 1 es el ${fechaSeleccionada} y faltan ${tiempoRestante.dias} días, ${tiempoRestante.horas} horas, ${tiempoRestante.minutos} minutos y ${tiempoRestante.segundos} segundos para su inicio.`;
        }

        // Función para convertir una cadena de fecha en un objeto de fecha
        function convertirFecha(fechaStr) {
            // Dividimos la cadena en partes
            let partes = fechaStr.split(' ');
            let mes = partes[0];
            let dia = parseInt(partes[1]);

            // Determinamos el mes
            let mesNum;
            switch (mes) {
                case 'May.':
                    mesNum = 4; // May. es 4 porque los meses en JavaScript son base 0
                    break;
                case 'Jun.':
                    mesNum = 5;
                    break;
                case 'Jul.':
                    mesNum = 6;
                    break;
                case 'Ago.':
                    mesNum = 7;
                    break;
                case 'Sep.':
                    mesNum = 8;
                    break;
                case 'Oct.':
                    mesNum = 9;
                    break;
                case 'Nov.':
                    mesNum = 10;
                    break;
                case 'Dic.':
                    mesNum = 11;
                    break;
            }

            // Creamos el objeto de fecha para la fecha seleccionada
            let fecha = new Date(new Date().getFullYear(), mesNum, dia);

            return fecha;
        }

        // Función para calcular cuánto falta para la próxima carrera de Fórmula 1
        function calcularTiempoParaProximaCarrera(fechaProximaCarrera) {
            let fechaActual = new Date();
            let diferenciaTiempo = fechaProximaCarrera.getTime() - fechaActual.getTime();

            // Convertimos la diferencia de tiempo a días, horas, minutos y segundos
            let dias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));
            let horas = Math.floor((diferenciaTiempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutos = Math.floor((diferenciaTiempo % (1000 * 60 * 60)) / (1000 * 60));
            let segundos = Math.floor((diferenciaTiempo % (1000 * 60)) / 1000);

            // Devolvemos el resultado como un objeto
            return {
                dias: dias,
                horas: horas,
                minutos: minutos,
                segundos: segundos
            };
        }

let currentIndex = 0;

document.querySelector('.prev-button').addEventListener('click', () => {
   navigate(-1);
});

document.querySelector('.next-button').addEventListener('click', () => {
   navigate(1);
});

function navigate(direction) {
   const galleryContainer = document.querySelector('.gallery-container');
   const totalImages = document.querySelectorAll('.gallery-item').length;

   currentIndex = (currentIndex + direction + totalImages) % totalImages;
   const offset = -currentIndex * 100;

   galleryContainer.style.transform = `translateX(${offset}%)`;
}


const carousel = document.querySelector('.carousel');
let scrollAmount = 0;

function scrollImages(direction) {
    const step = 200; // Adjust scroll distance
    scrollAmount += step * direction;
    carousel.style.transform = `translateX(${-scrollAmount}px)`;
}

  // Preguntas y respuestas
  const questions = [
    {
      question: "¿Cuál es el piloto con más títulos de Fórmula 1?",
      options: ["Michael Schumacher", "Lewis Hamilton", "Juan Manuel Fangio", "Sebastian Vettel"],
      answer: "Michael Schumacher"
    },
    {
      question: "¿Cuál es el equipo con más títulos de constructores?",
      options: ["Ferrari", "Mercedes", "McLaren", "Williams"],
      answer: "Ferrari"
    },
    {
      question: "¿En qué país se corre el Gran Premio de Mónaco?",
      options: ["Francia", "Italia", "España", "Mónaco"],
      answer: "Mónaco"
    }
  ];

  // Variables globales
  let currentQuestion = 0;
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const resultElement = document.getElementById("result");

  // Función para mostrar la pregunta actual
  function showQuestion() {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;

    optionsElement.innerHTML = "";
    current.options.forEach(option => {
      const optionElement = document.createElement("div");
      optionElement.classList.add("option");
      optionElement.textContent = option;
      optionElement.addEventListener("click", () => checkAnswer(option));
      optionsElement.appendChild(optionElement);
    });

    resultElement.textContent = ""; // Limpiar el resultado anterior
  }

  // Función para verificar la respuesta seleccionada
  function checkAnswer(selected) {
    const current = questions[currentQuestion];
    if (selected === current.answer) {
      resultElement.textContent = "¡Respuesta correcta!";
      resultElement.style.color = "green";
    } else {
      resultElement.textContent = "Respuesta incorrecta. La respuesta correcta es: " + current.answer;
      resultElement.style.color = "red";
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
      setTimeout(showQuestion, 2000); // Mostrar la siguiente pregunta después de 2 segundos
    } else {
      resultElement.textContent = "Fin de la trivia";
    }
  }

  // Mostrar la primera pregunta al cargar la página
  showQuestion();