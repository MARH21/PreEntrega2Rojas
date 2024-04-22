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