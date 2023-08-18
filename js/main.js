//Pedir por prompt cantidad de alumnos a ingresa
//ciclo recorremos esa cantidad y vamos pidiendo los datos
//hacemos el calculo

//para averiguar si es un numero
function IsNUM(variable) {
    return !isNaN(variable) || String.prototype.trim(variable) !== "";
  }
  
  //Calcular nota final de alumnos ingresados
  function notaAlumnos() {
    let alumnos = new Array();
    let numAlumnos = parseFloat(
      window.prompt("Cantidad de Notas de Alumnos a Ingresar: ", 0)
    );
  
    if (IsNUM(numAlumnos)) {
      for (let x = 0; x < numAlumnos; x++) {
        //un numero hasta su limite
        let nota = parseFloat(window.prompt(`Ingrese nota del alumno ${x + 1}: `, 0));
        if (IsNUM(nota)) {
          alumnos.push(nota);
        } else {
          alumnos = [];
          alert("Ingrese un numero");
          break;
        }
      }
      //calculo
      if (alumnos.length > 0) {
        alert("Las notas finales son... => click en aceptar");
        let suma = 0;
        alumnos.forEach((x) => {
          suma += parseFloat(x);
        });
        alert(
          `La nota final para los alumnos es: ${
            suma / alumnos.length
          } => aceptar para continuar`
        );
        suma = 0;
        alumnos = [];
      }
    } else {
      alert("Ingrese un Numero Valido");
    }
  }