function becher() {
    let behaeltnis = document.getElementById('Behältnis');
    behaeltnis.value = "Becher";
    document.getElementById("hidden2").classList.remove("invisible");
}

function tasse() {
    let behaeltnis = document.getElementById('Behältnis');
    behaeltnis.value = "Tasse";
    document.getElementById("hidden2").classList.remove("invisible");
}

function thermo() {
    let behaeltnis = document.getElementById('Behältnis');
    behaeltnis.value = "Thermoskanne";
    document.getElementById("hidden2").classList.remove("invisible");
}

function glass() {
    let behaeltnis = document.getElementById('Behältnis');
    behaeltnis.value = "Glass";
    document.getElementById("hidden2").classList.remove("invisible");
}

function cappuccino() {
    document.getElementById("hidden").removeAttribute("hidden");
    getCoffees().then(res => {
        let sorte = document.getElementById("Sorte");
        sorte.value = "Cappuccino";
        let behaeltnis = document.getElementById("Behältnis");
        behaeltnis.value = res[0].Behältnis;
        let kalorien = document.getElementById("Kalorien");
        kalorien.value = res[0].Kalorien;
        let koffein = document.getElementById("Koffeingehalt");
        koffein.value = res[0].Koffeingehalt;
        let menge = document.getElementById("Menge");
        menge.value = res[0].Menge;
        let starttemperatur = document.getElementById("Starttemperatur");
        starttemperatur.value = res[0].Starttemperatur;
        let zucker = document.getElementById("Zucker");
        zucker.value = res[0].Zucker;
        let zuckerwuerfel = document.getElementById("Zuckerwürfel");
        zuckerwuerfel.value = res[0].Zuckerwürfel;
        let Kaffeesahne = document.getElementById("Kaffeesahne");
        Kaffeesahne.value = res[0].Kaffeesahne;
    })
}

function latteMacchiato() {
    document.getElementById("hidden").removeAttribute("hidden");
    getCoffees().then(res => {
        let sorte = document.getElementById("Sorte");
        sorte.value = "Latte Macchiato";
        let behaeltnis = document.getElementById("Behältnis");
        behaeltnis.value = res[1].Behältnis;
        let kalorien = document.getElementById("Kalorien");
        kalorien.value = res[1].Kalorien;
        let koffein = document.getElementById("Koffeingehalt");
        koffein.value = res[1].Koffeingehalt;
        let menge = document.getElementById("Menge");
        menge.value = res[1].Menge;
        let starttemperatur = document.getElementById("Starttemperatur");
        starttemperatur.value = res[1].Starttemperatur;
        let zucker = document.getElementById("Zucker");
        zucker.value = res[1].Zucker;
        let zuckerwuerfel = document.getElementById("Zuckerwürfel");
        zuckerwuerfel.value = res[1].Zuckerwürfel;
        let Kaffeesahne = document.getElementById("Kaffeesahne");
        Kaffeesahne.value = res[1].Kaffeesahne;
    })
}

function milchkaffee5050() {
    document.getElementById("hidden").removeAttribute("hidden");
    getCoffees().then(res => {
        let sorte = document.getElementById("Sorte");
        sorte.value = "Milchkaffee 50:50";
        let behaeltnis = document.getElementById("Behältnis");
        behaeltnis.value = res[2].Behältnis;
        let kalorien = document.getElementById("Kalorien");
        kalorien.value = res[2].Kalorien;
        let koffein = document.getElementById("Koffeingehalt");
        koffein.value = res[2].Koffeingehalt;
        let menge = document.getElementById("Menge");
        menge.value = res[2].Menge;
        let starttemperatur = document.getElementById("Starttemperatur");
        starttemperatur.value = res[2].Starttemperatur;
        let zucker = document.getElementById("Zucker");
        zucker.value = res[2].Zucker;
        let zuckerwuerfel = document.getElementById("Zuckerwürfel");
        zuckerwuerfel.value = res[2].Zuckerwürfel;
        let Kaffeesahne = document.getElementById("Kaffeesahne");
        Kaffeesahne.value = res[2].Kaffeesahne;
    })
}

