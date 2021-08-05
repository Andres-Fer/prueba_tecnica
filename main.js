function calcularDias(x){
    
    
    
    let fin=null;
    let inicio=null;
    
    fin=new Date(validarTexto(x.value));                      
    console.log(fin);
    inicio= new Date(fin.getFullYear(),0,1);
    let miliSegundosDia=24*60*60*1000;    

    let diferencia=Math.abs(inicio.getTime()-fin.getTime());
    let total=Math.round(diferencia/miliSegundosDia);    
    
    alert('la fecha corresponde al dia '+total+' del '+(parseInt(fin.getFullYear())));
}

function validarTexto(texto){
    
    let fecha = new Date();
    let valores = texto.split('/');
    if (valores.length != 3){
        
        valores = texto.split('-');
    }                
        if(valores[1].length>2){

        switch (valores[1]){

            case 'ENE':
                valores[1]=0;
                break;

            case 'FEB':
                valores[1]=1;
                break;
        
            case 'MAR':
                valores[1]=2;
                break;
            
            case 'ABR':
                valores[1]=3;
                break;
            
            case 'MAY':
                valores[1]=4;
                break;
            
            case 'JUN':
                valores[1]=5;
                break;
            
            case 'JUL':
                valores[1]=6;
                break;
            
            case 'AGO':
                valores[1]=7;
                break;
                
            case 'SEP':
                valores[1]=8;
                break;
                
            case 'OCT':
                valores[1]=9;
                break;
                
            case 'NOV':
                valores[1]=10;
                break;
                
            case 'DIC':
                valores[1]=11;
                break;
                
            DEFAULT
                valores[1]=0;
                break;
        }
    } 
    else{
        switch (valores[1]){

            case '01':
                valores[1]=0;
                break;

            case '02':
                valores[1]=1;
                break;
        
            case '03':
                valores[1]=2;
                break;
            
            case '04':
                valores[1]=3;
                break;
            
            case '05':
                valores[1]=4;
                break;
            
            case '06':
                valores[1]=5;
                break;
            
            case '07':
                valores[1]=6;
                break;
            
            case '08':
                valores[1]=7;
                break;
                
            case '09':
                valores[1]=8;
                break;
                
            case '10':
                valores[1]=9;
                break;
                
            case '11':
                valores[1]=10;
                break;
                
            case '12':
                valores[1]=11;
                break;
                case '01':
                valores[1]=0;
                break;
                
            case '1':
                valores[1]=0;
                break;

            case '2':
                valores[1]=1;
                break;
        
            case '3':
                valores[1]=2;
                break;
            
            case '4':
                valores[1]=3;
                break;
            
            case '5':
                valores[1]=4;
                break;
            
            case '6':
                valores[1]=5;
                break;
            
            case '7':
                valores[1]=6;
                break;
            
            case '8':
                valores[1]=7;
                break;
                
            case '9':
                valores[1]=8;
                break;
                
            DEFAULT
                valores[1]=0;
                break;
        }        
    }        
    
    if(valores[0].length=4){
            
            fecha = new Date(valores[0], valores[1], (parseInt(valores[2])+1));
    }

    if(valores[2].length=4){
            
            fecha = new Date(valores[2], valores[1], (parseInt(valores[0])+1));
    }
    console.log(fecha);
    return (fecha);
}


;