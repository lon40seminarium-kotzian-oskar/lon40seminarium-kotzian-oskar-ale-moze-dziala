const bmiScale = {
    wyglodzenie : { min : 0, max : 15, nazwa : "wygłodzenie", degmin : 180 , degmax : 225 },
    wychudzenie : { min : 15.1, max : 17.4, nazwa : "wychudzenie", degmin : 226 , degmax : 270 },
    niedowaga : { min : 17.5, max : 18.4, nazwa : "niedowage", degmin : 271 , degmax : 315 },
    wartosc_prawidlowa : { min : 18.5, max : 24.9, nazwa : "wartość prawidłową", degmin : 316 , degmax : 359 },
    nadwaga : { min : 25.0, max : 29.9, nazwa : "nadwagę", degmin : 0, degmax : 44 },
    I_stopien_otylosci : { min : 30.0, max : 34.9, nazwa : "I stopień otyłości", degmin : 45 , degmax : 89 },
    II_stopien_otylosci : { min : 35.0, max : 39.9, nazwa : "II stopień otyłości", degmin : 90 , degmax : 135 },
    III_stopien_otylosci : { min : 40.0, max : 45.0, nazwa : "III stopień otyłości", degmin : 136 , degmax : 179 },
};

function oblicz(){
    const waga = parseFloat(document.getElementById('waga').value);
    const wzrost = parseFloat(document.getElementById('wzrost').value)/100;
    const bmi = waga/(wzrost*wzrost);

    for( i in bmiScale){
        if(bmi > bmiScale[i].min && bmi < bmiScale[i].max){
            document.getElementById('odpowiedz').innerHTML = `Twoje bmi to ${bmi} i masz ${bmiScale[i].nazwa}`;
            document.getElementById('image2').style.transform =
                `scale(1.064) rotate(${bmiScale[i].degmin + ((bmi - bmiScale[i].min) / (bmiScale[i].max - bmiScale[i].min)) * (bmiScale[i].degmax - bmiScale[i].degmin)}deg)`;
        }else{
            document.getElementById('odpowiedz').innerHTML = `Twoje bmi to ${bmi} i jesteś jebanym gróbasem`;
        }
    }
}