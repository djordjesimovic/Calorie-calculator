const masa = document.getElementById("masa");
const visina = document.getElementById("visina");
const godine = document.getElementById("godine");
const dugme = document.querySelector(".calculate");
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const aktivnost = document.querySelector(".activities-number");
const restart = document.querySelector(".restart");
const poruka = document.querySelector(".poruka");


radio1.addEventListener("click", zapamti1);
radio2.addEventListener("click", zapamti2);

function zapamti1(){
    radio1.checked = true;
    var rezultat = 1; 
}
function zapamti2(){
    radio2.checked = true;
    var rezultat = 2; 
}

function izracunaj(){
    let konacno;
    let cetvrtina;
    let pola;
    let ceo;
    if(radio1.checked == true){
        if(aktivnost.value == "light"){
            konacno = ((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) + 5) * 1.2;
            cetvrtina = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) + 5) * 1.2) * 0.9;
            pola = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) + 5) * 1.2) * 0.8;
            ceo = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) + 5) * 1.2) * 0.6;
            
            console.log("Kako biste zadrali trenutnu kilazu potrebno je da dnevno unosite " + konacno + " klorija");
            console.log("Kako biste za u toku 7 dana izgubili 0.25kg potrebno je da dnevno unosite  " + cetvrtina + " kalorja");
            console.log("Kako biste za u toku 7 dana izgubili 0.5kg potrebno je da dnevno unosite  " + pola + " kalorja");
            console.log("Kako biste za u toku 7 dana izgubili 1kg potrebno je da dnevno unosite  " + ceo + " kalorja");
            
        }
        else if(aktivnost.value == "moderate"){
            konacno = ((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) + 5) * 1.5;
            cetvrtina = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) + 5) * 1.5) * 0.9;
            pola = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) + 5) * 1.5) * 0.8;
            ceo = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) + 5) * 1.5) * 0.6;
            
            console.log("Kako biste zadrali trenutnu kilazu potrebno je da dnevno unosite " + konacno + " klorija");
            console.log("Kako biste za u toku 7 dana izgubili 0.25kg potrebno je da dnevno unosite  " + cetvrtina + " kalorja");
            console.log("Kako biste za u toku 7 dana izgubili 0.5kg potrebno je da dnevno unosite  " + pola + " kalorja");
            console.log("Kako biste za u toku 7 dana izgubili 1kg potrebno je da dnevno unosite  " + ceo + " kalorja");
            
        }
        else if(aktivnost.value == "active"){
            konacno = ((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) + 5) * 1.75;
            cetvrtina = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) + 5) * 1.75) * 0.9;
            pola = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) + 5) * 1.75) * 0.8;
            ceo = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) + 5) * 1.75) * 0.6;
            
            console.log("Kako biste zadrali trenutnu kilazu potrebno je da dnevno unosite " + konacno + " klorija");
            console.log("Kako biste za u toku 7 dana izgubili 0.25kg potrebno je da dnevno unosite  " + cetvrtina + " kalorja");
            console.log("Kako biste za u toku 7 dana izgubili 0.5kg potrebno je da dnevno unosite  " + pola + " kalorja");
            console.log("Kako biste za u toku 7 dana izgubili 1kg potrebno je da dnevno unosite  " + ceo + " kalorja");
            
        }
        else if(aktivnost.value == "very active"){
            konacno = ((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) + 5) * 1.95;
            cetvrtina = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) + 5) * 1.95) * 0.9;
            pola = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) + 5) * 1.95) * 0.8;
            ceo = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) + 5) * 1.95) * 0.6;
            
            console.log("Kako biste zadrali trenutnu kilazu potrebno je da dnevno unosite " + konacno + " klorija");
            console.log("Kako biste za u toku 7 dana izgubili 0.25kg potrebno je da dnevno unosite  " + cetvrtina + " kalorja");
            console.log("Kako biste za u toku 7 dana izgubili 0.5kg potrebno je da dnevno unosite  " + pola + " kalorja");
            console.log("Kako biste za u toku 7 dana izgubili 1kg potrebno je da dnevno unosite  " + ceo + " kalorja");
        }
    }

    else if(radio2.checked == true){
        if(aktivnost.value == "light"){
            konacno = ((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) - 161) * 1.2;
            cetvrtina = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) - 161) * 1.2) * 0.9;
            pola = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) - 161) * 1.2) * 0.8;
            ceo = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) - 161) * 1.2) * 0.6;
            
            console.log("Kako biste zadrali trenutnu kilazu potrebno je da dnevno unosite " + konacno + " klorija");
            console.log("Kako biste za u toku 7 dana izgubili 0.25kg potrebno je da dnevno unosite  " + cetvrtina + " kalorja");
            console.log("Kako biste za u toku 7 dana izgubili 0.5kg potrebno je da dnevno unosite  " + pola + " kalorja");
            console.log("Kako biste za u toku 7 dana izgubili 1kg potrebno je da dnevno unosite  " + ceo + " kalorja");
        }
        else if(aktivnost.value == "moderate"){
            konacno = ((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) - 161) * 1.5;
            cetvrtina = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) - 161) * 1.5) * 0.9;
            pola = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) - 161) * 1.5) * 0.8;
            ceo = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) - 161) * 1.5) * 0.6;
            
            console.log("Kako biste zadrali trenutnu kilazu potrebno je da dnevno unosite " + konacno + " klorija");
            console.log("Kako biste za u toku 7 dana izgubili 0.25kg potrebno je da dnevno unosite  " + cetvrtina + " kalorja");
            console.log("Kako biste za u toku 7 dana izgubili 0.5kg potrebno je da dnevno unosite  " + pola + " kalorja");
            console.log("Kako biste za u toku 7 dana izgubili 1kg potrebno je da dnevno unosite  " + ceo + " kalorja");
        }
        else if(aktivnost.value == "active"){
            konacno = ((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) - 161) * 1.75;
            cetvrtina = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) - 161) * 1.75) * 0.9;
            pola = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) - 161) * 1.75) * 0.8;
            ceo = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) - 161) * 1.75) * 0.6;
            
            console.log("Kako biste zadrali trenutnu kilazu potrebno je da dnevno unosite " + konacno + " klorija");
            console.log("Kako biste za u toku 7 dana izgubili 0.25kg potrebno je da dnevno unosite  " + cetvrtina + " kalorja");
            console.log("Kako biste za u toku 7 dana izgubili 0.5kg potrebno je da dnevno unosite  " + pola + " kalorja");
            console.log("Kako biste za u toku 7 dana izgubili 1kg potrebno je da dnevno unosite  " + ceo + " kalorja");
        }
        else if(aktivnost.value == "very active"){
            konacno = ((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) - 161) * 1.95;
            cetvrtina = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) - 161) * 1.95) * 0.9;
            pola = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) - 161) * 1.95) * 0.8;
            ceo = (((10 * masa.value) + (6.25 * visina.value) - (5 * godine.value) - 161) * 1.95) * 0.6;
            
            console.log("Kako biste zadrali trenutnu kilazu potrebno je da dnevno unosite " + konacno + " klorija");
            console.log("Kako biste za u toku 7 dana izgubili 0.25kg potrebno je da dnevno unosite  " + cetvrtina + " kalorja");
            console.log("Kako biste za u toku 7 dana izgubili 0.5kg potrebno je da dnevno unosite  " + pola + " kalorja");
            console.log("Kako biste za u toku 7 dana izgubili 1kg potrebno je da dnevno unosite  " + ceo + " kalorja");
        }
    }


    poruka.style.display="flex";
    var ispisKonacno = document.createElement("h3");
    var cetvrtKila = document.createElement("h3");
    var polaKila = document.createElement("h3");
    var kilo = document.createElement("h3");
    ispisKonacno.innerText = ("Kako biste zadrzali trenutnu kilazu potrebno je da dnevno unosite " + konacno.toFixed(2) + " kalorija");
    cetvrtKila.innerText = ("Kako biste u toku 7 dana izgubili 0.25kg potrebno je da dnevno unosite  " + cetvrtina.toFixed(2) + " kalorja");
    polaKila.innerText = ("Kako biste u toku 7 dana izgubili 0.5kg potrebno je da dnevno unosite  " + pola.toFixed(2) + " kalorja");
    kilo.innerText = ("Kako biste u toku 7 dana izgubili 1kg potrebno je da dnevno unosite  " + ceo.toFixed(2) + " kalorja");
    poruka.appendChild(ispisKonacno);
    poruka.appendChild(cetvrtKila);
    poruka.appendChild(polaKila);
    poruka.appendChild(kilo);

    const zatvori = document.createElement("button");
    zatvori.innerText = "Close";
    zatvori.classList.add("close");
    poruka.appendChild(zatvori);

    zatvori.addEventListener("click", unisti);

    function unisti(){
        ispisKonacno.innerText = "";
        cetvrtKila.innerText = "";
        polaKila.innerText = "";
        kilo.innerText = "";
        poruka.style.display="none";
    }
}
function brisi(){
masa.value = "";
visina.value = "";
godine.value = "";
radio1.checked = false;
radio2.checked = false;
}

// var x = masa.value;


dugme.addEventListener("click", izracunaj);
restart.addEventListener("click", brisi);

// else if(x == ""){
//     dugme.addEventListener("click", function(){
//         alert("Popunite sva polja!!!");
//     });
// }