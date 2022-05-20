/* Ejercicio 1
Crear un programa que reciba las 3 notas de un alumno, y si muestra por pantalla los siguientes mensajes dependiendo de la nota ingresada:
> a 8: Excelente!!
5 a 8: Aprobado
< a 5: Desaprobado */

let notasAlumno: number;
notasAlumno = Number(prompt("Ingrese nota"));
if (notasAlumno > 8) {
  alert("Excelente!!");
} else if (notasAlumno >= 5) {
  alert("Aprobado");
} else if (notasAlumno < 5) {
  alert("Desaprobado");
}
