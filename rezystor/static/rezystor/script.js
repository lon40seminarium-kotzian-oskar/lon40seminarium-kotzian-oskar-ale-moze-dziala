const colors = {
    czarny: { color: "black", mnoznik: 1, cyfra: 0, tolerancja: null },
    brazowy: { color: "brown", mnoznik: 10, cyfra: 1, tolerancja: 1 },
    czerwony: { color: "red", mnoznik: 100, cyfra: 2, tolerancja: 2 },
    pomaranczowy: { color: "orange", mnoznik: 1000, cyfra: 3, tolerancja: null },
    zloty: { color: "yellow", mnoznik: 10000, cyfra: 4, tolerancja: null },
    zielony: { color: "green", mnoznik: 1000000, cyfra: 5, tolerancja: null },
    niebieski: { color: "blue", mnoznik: 10000000, cyfra: 6, tolerancja: null },
    fioletowy: { color: "violet", mnoznik: 10000000, cyfra: 7, tolerancja: null },
    szary: { color: "grey", mnoznik: 100000000, cyfra: 8, tolerancja: null },
    bialy: { color: "white", mnoznik: null, cyfra: 9, tolerancja: null },
    zloty: { color: "gold", mnoznik: 0.1, cyfra: null, tolerancja: 5 },
    srebny: { color: "silver", mnoznik: 0.01, cyfra: null, tolerancja: 10 }
};

function showMenu1(){
    document.getElementById('value1').style.display = 'block';
}

function readValue1() {
    var a = document.getElementById('value1').value;
    var belt = document.getElementById('belt1');

    belt.style.backgroundColor = colors[a].color;
}