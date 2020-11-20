function soma(n1, n2) {
    return n1 + n2;
}

function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        var validar = true;
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt('Qual sua idade?')
console.log(validaIdade(idade));


/*
function setReplace(frase, nome, novo_nome){
   return frase.replace(nome, novo_nome)
}

alert(soma(2,7));
alert(setReplace('Vai Japão', 'Japão', 'Brasil'));
*/