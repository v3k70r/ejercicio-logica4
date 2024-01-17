/*const prompt=require("prompt-sync")({sigint:true});

do{
num = parseInt(prompt("Ingrese un número: "));
    if (!isNaN(num)) {
        console.log("¡Perfecto! ha ingresado un número.")
    } else {
        console.log("Debe ingresar un número. Intente denuevo.")
    }
}while(isNaN(num))


console.log(`Se generará la secuencia de fibonacci hasta el número ${num}`)
console.log(fib(num))*/


function ejecutar(){
    let num = document.getElementById("valor").value;
    if (!isNaN(num)) {
        document.getElementById("resultado").innerHTML = fib(num)
    } else {
        document.getElementById("resultado").innerHTML = "Debe ingresar un número. Intente denuevo."
    }
}
function fib(num) {
    let a = 1;
    let b = 1;
    let suma;
    let retorno = [0, 1, 1]
    if(num == 1){
        return [0];
    }else if(num == 2){
        return [0, 1]
    }else{
        for(let i = 0; i < (num -3); i++){
            suma = a + b
            b = a
            a = suma
            retorno.push(suma)
        }
        return retorno
    }

}
