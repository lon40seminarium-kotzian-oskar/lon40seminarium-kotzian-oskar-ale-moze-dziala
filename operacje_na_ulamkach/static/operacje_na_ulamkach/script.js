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

    if (m1 === 0 || m2 === 0) {
        alert("Mianownik nie może być zerem");
        return;
    }

    let licznik = l1 * m2 + l2 * m1;
    let mianownik = m1 * m2;

    document.getElementById('lw').value = licznik;
    document.getElementById('mw').value = mianownik;
}

function odejmijUlamek(){
    let l1 = Number(document.getElementById('l2').value);
    let m1 = Number(document.getElementById('m2').value);
    let l2 = Number(document.getElementById('l3').value);
    let m2 = Number(document.getElementById('m3').value);

    if (m1 === 0 || m2 === 0) {
        alert("Mianownik nie może być zerem");
        return;
    }

    let licznik = l1 * m2 - l2 * m1;
    let mianownik = m1 * m2;

    document.getElementById('lw').value = licznik;
    document.getElementById('mw').value = mianownik;
}
