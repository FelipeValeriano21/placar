const n1 = document.getElementById ( 'n1' ); 
const n2 = document.getElementById ( 'n2' ); 
const n3 = document.getElementById ( 'n3' ); 
const n4 = document.getElementById ( 'n4' ); 
const esq = document.getElementById ( 'esq' ); 
const dir = document.getElementById ( 'dir' ); 
const bot3 = document.getElementById ( 'bot3' ); 
const bot4 = document.getElementById ( 'bot4' ); 
const nome1 = document.getElementById ( 'nome1' ); 
const nome2 = document.getElementById ( 'nome2' ); 


var jog1 = 0;
var jog2 = 0;
var ne1 = ""; 
var ne2 = "";

ne1 = prompt("Nome do jogador 1");
ne2 = prompt("Nome do jogador 2");

nome1.textContent = ne1;
nome2.textContent = ne2;


function mais1 () {
jog1 = jog1+1;
esq.textContent = jog1;

if(jog1==10){


    window.alert("Parabés " + ne1 + " você venceu!")

    location.reload();
    
}
}

function menos1 () {
jog1 = jog1-1;
esq.textContent = jog1;   

if(jog1<0){

    jog1 = jog1-jog1; 
    esq.textContent = jog1;

window.alert("Não é possivel")

}

}

function mais2 () {   
jog2 = jog2+1;
dir.textContent = jog2;  

if(jog2==10){


    window.alert("Parabés " + ne2 + " você venceu!")

    location.reload();
    
}

}

function menos2 () {
jog2 = jog2-1; 
dir.textContent = jog2;

if(jog2<0){

    jog2 = jog2-jog2; 
    dir.textContent = jog2;

window.alert("Não é possivel")

}

}
    

function reiniciaj1 (){
    jog2 = jog2-jog2; 
    dir.textContent = jog2;
}

function reiniciaj2 (){

    jog1 = jog1-jog1; 
    esq.textContent = jog1;
}
   

n1.addEventListener( 'click', mais1 ); 
n2.addEventListener( 'click', menos1 );
n3.addEventListener( 'click', mais2 );  
n4.addEventListener( 'click', menos2 ); 
bot3.addEventListener( 'click', reiniciaj1 ); 
bot4.addEventListener( 'click', reiniciaj2 ); 


