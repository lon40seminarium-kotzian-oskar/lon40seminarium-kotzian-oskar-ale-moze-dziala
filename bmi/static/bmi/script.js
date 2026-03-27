const bmiScale = {
    wyglodzenie : { min : 0, max : 15 },
    wychudzenie : { min : 15.1, max : 17.4},
    niedowaga : { min : 17.5, max : 18.4},
    wartosc_prawidlowa : { min : 18.5, max : 24.9},
    nadwaga : { min : 25.0, max : 29.9},
    I_stopien_otylosci : { min : 30.0, max : 34.9},
    II_stopien_otylosci : { min : 35.0, max : 39.9},
    II_stopien_otylosci : { min : 40.0, max : 45.0},
};

function oblicz(){
    const waga = parseFloat(document.getElementById('waga').value);
    const wzrost = parseFloat(document.getElementById('wzrost').value)/100;
    const bmi = waga/(wzrost*wzrost);

    for( i in bmiScale){
        if(bmi > bmiScale[i].min && bmi < bmiScale[i].max){
            document.getElementById('odpowiedz').innerHTML = `Twoje bmi to ${bmi} i masz ${i}`;
        }
    }
}