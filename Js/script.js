var input =document.getElementById('input')
var input2 =document.getElementById('input2')
var button =document.getElementById('button')
    cont=0
input.addEventListener('input', stop)//datos en el input activa el efecto
input2.addEventListener('input', stop)
    function stop(){
        if(cont==0){
            button.classList.remove('input-Clave')//remueve la clase
            cont++
        }
        else{
            
            button.classList.add('input-Clave')//añade la clase 
            cont--
        }
    }

    