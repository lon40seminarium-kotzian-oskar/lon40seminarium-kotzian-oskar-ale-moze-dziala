const colors = {
    czarny: { color: "black", mnoznik: 1, cyfra: 0, tolerancja: null },
    brazowy: { color: "brown", mnoznik: 10, cyfra: 1, tolerancja: 1 },
    czerwony: { color: "red", mnoznik: 100, cyfra: 2, tolerancja: 2 },
    pomaranczowy: { color: "orange", mnoznik: 1000, cyfra: 3, tolerancja: null },
    zolty: { color: "yellow", mnoznik: 10000, cyfra: 4, tolerancja: null },
    zielony: { color: "green", mnoznik: 1000000, cyfra: 5, tolerancja: null },
    niebieski: { color: "blue", mnoznik: 10000000, cyfra: 6, tolerancja: null },
    fioletowy: { color: "violet", mnoznik: 10000000, cyfra: 7, tolerancja: null },
    szary: { color: "grey", mnoznik: 100000000, cyfra: 8, tolerancja: null },
    bialy: { color: "white", mnoznik: null, cyfra: 9, tolerancja: null },
    zloty: { color: "gold", mnoznik: 0.1, cyfra: null, tolerancja: 5 },
    srebny: { color: "silver", mnoznik: 0.01, cyfra: null, tolerancja: 10 }
};

function showMenu(which){
    document.getElementById(`value${which}`).style.display = 'block';
}

function readValue(which) {
    var a = document.getElementById(`value${which}`).value;
    var belt = document.getElementById(`belt${which}`);

    belt.style.backgroundColor = colors[a].color;
}

function findKeyByColor(color) {
    for (const key in colors) {
        if (colors[key].color === color) {
            return key;
        }
    }
}

function rgbToName(rgb) {
    const map = {
        "rgb(0, 0, 0)": "black",
        "rgb(165, 42, 42)": "brown",
        "rgb(255, 0, 0)": "red",
        "rgb(255, 165, 0)": "orange",
        "rgb(255, 255, 0)": "yellow",
        "rgb(0, 128, 0)": "green",
        "rgb(0, 0, 255)": "blue",
        "rgb(238, 130, 238)": "violet",
        "rgb(128, 128, 128)": "grey",
        "rgb(255, 255, 255)": "white",
        "rgb(255, 215, 0)": "gold",
        "rgb(192, 192, 192)": "silver"
    };
    return map[rgb] || null;
}

function calculate(){
    var colory = [
        getComputedStyle(document.getElementById('belt1')).backgroundColor,
        getComputedStyle(document.getElementById('belt2')).backgroundColor,
        getComputedStyle(document.getElementById('belt3')).backgroundColor,
        getComputedStyle(document.getElementById('belt4')).backgroundColor,
        getComputedStyle(document.getElementById('belt5')).backgroundColor
    ];

    for (let i in colory) {
        const name = rgbToName(colory[i]);
        colory[i] = findKeyByColor(name);
    }

    var wynik = Number(colors[colory[0]].cyfra) * 100 +
            Number(colors[colory[1]].cyfra) * 10 +
            Number(colors[colory[2]].cyfra) *
            Number(colors[colory[3]].mnoznik);
            
    document.getElementById('wynik').innerHTML = `Wynik to ${wynik}om`;
}