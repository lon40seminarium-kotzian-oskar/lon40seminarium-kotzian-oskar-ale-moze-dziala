function nwd1(a,b){
    a = Math.abs(a);
    b = Math.abs(b);
    while(b) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}

function skracjUlamek(){
    let a = Number(document.getElementById('l1').value);
    let b = Number(document.getElementById('m1').value);
    let nwd = nwd1(a,b);

    if(b === 0){
        alert("Mianownik nie może być zerem");
        return;
    }

    if(nwd!=1){
        document.getElementById('l1s').value = a/nwd;
        document.getElementById('m1s').value = b/nwd;
        document.getElementById('ulsk').innerHTML = "Ułamek skrócony ma postać";
    } else {
        document.getElementById('l1s').value = "";
        document.getElementById('m1s').value = "";
        document.getElementById('ukls').innerHTML = "Ułamka nie da sie skrócić";
    }
}

function calculateAndDisplay(l1, m1, l2, m2, operation, cwId, lwId, mwId) {
    if (m1 === 0 || m2 === 0) {
        alert("Mianownik nie może być zerem");
        return;
    }

    let licznik;
    if (operation === 'add') {
        licznik = l1 * m2 + l2 * m1;
    } else {
        licznik = l1 * m2 - l2 * m1;
    }
    let mianownik = m1 * m2;

    if (mianownik < 0) {
        mianownik = -mianownik;
        licznik = -licznik;
    }

    if (licznik === 0) {
        document.getElementById(cwId).value = 0;
        document.getElementById(lwId).value = 0;
        document.getElementById(mwId).value = mianownik;
        return;
    }

    let nwd = nwd1(licznik, mianownik);
    licznik /= nwd;
    mianownik /= nwd;

    let calkowita = Math.trunc(licznik / mianownik);
    let resztaLicznik = Math.abs(licznik % mianownik);

    document.getElementById(cwId).value = calkowita;
    document.getElementById(lwId).value = resztaLicznik;
    document.getElementById(mwId).value = mianownik;
}


function dodajUlamek(){
    let l1 = Number(document.getElementById('l2').value);
    let m1 = Number(document.getElementById('m2').value);
    let l2 = Number(document.getElementById('l3').value);
    let m2 = Number(document.getElementById('m3').value);
    calculateAndDisplay(l1, m1, l2, m2, 'add', 'cw', 'lw', 'mw');
}

function odejmijUlamek(){
    let l1 = Number(document.getElementById('l4').value);
    let m1 = Number(document.getElementById('m4').value);
    let l2 = Number(document.getElementById('l5').value);
    let m2 = Number(document.getElementById('m5').value);
    calculateAndDisplay(l1, m1, l2, m2, 'subtract', 'cw1', 'lw1', 'mw1');
}
