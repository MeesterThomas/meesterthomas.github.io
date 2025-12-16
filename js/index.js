function DrukKnop()
{
    document.getElementById("veranderTekst").innerHTML = "De tekst is veranderd!";
    document.getElementById("veranderTekst").style.color = "rgb(11, 11, 177)";
}

let score = 0;

function CookieKnop()
{
    score += 1;
    document.getElementById("scoreTekst").innerHTML = score;
}

let teller = 0;

function ZingKnop()
{
    teller += 1;
    if (teller >= 5)
        return;
    document.getElementById("liedTekst0").innerHTML = KrijgLiedTekst();
}

function KrijgLiedTekst()
{
    if (teller == 1 || teller == 2 || teller == 4)
        return "Hoofd, schouders, knie en teen, knie en teen!";
    else if (teller == 3)
        return "Oren, ogen, puntje van je neus!";
    else
        return "";
}

const liedTekst = 
[
    "Hoofd, schouder, knie en teen, knie en teen!", 
    "Hoofd, schouder, knie en teen, knie en teen!", 
    "Oren, ogen, puntje van je neus!",
    "Hoofd, schouder, knie en teen, knie en teen!"
]

function TekstKnop()
{
    liedTekst.forEach(regel => 
    {
        document.getElementById("liedTekst1").innerHTML += regel + "<br>";
    });
}

const vragen = [
    ["0", "1+1=", "2", "3", "4", "1"],
    ["1", "2+2=", "4", "2", "5", "6"]
]
let gesteldeVragen = [];
let scoreQuiz = 0;
let huidigeVraag = [];

function Start()
{
    document.getElementById("startKnop").style.display = "none";
    document.getElementById("vraagTekst").style.display = "block";
    document.getElementById("optie0").style.display = "inline";
    document.getElementById("optie1").style.display = "inline";
    document.getElementById("optie2").style.display = "inline";
    document.getElementById("optie3").style.display = "inline";
    document.getElementById("scoreTekst").style.display = "block";
    gesteldeVragen = [];
    score = 0;
    UpdateScore();
    StelVraag();
}
function StelVraag()
{
    if (gesteldeVragen.length >= vragen.length)
    {
        Einde();
        return;
    }
    huidigeVraag = [];
    vragen.forEach(vraag => {
        if (huidigeVraag.length == 0 && gesteldeVragen.includes(vraag[0]) == false)
        {
            gesteldeVragen.push(vraag[0]);
            huidigeVraag = vraag;
        }
    });
    document.getElementById("vraagTekst").innerHTML = huidigeVraag[1];
    let randomNummer = Math.floor(Math.random() * 4);
    if (randomNummer == 0)
    {
        document.getElementById("optie0").innerHTML = huidigeVraag[2];
        document.getElementById("optie1").innerHTML = huidigeVraag[3];
        document.getElementById("optie2").innerHTML = huidigeVraag[4];
        document.getElementById("optie3").innerHTML = huidigeVraag[5];
    }
    else if (randomNummer == 1)
    {
        document.getElementById("optie0").innerHTML = huidigeVraag[4];
        document.getElementById("optie1").innerHTML = huidigeVraag[5];
        document.getElementById("optie2").innerHTML = huidigeVraag[2];
        document.getElementById("optie3").innerHTML = huidigeVraag[3];
    }
    else if (randomNummer == 2)
    {
        document.getElementById("optie0").innerHTML = huidigeVraag[3];
        document.getElementById("optie1").innerHTML = huidigeVraag[2];
        document.getElementById("optie2").innerHTML = huidigeVraag[5];
        document.getElementById("optie3").innerHTML = huidigeVraag[4];
    }
    else if (randomNummer == 3)
    {
        document.getElementById("optie0").innerHTML = huidigeVraag[5];
        document.getElementById("optie1").innerHTML = huidigeVraag[4];
        document.getElementById("optie2").innerHTML = huidigeVraag[3];
        document.getElementById("optie3").innerHTML = huidigeVraag[2];
    }
}
function Antwoord(knopNummer)
{
    if (document.getElementById("optie" + knopNummer.toString()).innerHTML == huidigeVraag[2])
    {
        score += 10;
    }
    UpdateScore();
    StelVraag();
}
function UpdateScore()
{
    document.getElementById("scoreTekst").innerHTML = "Score: " + score.toString();
}
function Einde()
{
    document.getElementById("startKnop").style.display = "inline";
    document.getElementById("startKnop").innerHTML = "Start opnieuw";
    document.getElementById("vraagTekst").style.display = "block";
    document.getElementById("vraagTekst").innerHTML = "Goed gedaan! Je score is " + score.toString() + "!";
    document.getElementById("optie0").style.display = "none";
    document.getElementById("optie1").style.display = "none";
    document.getElementById("optie2").style.display = "none";
    document.getElementById("optie3").style.display = "none";
    document.getElementById("scoreTekst").style.display = "none";
}