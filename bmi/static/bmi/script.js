function oblicz(){
    const waga = parseFloat(document.getElementById('waga').value);
    const wzrost = parseFloat(document.getElementById('wzrost').value)/100;
    const bmi = waga/(wzrost*wzrost);

    document.getElementById('odpowiedz').innerHTML = bmi;
}