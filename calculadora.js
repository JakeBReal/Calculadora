// Para traer todo 
const pantalla = document.querySelector(".pantalla");
//pongo .btn porque son clases
const botones = document.querySelectorAll(".btn");


botones.forEach(boton => {
    //Eso es para cuando hagamos un click se realice un evento
    boton.addEventListener("click", () =>{
        const botonapretado= boton.textContent;
        if(boton.id === "c"){
            pantalla.textContent= "0";
            return ;
        }

        if(boton.id === "borrar"){
            if(pantalla.textContent.length ===1 ||
            pantalla.textContent === "Error!"){
            pantalla.textContent= "0";
            }else {
                pantalla.textContent=pantalla.textContent.slice(0,-1);
            }
           return;
        }

        if(boton.id ==="igual"){
            try{
            pantalla.textContent = eval(pantalla.textContent);
            } catch{
                pantalla.textContent= "Error!";
            }
            return; 
        }

        if(pantalla.textContent === "0"){
            pantalla.textContent =botonapretado;
        }else {
            pantalla.textContent += botonapretado;
        }
            })

})