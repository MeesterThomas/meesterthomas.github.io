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
    document.getElementById("scoreTekstQ").style.display = "block";
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
    document.getElementById("scoreTekstQ").innerHTML = "Score: " + score.toString();
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
    document.getElementById("scoreTekstQ").style.display = "none";
}


let ronde = 0;
let zetten = [[], []];

function StartBKE()
{
    document.getElementById("BKERij0").style.display = "Block";
    document.getElementById("BKERij1").style.display = "Block";
    document.getElementById("BKERij2").style.display = "Block";
    document.getElementById("BKEKnop0").innerHTML = "";
    document.getElementById("BKEKnop1").innerHTML = "";
    document.getElementById("BKEKnop2").innerHTML = "";
    document.getElementById("BKEKnop3").innerHTML = "";
    document.getElementById("BKEKnop4").innerHTML = "";
    document.getElementById("BKEKnop5").innerHTML = "";
    document.getElementById("BKEKnop6").innerHTML = "";
    document.getElementById("BKEKnop7").innerHTML = "";
    document.getElementById("BKEKnop8").innerHTML = "";
    zetten = [[], []];
    if (Math.floor(Math.random() * 2) == 0)
    {
        ronde = 0;
        document.getElementById("BKETekst").innerHTML = "Speler X is aan zet";
    }
    else
    {
        ronde = 1;
        document.getElementById("BKETekst").innerHTML = "Speler O is aan zet";
    }
}

function BKEKnop(knopNummer)
{
    if (ronde == 9)
        return;
    if (zetten[0].includes(knopNummer) || zetten[1].includes(knopNummer))
        return;
    if (ronde == 0)
    {
        document.getElementById("BKEKnop" + knopNummer.toString()).innerHTML = "X";
        zetten[0].push(knopNummer);
    }
    else
    {
        document.getElementById("BKEKnop" + knopNummer.toString()).innerHTML = "O";
        zetten[1].push(knopNummer);
    }
    CheckWin();
    if (ronde == 0)
    {
        ronde = 1;
        document.getElementById("BKETekst").innerHTML = "Speler O is aan zet";
    }
    else if (ronde == 1)
    {
        ronde = 0;
        document.getElementById("BKETekst").innerHTML = "Speler X is aan zet";
    }
}

function CheckWin()
{
    if ((zetten[0].includes(0) && zetten[0].includes(1) && zetten[0].includes(2)) ||
        (zetten[0].includes(3) && zetten[0].includes(4) && zetten[0].includes(5)) ||
        (zetten[0].includes(6) && zetten[0].includes(7) && zetten[0].includes(8)) ||
        (zetten[0].includes(0) && zetten[0].includes(3) && zetten[0].includes(6)) ||
        (zetten[0].includes(1) && zetten[0].includes(4) && zetten[0].includes(7)) ||
        (zetten[0].includes(2) && zetten[0].includes(5) && zetten[0].includes(8)) ||
        (zetten[0].includes(0) && zetten[0].includes(4) && zetten[0].includes(8)) ||
        (zetten[0].includes(2) && zetten[0].includes(4) && zetten[0].includes(6)))
    {
        ronde = 9;
        document.getElementById("BKETekst").innerHTML = "Speler X heeft gewonnen!";
        document.getElementById("startKnopBKE").innerHTML = "Speel opnieuw";
    }
    if ((zetten[1].includes(0) && zetten[1].includes(1) && zetten[1].includes(2)) ||
        (zetten[1].includes(3) && zetten[1].includes(4) && zetten[1].includes(5)) ||
        (zetten[1].includes(6) && zetten[1].includes(7) && zetten[1].includes(8)) ||
        (zetten[1].includes(0) && zetten[1].includes(3) && zetten[1].includes(6)) ||
        (zetten[1].includes(1) && zetten[1].includes(4) && zetten[1].includes(7)) ||
        (zetten[1].includes(2) && zetten[1].includes(5) && zetten[1].includes(8)) ||
        (zetten[1].includes(0) && zetten[1].includes(4) && zetten[1].includes(8)) ||
        (zetten[1].includes(2) && zetten[1].includes(4) && zetten[1].includes(6)))
    {
        ronde = 9;
        document.getElementById("BKETekst").innerHTML = "Speler O heeft gewonnen!";
        document.getElementById("startKnopBKE").innerHTML = "Speel opnieuw";
    }
    if (zetten[0].length + zetten[1].length == 9)
    {
        ronde = 9;
        document.getElementById("BKETekst").innerHTML = "Gelijkspel!";
        document.getElementById("startKnopBKE").innerHTML = "Speel opnieuw";
    }
}


let goed = [false, false, false];

function StartER()
{
    document.getElementById("verborgen0").style.display = "none";
    document.getElementById("verborgen1").style.display = "block";
}

function ERKnop(knopNummer)
{
    if (goed[knopNummer == true])
        return;
    if (knopNummer == 0 && document.getElementById("antwoord0").value == "3")
    {
        goed[knopNummer] = true;
        document.getElementById("antwoord0").style.backgroundColor = "rgb(132, 132, 215)";
    }
    else if (knopNummer == 1 && document.getElementById("antwoord1").value == "2")
    {
        goed[knopNummer] = true;
        document.getElementById("antwoord1").style.backgroundColor = "rgb(132, 132, 215)";
    }
    else if (knopNummer == 2 && document.getElementById("antwoord2").value == "1")
    {
        goed[knopNummer] = true;
        document.getElementById("antwoord2").style.backgroundColor = "rgb(132, 132, 215)";
    }
    if (goed[0] == true && goed[1] == true && goed[2] == true)
    {
        document.getElementById("verborgen1").style.display = "none";
        document.getElementById("verborgen2").style.display = "block";
    }
}