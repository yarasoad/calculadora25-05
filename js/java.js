/*variáveis do index.html (elementos do Li e Div input)*/
var btn = document.querySelectorAll(".key li"), /*queryselectorALL, o "all" é pq tem mais de um elemento*/
input = document.querySelector(".input-valor"),  /*queryselector é pq não tem mais de um elemento, no caso, só tem UM visor*/
operador = document.querySelectorAll(".operador"); /*mesma coisa do 1*/

//loop identificar se o usuário vai continuar digitando//  //loop vai ficar rodando até a função ser concluída, se não achar a função (caso digite +48 numeros, por exemplo) ele dará erro//
for(var i = 0; i<btn.length; i++)  //ele está comparando se algum valor é >maior que 0, se sim ele irá continuar clicando//  //sempre que se inicia um loop começa em 0//    //i++  =repetir//
{
    document.onkeypress= function(event)  //onkeypress = quando pressionar a tela, ele vai fazer um evento, no caso é o numero vai pro visor//
     {
var key = event.charCode; //transfrm key em charcode = extensao para o navegador firefox interpretar a calculadora (ele não interpreta e com essa extensão sim)//
for(var e = 0; e <= 10; e++ )   //comparar todos os numeros pressionados de 0 a 9, ou seja, tudo que vier antes do 10//
   {
       if(key === (48+e))  //if= SE tal coisa acontecer//  //serve para ele suportar os numeros (no caso até 48 numeros)//
       {
      input.innerHTML += e;
       }
   }
   switch (key)  //switch: comparar, nesse caso vamos comparar as teclas   key:teclas  (comparar todos os valores até achar o igual)//
   {
       case 42:  //case=caso// 
       input.innerHTML += "*";
       break;    //break=pausa//
       case 43: 
       input.innerHTML += "+";
       break;
       case 44:
       input.innerHTML += "-";
       break;
       case 45:
       input.innerHTML += ".";
       break;
       case 46:
       input.innerHTML += "/";
       break;
    case 13:
    case 16:
        var equacao=input.innerHTML;
        if(equacao)
        {
    try{
        input.innerHTML=eval(equacao);
    }
    catch (e) 
{
    alert ('Erro na expressão')  //vendo se o usuario ira digitar 0-9 se ele n clicar em nenhum numero e clicar primeiro na operação irá aparecer essa mensagem em amarelo "erro.."//
}
       }
    break;
    case 67:
    case 99:
        input.innerHTML="";
        break;
        default:
            break;
        }
   };
btn[i].addEventListener('click', function()    //habilitar função clique dos botões e receber valor do i (compração do botão)//
{ 
    var btnVal =this.innerHTML,
    inputVal=input.innerHTML;
    console.log(btnVal);

        switch(btnVal)
        {
            case "c":
            input.innerHTML="";
            break;
            case"=":
            var equacao = inputVal;

            if(equacao)
            {
             try
             {
             input.innerHTML = eval (equacao);
             } catch (e){
             alert("Erro na Expressão")
             }
            }
            break;
            default:
                input.innerHTML += btnVal;
                break;
        }
})

    }



