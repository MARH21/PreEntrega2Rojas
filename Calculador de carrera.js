        function calcularProximaCarrera() {
            let selectFechas = document.getElementById("fechas");
            let fechaSeleccionada = selectFechas.value;

            let fechaProximaCarrera = convertirFecha(fechaSeleccionada);

            let tiempoRestante = calcularTiempoParaProximaCarrera(fechaProximaCarrera);

            let resultado = document.getElementById("resultado");
            resultado.textContent = `La próxima carrera de Fórmula 1 es el ${fechaSeleccionada} y faltan ${tiempoRestante.dias} días, ${tiempoRestante.horas} horas, ${tiempoRestante.minutos} minutos y ${tiempoRestante.segundos} segundos para su inicio.`;
        }

        function convertirFecha(fechaStr) {
            let partes = fechaStr.split(' ');
            let mes = partes[0];
            let dia = parseInt(partes[1]);

            let mesNum;
            switch (mes) {
                case 'May.':
                    mesNum = 4; 
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

            let fecha = new Date(new Date().getFullYear(), mesNum, dia);

            return fecha;
        }

        function calcularTiempoParaProximaCarrera(fechaProximaCarrera) {
            let fechaActual = new Date();
            let diferenciaTiempo = fechaProximaCarrera.getTime() - fechaActual.getTime();

            let dias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24));
            let horas = Math.floor((diferenciaTiempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutos = Math.floor((diferenciaTiempo % (1000 * 60 * 60)) / (1000 * 60));
            let segundos = Math.floor((diferenciaTiempo % (1000 * 60)) / 1000);

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
    const step = 200; 
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

  let currentQuestion = 0;
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const resultElement = document.getElementById("result");

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

    resultElement.textContent = ""; 
  }

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

  showQuestion();