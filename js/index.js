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