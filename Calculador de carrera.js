    function calcular_proxima_carrera() {
        let selectFechas = document.get_ElementById("fechas");
        let fechaSeleccionada = selectFechas.value;
        let fechaProximaCarrera = convertir_Fecha(fechaSeleccionada);
        let tiempoRestante = calcularTiempoParaProximaCarrera(fechaProximaCarrera);
        let resultado = document.get_ElementById("resultado");
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