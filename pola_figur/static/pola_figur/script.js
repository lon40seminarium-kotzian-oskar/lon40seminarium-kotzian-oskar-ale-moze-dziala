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

function triangleArea(){
    let h = Number(document.getElementById('trH').value);
    let a = Number(document.getElementById('trA').value);

    let area = (a * h) / 2;

    document.getElementById("trAResult").innerHTML =
    `Pole: ${area}`;
}

function triangleDiameter(){
    let a = Number(document.getElementById('trDA').value);
    let b = Number(document.getElementById('trB').value);
    let c = Number(document.getElementById('trC').value);
    
    let perimeter = a+b+c;

    document.getElementById("trDResult").innerHTML = 
    `obwód: ${perimeter}`;
}

function trapeziumArea(){
    let h = Number(document.getElementById('trpH').value);
    let a = Number(document.getElementById('trpA').value);
    let b = Number(document.getElementById('trpB').value);

    let area = ((a + b) * h) / 2;

    document.getElementById("trpAResult").innerHTML =
    `Pole: ${area}`;
}

function trapeziumDiameter(){
    let a = Number(document.getElementById('trpDA').value);
    let b = Number(document.getElementById('trpB').value);
    let c = Number(document.getElementById('trpC').value);
    let d = Number(document.getElementById('trpD').value);

    let perimeter = a+b+c+d;

    document.getElementById("trpDResult").innerHTML = 
    `obwód: ${perimeter}`;
}