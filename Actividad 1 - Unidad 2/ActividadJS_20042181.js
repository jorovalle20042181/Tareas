let mes = parseInt(prompt("Ingresa el mes de nacimiento (número):"));
let dia = parseInt(prompt("Ingresa el día de nacimiento:"));
switch (mes) {
  case 1:
    if((dia >= 20) && (dia <= 31)) {
      alert("Tu signo zodiacal es: Acuario")
    }else if((dia >= 01) && (dia <= 19)) {
      alert("Tu signo zodiacal es: Capricornio")
    }else alert("ingreso una fecha que no existe")
  break;
  case 2:
    if((dia >= 19) && (dia <= 29)) {
      alert("Tu signo zodiacal es: Piscis")
    }else if((dia >= 01) && (dia <= 18)) {
      alert("Tu signo zodiacal es: Acuario")
    }else alert("ingreso una fecha que no existe")
  break;
  case 3:
    if((dia >= 21) && (dia <= 31)) {
      alert("Tu signo zodiacal es: Aries")
    }else if((dia >= 01) && (dia <= 20)) {
      alert("Tu signo zodiacal es: Piscis")
    }else alert("ingreso una fecha que no existe")
  break;
  case 4:
    if((dia >= 20) && (dia <= 30)) {
      alert("Tu signo zodiacal es: Tauro")
    }else if((dia >= 01) && (dia <= 19)) {
      alert("Tu signo zodiacal es: Aries")
    }else alert("ingreso una fecha que no existe")
  break;
  case 5:
    if((dia >= 21) && (dia <= 31)) {
      alert("Tu signo zodiacal es: Géminis")
    }else if((dia >= 01) && (dia <= 20)) {
      alert("Tu signo zodiacal es: Tauro")
    }else alert("ingreso una fecha que no existe")
  break;
  case 6:
    if((dia >= 21) && (dia <= 30)) {
      alert("Tu signo zodiacal es: Cáncer")
    }else if((dia >= 01) && (dia <= 20)) {
      alert("Tu signo zodiacal es: Géminis")
    }else alert("ingreso una fecha que no existe")
  break;
  case 7:
    if((dia >= 23) && (dia <= 31)) {
      alert("Tu signo zodiacal es: Leo")
    }else if((dia >= 01) && (dia <= 22)) {
      alert("Tu signo zodiacal es: Cáncer")
    }else alert("ingreso una fecha que no existe")
  break;
  case 8:
    if((dia >= 23) && (dia <= 31)) {
      alert("Tu signo zodiacal es: Virgo")
    }else if((dia >= 01) && (dia <= 22)) {
      alert("Tu signo zodiacal es: Leo")
    }else alert("ingreso una fecha que no existe")
  break;
  case 9:
    if((dia >= 23) && (dia <= 30)) {
      alert("Tu signo zodiacal es: Libra")
    }else if((dia >= 01) && (dia <= 22)) {
      alert("Tu signo zodiacal es: Virgo")
    }else alert("ingreso una fecha que no existe")
  break;
  case 10:
    if((dia >= 23) && (dia <= 31)) {
      alert("Tu signo zodiacal es: Escorpio")
    }else if((dia >= 01) && (dia <= 22)) {
      alert("Tu signo zodiacal es: Libra")
    }else alert("ingreso una fecha que no existe")
  break;
  case 11:
    if((dia >= 22) && (dia <= 30)) {
      alert("Tu signo zodiacal es: Sagitario")
    }else if((dia >= 01) && (dia <= 21)) {
      alert("Tu signo zodiacal es: Escorpio")
    }else alert("ingreso una fecha que no existe")
  break;
  case 12:
    if((dia >= 22) && (dia <= 31)) {
      alert("Tu signo zodiacal es: Capricornio")
    }else if((dia >= 01) && (dia <= 21)) {
      alert("Tu signo zodiacal es: Sagitario")
    }else alert("ingreso una fecha que no existe")
  break;
  default:
    alert("ese mes no existe")
}