function imc() {
    nome = document.getElementById('nome').value;
    altura = document.getElementById('altura').value;
    peso = document.getElementById('peso').value;
    resultado = document.getElementById('resultado');

    valorIMC = (peso / (altura * altura)).toFixed(1);

    if (valorIMC < 18.5) {
        classificacao = 'Abaixo do peso.'
    } else if (valorIMC < 25) { 
        classificacao = "Com peso ideal, Parabéns!"
    } else if (valorIMC < 30) {
        classificacao = 'Levemente acima do peso.'
    } else if (valorIMC < 35) {
        classificacao = 'Com obesidade grau I.'
    } else if (valorIMC < 40) {
        classificacao = 'Com obesidade grau II'
    } else {
        classificacao = 'Com obesidade grau III. Cuide-se!';
    }

    resultado.textContent = nome + ", seu IMC é " + valorIMC + " e você está " + classificacao;
}

    

