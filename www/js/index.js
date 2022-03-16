let form = document.querySelector("form");
let resultado = document.querySelector(".resultado");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputPeso = e.target.querySelector("#peso");
    let inputAltura = e.target.querySelector("#altura");

    let peso = Number(inputPeso.value);
    let altura = Number(inputAltura.value);

    if (!peso) {
        setResult("Peso Invalido", false);
        return;
    }
    if (!altura) {
        setResult("Altura Invalida", false);
        return;
    }

    let imcRes = peso / (altura * altura);
    let imc = imcRes.toFixed(2);

    if (imc < 18.5) {
        resultado.classList.remove("pesoNormal");
        resultado.classList.remove("sobrePeso");
        resultado.classList.remove("GrauObesidade");
        resultado.classList.add("abaixoPeso");
        setResult(`Seu IMC é ${imc} (Abaixo do peso)`);
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado.classList.remove("abaixoPeso");
        resultado.classList.remove("sobrePeso");
        resultado.classList.remove("GrauObesidade");
        resultado.classList.add("pesoNormal");
        setResult(`Seu IMC é ${imc} (Peso Normal)`);
    } else if (imc >= 25.0 && imc <= 29.9) {
        resultado.classList.remove("pesoNormal");
        resultado.classList.remove("abaixoPeso");
        resultado.classList.remove("GrauObesidade");
        resultado.classList.add("sobrePeso");
        setResult(`Seu IMC é ${imc} (Sobrepeso)`);
    } else if (imc >= 30.0 && imc <= 34.9) {
        resultado.classList.add("grauObesidade");
        resultado.classList.remove("pesoNormal");
        resultado.classList.remove("abaixoPeso");
        resultado.classList.remove("sobrePeso");
        setResult(`Seu IMC é ${imc} (Grau Obesidade I)`);
    } else if (imc >= 35.0 && imc < 39.9) {
        resultado.classList.add("grauObesidade");
        resultado.classList.remove("pesoNormal");
        resultado.classList.remove("abaixoPeso");
        resultado.classList.remove("sobrePeso");
        setResult(`Seu IMC é ${imc} (Grau Obesidade II)`);
    } else if (imc > 40.0) {
        resultado.classList.add("grauObesidade");
        resultado.classList.remove("pesoNormal");
        resultado.classList.remove("abaixoPeso");
        resultado.classList.remove("sobrePeso");
        setResult(`Seu IMC é ${imc} (Grau Obesidade III)`);
    }
});

function criaP() {
    const p = document.createElement("p");
    return p;
}

function setResult(msg) {
    let resultado = document.querySelector(".resultado");
    resultado.innerHTML = "";

    let p = criaP();
    p.innerHTML = msg;
    resultado.appendChild(p);
}
