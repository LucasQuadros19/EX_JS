
let preco,tipo,l,resultado;
tipo=prompt("qual combustivel A=alcool G-gasolina:");
l=prompt("quantos litros:");
switch (tipo) {
    case 'A':
        preco=2.90
      if(l==20){
            preco= preco*l;
          resultado= preco-(preco*0.03);
          alert(l+"de alcool="+resultado);
      }else if(l>=20){
             preco= preco*l;
            resultado= preco-(preco*0.05);
            alert(l+"de alcool="+resultado);
      }else{
        resultado= preco*l;
        alert(l+" de alcool="+resultado);
      }
        break;
    case 'G':
        preco=3.30
        if(l==20){
              preco= preco*l;
            resultado= preco-(preco*0.04);
            
            alert(l+"de gasolina="+resultado);
        }else if(l>=20){
               preco= preco*l;
              resultado= preco-(preco*0.06);
              alert(l+"de gasolina="+resultado);
          
        }else{
          resultado= preco*l;
          alert(l+" de gasolina="+resultado);
        }
       break;
    default:
        alert("vc escolheu errado");
        break;
}