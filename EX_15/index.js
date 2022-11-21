let array=[],valor,aux=0;


for(let i=1;i<=10;i++){
    valor=prompt("coloque o multiplicador:")
    valor=Number(valor);
    array.push(valor);

}
for(let i=1;i<=10;i++){
    console.log(array[i]);   
    if(array[i]<0){
        aux++;
    }
    
}

alert(aux+" negativos");