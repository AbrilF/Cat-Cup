//variables globales
var co = 0
var state = true
var cats = new Array(5);
for (var i = 0; i < 5; i++) {
    cats[i] = new Array(3);
}
//funcion para iniciar la carrera
// Pedir nombres de los gatos
cats[0][0]=prompt("Nombra a tu gato","Nombre del gato").toUpperCase();
cats[0][1]=1;
cats[1][0]=prompt("Nombra a tu gato","Nombre del gato").toUpperCase();
cats[1][1]=1;
cats[2][0]=prompt("Nombra a tu gato","Nombre del gato").toUpperCase();
cats[2][1]=1;
cats[3][0]=prompt("Nombra a tu gato","Nombre del gato").toUpperCase();
cats[3][1]=1;
cats[4][0]=prompt("Nombra a tu gato","Nombre del gato").toUpperCase();
cats[4][1]=1;
//mas variables
var num = 0;
var num2 = 0;
var interval = window.setInterval(function() { 
    lap();
},750);
//funcion lap para cada linea de carretera
function lap(){
    document.getElementById("name1").innerHTML=(cats[0][0]);
    document.getElementById("name2").innerHTML=(cats[1][0]);
    document.getElementById("name3").innerHTML=(cats[2][0]);
    document.getElementById("name4").innerHTML=(cats[3][0]);
    document.getElementById("name5").innerHTML=(cats[4][0]);
    if (state == true){
        //crea los divs para cada linea de carretera
        for (let i = 1; i < 6; i++) {
            for (let j = 1; j < 31; j++){
                co += 1
                //coloca todas las imagenes en el div para hacer la carretera en el div
                var imagen = document.createElement("img");
                imagen.src = "img/Captura.PNG"
                imagen.id = co
                var no = document.getElementById("div" + i)
                no.appendChild(imagen)
            }
        }
    }
    state = false
    //ciclo para cada gato y su posicion en la carretera aleatorio
    for (var i = 0; i < cats.length; i++) {
        cats[i][2]=Math.floor(Math.random() * 2);
        if (cats[i][1] >= 30){
            //notifica de que gato ha ganado
             //si el gato esta en la posicion 30 no se mueve mas y para
            alert(`¡El gatito ${cats[i][0]} ha ganado! `);
            clearInterval(interval);
            break;
        }
        //crea los movimientos de los gatos aleatorios
        if (cats[i][2] == 1){
            cats[i][1]+= Math.floor(Math.random() * 10);
            if(cats[i][1] >= 30){
                cats[i][1] = 30;
            }; 
        } else if(cats[i][2] == 0){
            cats[i][1]-= Math.floor(Math.random() * 5);
            if(cats[i][1] < 1){
                cats[i][1] = 1;
            };
        };

        //cambia la imagen del gato en la posicion que se encuentra
        switch (i) {
            case 0:
                document.getElementById(cats[i][1]).setAttribute("src","img/gato.jpg");
                break;
            case 1:
                document.getElementById(cats[i][1] + 30).setAttribute("src","img/gato.jpg");
                break;
            case 2:
                document.getElementById(cats[i][1] + 60).setAttribute("src","img/gato.jpg");
                break;
            case 3:
                document.getElementById(cats[i][1] + 90).setAttribute("src","img/gato.jpg");
                break;
            case 4:
                document.getElementById(cats[i][1] + 120).setAttribute("src","img/gato.jpg");
                break;  
        };
        for (let z = 1; z < 31; z++) {
            //si la posicion anterior es diferente a la actual
            if (z != cats[i][1]){
                //cambia la imagen de la posicion anterior
                switch (i) {
                    case 0:
                        document.getElementById(z).setAttribute("src","img/Captura.PNG");
                        break;
                    case 1:
                        document.getElementById(z + 30).setAttribute("src","img/Captura.PNG");
                        break;
                    case 2:
                        document.getElementById(z + 60).setAttribute("src","img/Captura.PNG");
                        break;
                    case 3:
                        document.getElementById(z + 90).setAttribute("src","img/Captura.PNG");
                        break;
                    case 4:
                        document.getElementById(z + 120).setAttribute("src","img/Captura.PNG");
                        break;  
                };
            };
        };
        console.log(`${cats[i][0]} is in position ${cats[i][1]}`);
    };
};
