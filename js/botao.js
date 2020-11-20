function botao(){
    document.getElementById('agradecimento').innerHTML = 'Obrigado';
    //alert('Estamos no mês: ' + (d.getMonth()+1)  + ' de Novembro');
}

function mudar(){
   // window.open("https://web.digitalinnovation.one/home");
    window.location.href = "https://web.digitalinnovation.one/home";
}

function trocar(fer) {
    //document.getElementById("mousemove").innerHTML = 'O que tá rolando';
    fer.innerHTML = "O que tá rolando aqui?";
}

function voltar(fer){
    //document.getElementById("mousemove").innerHTML = 'Passe o mouse'
    fer.innerHTML = 'Passe o mouse';
}

function load(){
    alert('Página carregada');
}

function funcaoChange(fer){
    console.log(fer.value);
}