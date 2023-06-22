// Obtém a hora atual
var data = new Date();
var hora = data.getHours();

// Definir se está no modo noturno com base na hora
var modoNoturno = hora >= 18 || hora < 6;

// Define a mensagem com base na hora
var mensagem;
if (hora >= 6 && hora <12) {
    mensagem = "Bom dia!";
}

if (hora >= 12 && hora < 18) {
    mensagem = "Boa Tarde!";
}

if (modoNoturno) {
    document.body.classList.add('dark-mode');
    mensagem = "Boa noite!";
}
if (!modoNoturno) {
    document.body.classList.add('light-mode');
}
alert (mensagem);

// VALIDACAO DOS CAMPOS DO FORMULARIO
function validarFormulario() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("tel").value;
    let cpf = document.getElementById("cpf").value;

    let nomeErro = document.getElementById("nomeErro");
    let emailErro = document.getElementById("emailErro");
    let telErro = document.getElementById("telErro");
    let cpfErro = document.getElementById("cpfErro");

    nomeErro.textContent = "";
    emailErro.textContent = "";
    telErro.textContent = "";
    cpfErro.textContent = "";

    var validado = true;

    if (nome == "") {
        nomeErro.innerHTML = "Preencha o campo Nome.";
        validado = false;
    }

    if (email == "") {
        emailErro.innerHTML = "Preencha o campo Email.";
        validado = false;
    }

    if (telefone == "") {
        telErro.innerHTML = "Preencha o campo Telefone.";
        validado = false;
    }

    if (cpf == "") {
        cpfErro.innerHTML = "Preencha o campo CPF.";
        validado = false;
    }

    if (validado) {
        let dados = {
            nome: nome,
            email: email,
            telefone: telefone,
            cpf: cpf
        };

    dadosFormulario.push(dados);

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("tel").value = "";
    document.getElementById("cpf").value = "";
    
    console.log("Dados do formulário inseridos no vetor:");
    console.log(dadosFormulario);
    }
    return validado;
}

let dadosFormulario = [];

// MASCARAS

// Obter referência ao campo de entrada de CPF
const cpfInput = document.getElementById("cpf");
cpfInput.addEventListener("input", function() {
    mascaraCPF(this);
});
function mascaraCPF(obj) {
    let cpf_formatado = obj.value;
    cpf_formatado = cpf_formatado.replace(/[^0-9]/g, "");
    cpf_formatado = cpf_formatado.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/g,
      "$1.$2.$3-$4"
    );
    obj.value = cpf_formatado;
}

const telInput = document.getElementById("tel");
telInput.addEventListener("input", function() {
    mascaraTelefone(this);
});
function mascaraTelefone(obj) {
    let tel_formatado = obj.value;
    tel_formatado = tel_formatado.replace(/[^0-9]/g, "");
    tel_formatado = tel_formatado.replace(
        /(\d{2})(\d{5})(\d{4})/g,
        "($1)$2-$3"
    );
    obj.value = tel_formatado;
}

function checkName(nome) {
    if (nome.value.length < 3) return false;
    if (nome.value.match(/[0-9]/g)) return false;
    return true;
}

function checkCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    strCPF = strCPF.replace(/[^\d]/g, "");
    if (strCPF == "00000000000") return false;
  
    for (i = 1; i <= 9; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;
  
    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;
  
    Soma = 0;
    for (i = 1; i <= 10; i++)
      Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;
  
    if (Resto == 10 || Resto == 11) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
  }