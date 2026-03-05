function showMenu1(){
    document.getElementById('value1').style.display = 'block';
}

function readValue1() {
    var a = Number(document.getElementById('value1').value);
    var belt = document.getElementById('belt1');

    if (a === 0) {
        belt.style.backgroundColor = 'black';
    } else if (a === 1) {
        belt.style.backgroundColor = 'brown';
    } else if (a === 2) {
        belt.style.backgroundColor = 'red';
    }
}