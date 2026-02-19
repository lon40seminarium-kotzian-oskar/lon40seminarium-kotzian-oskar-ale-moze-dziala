function nwd1(a,b){
    while(a!=b){
        if(a>b){
            a = a - b;
        }else{
            b=b-a;
        }
    }
    return a;
}

function skracjUlamek(){
    let a = Number(document.getElementById('l1').value);
    let b = Number(document.getElementById('m1').value);
    let nwd = nwd1(a,b);

    if(nwd!=1){
        document.getElementById('l1s').value = a/nwd;
        document.getElementById('m1s').value = b/nwd;
        document.getElementById('ukls').innerHTML = "Ułamek skrócony ma postać";
    } else {
        document.getElementById('l1s').value = "";
        document.getElementById('m1s').value = "";
        document.getElementById('ukls').innerHTML = "Ułamka nie da sie skrócić";
    }
}

function dodajUlamek(){
    let l1 = Number(document.getElementById('l2').value);
    let m1 = Number(document.getElementById('m2').value);
    let l2 = Number(document.getElementById('l3').value);
    let m2 = Number(document.getElementById('m3').value);

    if(m1===m2){
        document.getElementById('lw').innerHTML = l1+l2;
        document.getElementById('lw').innerHTML = m1;
    }
}