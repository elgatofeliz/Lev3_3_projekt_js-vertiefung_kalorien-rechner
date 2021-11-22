let calc = () => {
    let körpergewicht = document.getElementById("körpergewicht").value
    let körpergröße = document.getElementById("körpergröße").value
    let alter = document.getElementById("alter").value
    let male = document.getElementById("male")
    let female = document.getElementById("female")
    let gesamt = document.getElementById("pal").value

    let grundumsatzCalc = () => {
        let grundumsatz
        if (male.checked == true) {
            grundumsatz = 664.7 + (13.7 * körpergewicht) + (5 * körpergröße) - (6.8 * alter)
        } else if (female.checked == true) {
            grundumsatz = 655.1 + (9.6 * körpergewicht) + (1.8 * körpergröße) - (4, 7 * alter)
        }
        return grundumsatz;
    }
    let grundumsatz = grundumsatzCalc()
    console.log(grundumsatz)

    let kalorien = () => {
        document.getElementById("grund").innerHTML = Math.floor(grundumsatz) + "kcal"
        document.getElementById("gesamt").innerHTML = Math.floor(grundumsatz * gesamt) + "kcal"
    }

    if (male.checked == false && female.checked == false || körpergewicht == "" || körpergröße == "" || alter == "") {
        document.getElementById("nope").innerHTML = "Da fehlt noch was..."
    } else {
        document.getElementById("nope").innerHTML = ""
        kalorien()
    }
}