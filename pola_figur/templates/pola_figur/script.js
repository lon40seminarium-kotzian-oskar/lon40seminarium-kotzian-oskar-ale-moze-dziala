function rectangle(){
    let a = Number(document.getElementById('rectA').value);
    let b = Number(document.getElementById('rectB').value);

    let area = a * b;
    let perimeter = 2 * (a + b);

    document.getElementById("rectResult").innerHTML =
        `Pole: ${area}<br>Obwód: ${perimeter}`;
}

function circle(){
    let r = Number(document.getElementById('cirR').value);

    let area = Math.PI * r * r;
    let perimeter = 2 * Math.PI * r;

    document.getElementById("cirResult").innerHTML =
        `Pole: ${area.toFixed(3)}<br>Obwód: ${perimeter.toFixed(3)}`;
}