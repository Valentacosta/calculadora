const listaPrincipal = []

const agregarNumero = (event)=>{
    event.preventDefault()
    const numero = Number (document.getElementById("numero").value)
    listaPrincipal.push(numero)
    document.getElementById(numero).value = ""
}

const procesarDato = ()=>{
    const max = Math.max(...listaPrincipal)
    const min = Math.min(...listaPrincipal)
    let suma = 0
    listaPrincipal.map(elemento=>suma+=elemento)
    let promedio = suma/listaPrincipal.length
    let ul = document.getElementById("mostrarDatos")
    ul.innerHTML = `
    <li>maximo = ${max}</li>
    <li>minimo = ${min}</li>
    <li>total = ${suma}</li>
    <li>promedio = ${promedio}</li>
    `
}