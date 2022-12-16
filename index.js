//Variáveis Chave
const main = document.querySelector('main');
const root = document.querySelector(':root')
const input = document.getElementById('input');
const resultInput = document.getElementById('result');
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

//Funcionalidade dos botões
document.querySelectorAll(".charKey").forEach(function(charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        const value = charKeyBtn.dataset.value;
        input.value += value;
    });
});

//Botão Clear
document.getElementById('clear').addEventListener('click', function(){
    input.value = '';
    input.focus();
});

//Botão de Igual
document.getElementById('equal').addEventListener('click', calculate);

//Digitar o cálculo no lugar de teclar
input.addEventListener('keydown', function(ev){
    ev.preventDefault();
    if (allowedKeys.includes(ev.key)){
        input.value += ev.key;
        return
    } else if (ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1);
    } else if (ev.key === 'Enter'){
        calculate();
    };
});

//Fazer o Cálculo
function calculate(){
    resultInput.value = "ERRO"; 
    resultInput.classList.add('error'); 
   
    const result = eval(input.value);

    resultInput.value = result;
    resultInput.classList.remove('error');
};

//Alterar Tema
document.getElementById('themeSwitcher').addEventListener('click', function(){
    if (main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color', '#f1f5f9');
        root.style.setProperty('--border-color', '#aaa');
        root.style.setProperty('--font-color', '#212520');
        root.style.setProperty('--primary-color', '#26834a');
        main.dataset.theme = 'light';
    } else {
        root.style.setProperty('--bg-color', '#212529');
        root.style.setProperty('--border-color', '#667');
        root.style.setProperty('--font-color', '#f1f5f9');
        root.style.setProperty('--primary-color', '#4dff91');
        main.dataset.theme = 'dark';
    }
})

//Botão copiar
document.getElementById('copyToClipboard').addEventListener('click', function(ev){
    const button = ev.currentTarget;
    if (button.innerText === 'Copiar'){
        button.innerText = 'Copiado';
        button.classList.add('success');
        navigator.clipboard.writeText(resultInput.value);
    } else {
        button.innerText = "Copiar";
        button.classList.remove('success');
    }
})
