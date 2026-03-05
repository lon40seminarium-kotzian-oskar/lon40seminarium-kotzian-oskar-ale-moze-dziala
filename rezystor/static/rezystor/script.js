function showMenu1(){
    document.getElementById('value1').style.display = 'block';
}

function readValue1(){
    var a = document.getElementById('value1').value;
    var bg = document.getElementById('belt1').style['background-color'];
    if(a == 0){
        bg = 'black';
    } else if (a == 1){
        bg = 'brown';
    } else if (a == 2){
        bg = 'red';
    }
}