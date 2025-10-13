var startBattle = false;
var fighter0 = ["0000", "", "1", "1", "1", "1", "0000", "0000", "0000", "0000", "0000"];
var fighter1 = ["0000", "", "1", "1", "1", "1", "0000", "0000", "0000", "0000", "0000"];
var fighter2 = ["0000", "", "1", "1", "1", "1", "0000", "0000", "0000", "0000", "0000"];
var fighter3 = ["0000", "", "1", "1", "1", "1", "0000", "0000", "0000", "0000", "0000"];
var fighterChoice = 0;
var fighterCurrentHP = [1, 1, 1, 1];
const randomFighters = 
[
    "0001",
    "0002"
];

let characterStats = ["", ""];
fetch("https://meesterthomas.github.io/txt/CharacterStats.txt")
.then((x) => x.text())
.then((y) => {characterStats = y.split("\n")})

let actions = ["", ""];
fetch("https://meesterthomas.github.io/txt/Actions.txt")
.then((x) => x.text())
.then((y) => {actions = y.split("\n")})

function OnCharacterSelectButton(ID)
{
    if (startBattle == true)
        return;

    if (fighterChoice == 0)
    {
        fighter0[0] = ID;
        document.getElementById("characterSelected0").firstElementChild.src = "../img/Characters/" + ID + ".png";
    }
    else if (fighterChoice == 1)
    {
        fighter1[0] = ID;
        document.getElementById("characterSelected1").firstElementChild.src = "../img/Characters/" + ID + ".png";
    }
    else if (fighterChoice == 2)
    {
        fighter2[0] = ID;
        document.getElementById("characterSelected2").firstElementChild.src = "../img/Characters/" + ID + ".png";
    }
    else if (fighterChoice == 3)
    {
        fighter3[0] = ID;
        document.getElementById("characterSelected3").firstElementChild.src = "../img/Characters/" + ID + ".png";
    }
    SetFighter(0);
    SetFighter(1);
    SetFighter(2);
    SetFighter(3);
    UpdateUI();
}
function OnCharacterSelectedButton(ID)
{
    if (startBattle == true)
        return;
    
    document.getElementById("characterSelected0").style.borderColor = "black";
    document.getElementById("characterSelected1").style.borderColor = "black";
    document.getElementById("characterSelected2").style.borderColor = "black";
    document.getElementById("characterSelected3").style.borderColor = "black";
    document.getElementById("characterSelected0").style.backgroundColor = "rgb(34, 34, 34)";
    document.getElementById("characterSelected1").style.backgroundColor = "rgb(34, 34, 34)";
    document.getElementById("characterSelected2").style.backgroundColor = "rgb(34, 34, 34)";
    document.getElementById("characterSelected3").style.backgroundColor = "rgb(34, 34, 34)";
    if (ID == "characterSelected0" || ID == "characterSelected1")
    {
        document.getElementById(ID).style.borderColor = "rgb(11, 11, 177)";
        document.getElementById(ID).style.backgroundColor = "rgb(100, 100, 177)";
    }
    else
    {
        document.getElementById(ID).style.borderColor = "rgb(177, 11, 11)";
        document.getElementById(ID).style.backgroundColor = "rgb(177, 100, 100)";
    }
    if (ID == "characterSelected0")
        fighterChoice = 0;
    else if (ID == "characterSelected1")
        fighterChoice = 1;
    else if (ID == "characterSelected2")
        fighterChoice = 2;
    else if (ID == "characterSelected3")
        fighterChoice = 3;
}
function OnBattleStartButton()
{
    if (startBattle == true)
        return;
    startBattle = true;
    document.getElementById("battleActionButtonL0").style.display = 'none';
    document.getElementById("battleActionButtonL1").style.display = 'none';
    document.getElementById("battleActionButtonL2").style.display = 'none';
    document.getElementById("battleActionButtonL3").style.display = 'none';
    document.getElementById("battleActionButtonL4").style.display = 'none';
    document.getElementById("battleActionButtonL5").style.display = 'none';
    document.getElementById("battleActionButtonL6").style.display = 'none';
    document.getElementById("battleActionButtonL7").style.display = 'none';
    document.getElementById("battleActionButtonR0").style.display = 'none';
    document.getElementById("battleActionButtonR1").style.display = 'none';
    document.getElementById("battleActionButtonR2").style.display = 'none';
    document.getElementById("battleActionButtonR3").style.display = 'none';
    document.getElementById("battleActionButtonR4").style.display = 'none';
    document.getElementById("battleActionButtonR5").style.display = 'none';
    document.getElementById("battleActionButtonR6").style.display = 'none';
    document.getElementById("battleActionButtonR7").style.display = 'none';
    if (fighter0[0] == "0000")
        fighter0[0] = randomFighters[Math.floor(Math.random() * randomFighters.length)];
    if (fighter1[0] == "0000")
        fighter1[0] = randomFighters[Math.floor(Math.random() * randomFighters.length)];
    if (fighter2[0] == "0000")
        fighter2[0] = randomFighters[Math.floor(Math.random() * randomFighters.length)];
    if (fighter3[0] == "0000")
        fighter3[0] = randomFighters[Math.floor(Math.random() * randomFighters.length)];
    SetFighter(0);
    SetFighter(1);
    SetFighter(2);
    SetFighter(3);
    UpdateUI();
    fighterCurrentHP[0] = parseInt(fighter0[2]);
    fighterCurrentHP[1] = parseInt(fighter1[2]);
    fighterCurrentHP[2] = parseInt(fighter2[2]);
    fighterCurrentHP[3] = parseInt(fighter3[2]);
}
function OnAttackButton(attack)
{
    if (startBattle == false)
        return;
}
function SetFighter(number)
{
    characterStats.forEach(line =>
    {
        if(line.startsWith(fighter0[0] + ";") && number == 0)
            fighter0 = line.split(';');
        if(line.startsWith(fighter1[0] + ";") && number == 1)
            fighter1 = line.split(';');
        if(line.startsWith(fighter2[0] + ";") && number == 2)
            fighter2 = line.split(';');
        if(line.startsWith(fighter3[0] + ";") && number == 3)
            fighter3 = line.split(';');
    });
}
function UpdateUI()
{
    document.getElementById("battlePortraitL0").src = "../img/Characters/" + fighter0[0] + "_Battle.png";
    document.getElementById("battleNameL0").innerHTML = fighter0[1];
    document.getElementById("attackValueL0").innerHTML = fighter0[3];
    document.getElementById("defenseValueL0").innerHTML = fighter0[4];
    document.getElementById("speedValueL0").innerHTML = fighter0[5];
    actions.forEach(action =>
    {
        if (fighter0[6] == action.split(';')[0])
            document.getElementById("battleActionButtonL0").innerHTML = action.split(';')[1];
        if (fighter0[7] == action.split(';')[0])
            document.getElementById("battleActionButtonL1").innerHTML = action.split(';')[1];
        if (fighter0[8] == action.split(';')[0])
            document.getElementById("battleActionButtonL2").innerHTML = action.split(';')[1];
        if (fighter0[9] == action.split(';')[0])
            document.getElementById("battleActionButtonL3").innerHTML = action.split(';')[1];
    })
    document.getElementById("battlePortraitL1").src = "../img/Characters/" + fighter1[0] + "_Battle.png";
    document.getElementById("battleNameL1").innerHTML = fighter1[1];
    document.getElementById("attackValueL1").innerHTML = fighter1[3];
    document.getElementById("defenseValueL1").innerHTML = fighter1[4];
    document.getElementById("speedValueL1").innerHTML = fighter1[5];
    actions.forEach(action =>
    {
        if (fighter1[6] == action.split(';')[0])
            document.getElementById("battleActionButtonL4").innerHTML = action.split(';')[1];
        if (fighter1[7] == action.split(';')[0])
            document.getElementById("battleActionButtonL5").innerHTML = action.split(';')[1];
        if (fighter1[8] == action.split(';')[0])
            document.getElementById("battleActionButtonL6").innerHTML = action.split(';')[1];
        if (fighter1[9] == action.split(';')[0])
            document.getElementById("battleActionButtonL7").innerHTML = action.split(';')[1];
    })
    document.getElementById("battlePortraitR0").src = "../img/Characters/" + fighter2[0] + "_Battle.png";
    document.getElementById("battleNameR0").innerHTML = fighter2[1];
    document.getElementById("attackValueR0").innerHTML = fighter2[3];
    document.getElementById("defenseValueR0").innerHTML = fighter2[4];
    document.getElementById("speedValueR0").innerHTML = fighter2[5];
    actions.forEach(action =>
    {
        if (fighter2[6] == action.split(';')[0])
            document.getElementById("battleActionButtonR0").innerHTML = action.split(';')[1];
        if (fighter2[7] == action.split(';')[0])
            document.getElementById("battleActionButtonR1").innerHTML = action.split(';')[1];
        if (fighter2[8] == action.split(';')[0])
            document.getElementById("battleActionButtonR2").innerHTML = action.split(';')[1];
        if (fighter2[9] == action.split(';')[0])
            document.getElementById("battleActionButtonR3").innerHTML = action.split(';')[1];
    })
    document.getElementById("battlePortraitR1").src = "../img/Characters/" + fighter3[0] + "_Battle.png";
    document.getElementById("battleNameR1").innerHTML = fighter3[1];
    document.getElementById("attackValueR1").innerHTML = fighter3[3];
    document.getElementById("defenseValueR1").innerHTML = fighter3[4];
    document.getElementById("speedValueR1").innerHTML = fighter3[5];
    actions.forEach(action =>
    {
        if (fighter3[6] == action.split(';')[0])
            document.getElementById("battleActionButtonR4").innerHTML = action.split(';')[1];
        if (fighter3[7] == action.split(';')[0])
            document.getElementById("battleActionButtonR5").innerHTML = action.split(';')[1];
        if (fighter3[8] == action.split(';')[0])
            document.getElementById("battleActionButtonR6").innerHTML = action.split(';')[1];
        if (fighter3[9] == action.split(';')[0])
            document.getElementById("battleActionButtonR7").innerHTML = action.split(';')[1];
    })
}
function AddBattleText(line)
{
    document.getElementById("gameComment4").innerHTML = document.getElementById("gameComment3").innerHTML;
    document.getElementById("gameComment3").innerHTML = document.getElementById("gameComment2").innerHTML;
    document.getElementById("gameComment2").innerHTML = document.getElementById("gameComment1").innerHTML;
    document.getElementById("gameComment1").innerHTML = document.getElementById("gameComment0").innerHTML;
    document.getElementById("gameComment0").innerHTML = line;
}