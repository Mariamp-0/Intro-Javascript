const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function(event)
{
    event.preventDefault();

    const nombre = document.getElementById('nombre').value
    const tipoCita = document.getElementById('tipoCita').value
    const horario = document.getElementById('horario').value
    const fecha = document.getElementById('fecha').value
    const nombreMedico = document.getElementById('nombreMedico').value
    const recordatorio = document.getElementById('recordatorio').value

    const textoFinal = `Hola ${nombre},su cita de ${tipoCita} en el horario: ${horario} 
    en la fecha ${fecha} con el médico ${nombreMedico} con opción de recordatorio ${recordatorio} ha sido confirmada`
    
    document.getElementById('resultado').textContent = textoFinal
}
)