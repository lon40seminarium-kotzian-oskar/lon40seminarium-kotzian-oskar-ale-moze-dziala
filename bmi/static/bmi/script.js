const bmiScale = {
    under: { degmax : -85 , degmin : -120, max :21 },
    normal: { degmax : -34  , degmin : -84 },
    over: { degmax : 33 , degmin : -33 },
    obese: { degmax : 84 , degmin : 34 },
    extreamly: { degmax : 120, degmin : 85 }
};

function oblicz(){
    const waga = parseFloat(document.getElementById('waga').value);
    const wzrost = parseFloat(document.getElementById('wzrost').value)/100;
    const bmi = waga/(wzrost*wzrost);

    document.getElementById('odpowiedz').innerHTML = bmi;
}