function schwarz() {
    document.getElementById("hidden").removeAttribute("hidden");
    getCoffees().then(res => {
        let sorte = document.getElementById("Sorte");
        sorte.value = "Kaffee Schwarz";
        let behaeltnis = document.getElementById("Behältnis");
        behaeltnis.value = res[3].Behältnis;
        let kalorien = document.getElementById("Kalorien");
        kalorien.value = res[3].Kalorien;
        let koffein = document.getElementById("Koffeingehalt");
        koffein.value = res[3].Koffeingehalt;
        let menge = document.getElementById("Menge");
        menge.value = res[3].Menge;
        let starttemperatur = document.getElementById("Starttemperatur");
        starttemperatur.value = res[3].Starttemperatur;
        let zucker = document.getElementById("Zucker");
        zucker.value = res[3].Zucker;
        let zuckerwuerfel = document.getElementById("Zuckerwürfel");
        zuckerwuerfel.value = res[3].Zuckerwürfel;
        let Kaffeesahne = document.getElementById("Kaffeesahne");
        Kaffeesahne.value = res[3].Kaffeesahne;
    })
}

function addWuerfel() {
    let wuerfel = parseInt(document.getElementById('Zuckerwürfel').value);
    wuerfel = wuerfel + 1;
    document.getElementById('Zuckerwürfel').value = wuerfel;
    let zucker = parseInt(document.getElementById('Zucker').value);
    document.getElementById('Zucker').value = zucker + 3;
    let kalorien = parseInt(document.getElementById('Kalorien').value);
    document.getElementById('Kalorien').value = kalorien + 12
}

function removeWuerfel() {
    let wuerfel = parseInt(document.getElementById('Zuckerwürfel').value);
    let zucker = parseInt(document.getElementById('Zucker').value);
    let kalorien = parseInt(document.getElementById('Kalorien').value);
    if (wuerfel !== 0) {
        document.getElementById('Zucker').value = zucker - 3;
        document.getElementById('Kalorien').value = kalorien - 12
    }
    if (wuerfel !== 0) {
        wuerfel = wuerfel - 1;
    }
    document.getElementById('Zuckerwürfel').value = wuerfel;
}

function addSahne() {
    let sahne = parseInt(document.getElementById('Kaffeesahne').value);
    sahne = sahne + 1;
    document.getElementById('Kaffeesahne').value = sahne;
    let zucker = parseInt(document.getElementById('Zucker').value);
    document.getElementById('Zucker').value = zucker + 4;
    let kalorien = parseInt(document.getElementById('Kalorien').value);
    document.getElementById('Kalorien').value = kalorien + 12
}

function removeSahne() {
    let sahne = parseInt(document.getElementById('Kaffeesahne').value);
    let zucker = parseInt(document.getElementById('Zucker').value);
    let kalorien = parseInt(document.getElementById('Kalorien').value);
    if (sahne !== 0) {
        document.getElementById('Zucker').value = zucker - 4;
        document.getElementById('Kalorien').value = kalorien - 12
    }
    if (sahne !== 0) {
        sahne = sahne - 1;
    }
    document.getElementById('Kaffeesahne').value = sahne;
}

function saveCoffee() {
    let coffee = {
        Sorte: document.getElementById("Sorte").value,
        Behältnis: document.getElementById("Behältnis").value,
        Kalorien: document.getElementById("Kalorien").value,
        Koffeingehalt: document.getElementById("Koffeingehalt").value,
        Menge: document.getElementById("Menge").value,
        Starttemperatur: document.getElementById("Starttemperatur").value,
        Zucker: document.getElementById("Zucker").value,
    };
    db.collection("coffee").add({
        Datum: new Date(),
        Kaffee: coffee,
        User: "Maurice"
    }).then(document => {
        console.log("Kaffee hinzugefügt");
    });
    onNavigate('/timer')
}
