

const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function(event)
{
    event.preventDefault();

    const nombre = document.getElementById('nombre').value
    const edad = document.getElementById('edad').value
    const fechaNacimiento = document.getElementById('fechaNacimiento').value

    const textoFinal = `Mi nombre es ${nombre}, mi edad es ${edad} y mi nací el ${fechaNacimiento}`
    
    document.getElementById('resultado').textContent = textoFinal
}
)






