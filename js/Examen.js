var calificacion = 0;

// Respuestas Correctas 

    // #1
    var correcto = document.createElement("div");
    correcto.classList.add("alert");
    correcto.classList.add("alert-success");
    correcto.style.width = "100%";
    correcto.style.marginTop = "20px";
    correcto.textContent = "¡Correcto!";

    // #2
    var correcto_2 = correcto.cloneNode(true);

    // #3
    var correcto_3 = correcto.cloneNode(true);

    // #4
    var correcto_4 = correcto.cloneNode(true);
    
    // #5
    var correcto_5 = correcto.cloneNode(true);

    // #6
    var correcto_6 = correcto.cloneNode(true);

    // #7
    var correcto_7 = correcto.cloneNode(true);

    // #8
    var correcto_8 = correcto.cloneNode(true);

    // #9
    var correcto_9 = correcto.cloneNode(true);

    // #10
    var correcto_10 = correcto.cloneNode(true);

// Respuestas Incorrectas 

    // #1
    var incorrecto = document.createElement("div");
    incorrecto.classList.add("alert");
    incorrecto.classList.add("alert-danger");
    incorrecto.style.width = "100%";
    incorrecto.style.marginTop = "20px";
    incorrecto.textContent = "¡Oh no! Tu respuesta es incorrecta. El enlace correcto para acceder al Portal del American Institute of Physics (AIP) es http://scitation.aip.org";

    // #2
    var incorrecto_2 = incorrecto.cloneNode(true);
    incorrecto_2.textContent = "¡Oh no! Tu respuesta es incorrecta. Una de las opciones de menús que se pueden encontrar dentro del Portal de American Institute of Physics es la de Publishers.";

    // #3
    var incorrecto_3 = incorrecto.cloneNode(true);
    incorrecto_3.textContent = "¡Oh no! Tu respuesta es incorrecta. Una opción que permite crear listas de enlaces para seleccionar artículos de interés dentro del Portal del American Institute of Physics es Favorites.";

    // #4
    var incorrecto_4 = incorrecto.cloneNode(true);
    incorrecto_4.textContent = "¡Oh no! Tu respuesta es incorrecta. El tipo de búsqueda que permite buscar información en todo un sistema de manera rápida, utilizando uno o varios términos combinados con operadores booleanos o comodines es la Búsqueda Simple.";
    
    // #5
    var incorrecto_5 = incorrecto.cloneNode(true);
    incorrecto_5.textContent = "¡Oh no! Tu respuesta es incorrecta. El código estándar internacional que permite la identificación de cualquier publicación seriada, incluyendo publicaciones electrónicas, con independencia del país de publicación, idioma o alfabeto es el ISSN.";

    // #6
    var incorrecto_6 = incorrecto.cloneNode(true);
    incorrecto_6.textContent = "¡Oh no! Tu respuesta es incorrecta. El operador lógico OR es el operador para la unión de conjuntos.";

    // #7
    var incorrecto_7 = incorrecto.cloneNode(true);
    incorrecto_7.textContent = "¡Oh no! Tu respuesta es incorrecta. Los comodines seleccionan documentos que incluyen correspondencias a una cadena de caracteres que incluye variables.";

    // #8
    var incorrecto_8 = incorrecto.cloneNode(true);
    incorrecto_8.textContent = "¡Oh no! Tu respuesta es incorrecta. Las colecciones son obras que han sido publicadas por el mismo editor financiero y tiene un estilo común y un formato uniforme.";

    // #9
    var incorrecto_9 = incorrecto.cloneNode(true);
    incorrecto_9.textContent = "¡Oh no! Tu respuesta es incorrecta. La Palabra Clave es el término simple o complejo por medio del cual es posible acceder a determinada información mediante un sistema de recuperación, sea manual o automático.";

    // #10
    var incorrecto_10 = incorrecto.cloneNode(true);
    incorrecto_10.textContent = "¡Oh no! Tu respuesta es incorrecta. El Factor de Impacto es una medida relacionada con la importancia de una publicación científica.";

    // Función de Calificar 
    function submit() {
        // Pregunta #1
        if ($('#scitation1').is(':checked')) {
            document.getElementById("retroalimentacion").appendChild(correcto);
            document.getElementById("retroalimentacion").classList.add("w-100");
            calificacion++;
        } else if ($('#scitation2').is(':checked') || $('#scitation3').is(':checked') || $('#scitation4').is(':checked')) {
            document.getElementById("retroalimentacion").appendChild(incorrecto);
            document.getElementById("retroalimentacion").classList.add("w-100");
        }

        // Pregunta #2
        if ($('#Publishers').is(':checked')) {
            document.getElementById("retroalimentacion_2").appendChild(correcto_2);
            document.getElementById("retroalimentacion_2").classList.add("w-100");
            calificacion++;
        } else if ($('#Students').is(':checked') || $('#Books').is(':checked') || $('#Thesaurus').is(':checked')) {
            document.getElementById("retroalimentacion_2").appendChild(incorrecto_2);
            document.getElementById("retroalimentacion_2").classList.add("w-100");
        }

        // Pregunta #3
        if ($('#Favorites').is(':checked')) {
            document.getElementById("retroalimentacion_3").appendChild(correcto_3);
            document.getElementById("retroalimentacion_3").classList.add("w-100");
            calificacion++;
        } else if ($('#MyProfile').is(':checked') || $('#Searches').is(':checked') || $('#Content').is(':checked')) {
            document.getElementById("retroalimentacion_3").appendChild(incorrecto_3);
            document.getElementById("retroalimentacion_3").classList.add("w-100");
        }

        // Pregunta #4
        if ($('#Simple').is(':checked')) {
            document.getElementById("retroalimentacion_4").appendChild(correcto_4);
            document.getElementById("retroalimentacion_4").classList.add("w-100");
            calificacion++;
        } else if ($('#Avanzada').is(':checked') || $('#Autores').is(':checked') || $('#Materias').is(':checked')) {
            document.getElementById("retroalimentacion_4").appendChild(incorrecto_4);
            document.getElementById("retroalimentacion_4").classList.add("w-100");
        }

        // Pregunta #5
        if ($('#ISSN').is(':checked')) {
            document.getElementById("retroalimentacion_5").appendChild(correcto_5);
            document.getElementById("retroalimentacion_5").classList.add("w-100");
            calificacion++;
        } else if ($('#INE').is(':checked') || $('#NOT').is(':checked') || $('#CURP').is(':checked')) {
            document.getElementById("retroalimentacion_5").appendChild(incorrecto_5);
            document.getElementById("retroalimentacion_5").classList.add("w-100");
        }

        // Pregunta #6
        if ($('#OR').is(':checked')) {
            document.getElementById("retroalimentacion_6").appendChild(correcto_6);
            document.getElementById("retroalimentacion_6").classList.add("w-100");
            calificacion++;
        } else if ($('#AND').is(':checked') || $('#NOTT').is(':checked') || $('#NOR').is(':checked')) {
            document.getElementById("retroalimentacion_6").appendChild(incorrecto_6);
            document.getElementById("retroalimentacion_6").classList.add("w-100");
        }

        // Pregunta #7
        if ($('#Comodines').is(':checked')) {
            document.getElementById("retroalimentacion_7").appendChild(correcto_7);
            document.getElementById("retroalimentacion_7").classList.add("w-100");
            calificacion++;
        } else if ($('#Metadatos').is(':checked') || $('#booleanos').is(':checked') || $('#proximidad').is(':checked')) {
            document.getElementById("retroalimentacion_7").appendChild(incorrecto_7);
            document.getElementById("retroalimentacion_7").classList.add("w-100");
        }

        // Pregunta #8
        if ($('#Colecciones').is(':checked')) {
            document.getElementById("retroalimentacion_8").appendChild(correcto_8);
            document.getElementById("retroalimentacion_8").classList.add("w-100");
            calificacion++;
        } else if ($('#Revistas').is(':checked') || $('#Thesaurus').is(':checked') || $('#Libros').is(':checked')) {
            document.getElementById("retroalimentacion_8").appendChild(incorrecto_8);
            document.getElementById("retroalimentacion_8").classList.add("w-100");
        }

        // Pregunta #9
        if ($('#PalabraClave').is(':checked')) {
            document.getElementById("retroalimentacion_9").appendChild(correcto_9);
            document.getElementById("retroalimentacion_9").classList.add("w-100");
            calificacion++;
        } else if ($('#Revistaaa').is(':checked') || $('#Autorrr').is(':checked') || $('#OperadorBooleano').is(':checked')) {
            document.getElementById("retroalimentacion_9").appendChild(incorrecto_9);
            document.getElementById("retroalimentacion_9").classList.add("w-100");
        }

        // Pregunta #10
        if ($('#FactorImpacto').is(':checked')) {
            document.getElementById("retroalimentacion_10").appendChild(correcto_10);
            document.getElementById("retroalimentacion_10").classList.add("w-100");
            calificacion++;
        } else if ($('#Eigenfactor').is(':checked') || $('#Abstract').is(':checked') || $('#Tema').is(':checked')) {
            document.getElementById("retroalimentacion_10").appendChild(incorrecto_10);
            document.getElementById("retroalimentacion_10").classList.add("w-100");
        }
        
        document.getElementById("calificacion").textContent = calificacion;

        if(calificacion >= 6) {
            document.getElementById("calificacion").style.color = "green";
        } else {
            document.getElementById("calificacion").style.color = "red";
        }
        
    }