// revisão de conceitos basicos 
// const = cria uma variavel que não mudam de referÊncia 
//function= bloco de códigos reutilizável
//getelementbyid = seleciona elementos do html pelo id
// addeventlistener = ouve ações do  usuario (ex:clique)
//.value = pega o valor digitado em um input 
//parsefloat = converte texto em numero decimal
//.trim() =  remove espaços extras do começo/fim
//if/else = estruturas de decisão
//template string (`${}`) = insere variaveis dentro de strings
//isNaN()= função que verifica se um valor é ou não é um numero
/*&&= operador logico "E",todas as condições precisam ser verdadeiras para dar true
ex: if(idade>30(numero), peso 90(numero), nome 20(texto) = false*/
// || =operador logico "OU", basta uma condição verdadeira para dar true
//.tofixed() = define numero de casas decimais retorna uma string com o valor arredondado

//seleciona o botão "calcular pelo id "
const calcular = document.getElementById('calculadora');

//função principal para calcular IMC

function imc() {
    //pegando os valores dos inputs
          const nome = document.getElementById('nome').value.trim();
          const altura = parseFloat(document.getElementById('altura').value);
          const peso = parseFloat(document.getElementById('peso').value);
          const resultado = document.getElementById('resultado');



    // validação :só executa se todos os campos estiverem preenchidos e forem validados 

    if(nome && ! isNaN(altura) && ! isNaN(peso)) {

        //fórmula do IMC : peso / (altura * altura)
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        //variável para armazenar a classificação 
        let classificacao = "";

        // estrutura de decisão baseada no valor do IMC

        if (valorIMC < 18.5) {
            classificacao = 'Abaixo do peso';

        } else if (valorIMC <24.9) {
            classificacao = 'no Peso ideal';

        } else if (valorIMC <29.9) {
            classificacao ='obesidade grau 1';

        }else if (valorIMC <34.9) {
            classificacao =' obesidade grau 2'

        }
        else if (valorIMC >35) {
            classificacao = "obesidade grau 3"
        }


        //mostrar o resultado final no <div id=resultado>
        resultado.textContent =`${nome}, seu IMC é ${valorIMC} e você está ${classificacao}.`;

    } else {
        //caso o usuario deixe algum campo vazio ou inválido 
        resultado.textContent = '⚠️ Preencha todos os campos corretamente!';
    }


}

//associa a função imc ao clique do botão 
calcular.addEventListener('click', imc);
