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