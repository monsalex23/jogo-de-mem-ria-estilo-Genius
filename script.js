let oder = [];
let clickedOrder = [];
let score = 0;

//0 = verde
//1 = rojo
//2 = amarillo
//3 = azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow= document.querySelector('.yellow');

//crea orden de colores aleatorios
let shuffleOrder = () => {
    let colorOrder = math.floor(math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createElement(order[i]);
        ligthColor(elementColor, Number(i) + 1);
    }
}

//sube al proximo color
let ligthColor= (element, number) =>{
    number = number * 500;
    setTimeout (() =>{
        element.classList.add('selected')
    }, number -250);
    setTimeout (() =>{
        element.classList.remove('selected')
    });

}

//revisa si los botones son el mismo orden que genero el juego
let checkOrder = () => {
    for (led i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            lose();
            break;
        }
    }
    if ( clickedOrder.length == order.length) {
        alert(`puntuacion: ${score}\n Usted acerto! iniciando proximo nivel` );
        nextLevel();
    }
}