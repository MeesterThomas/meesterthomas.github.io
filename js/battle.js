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
    document.getElementById("characterSelected0").style.borderColor = "black";
    document.getElementById("characterSelected1").style.borderColor = "black";
    document.getElementById("characterSelected2").style.borderColor = "black";
    document.getElementById("characterSelected3").style.borderColor = "black";
    document.getElementById("characterSelected0").style.backgroundColor = "rgb(34, 34, 34)";
    document.getElementById("characterSelected1").style.backgroundColor = "rgb(34, 34, 34)";
    document.getElementById("characterSelected2").style.backgroundColor = "rgb(34, 34, 34)";
    document.getElementById("characterSelected3").style.backgroundColor = "rgb(34, 34, 34)";
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
    SetHP();
}
function OnActButton(attack)
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
    UpdateCharacterUI("L0", fighter0);
    UpdateCharacterUI("L1", fighter1);
    UpdateCharacterUI("R0", fighter2);
    UpdateCharacterUI("R1", fighter3);
}
function UpdateCharacterUI(characterValue, fighter)
{
    document.getElementById("battlePortrait" + characterValue).src = "../img/Characters/" + fighter[0] + "_Battle.png";
    document.getElementById("battleName" + characterValue).innerHTML = fighter[1];
    document.getElementById("battleHPBarText" + characterValue).innerHTML = fighter[2] + "/" + fighter[2];
    document.getElementById("attackValue" + characterValue).innerHTML = fighter[3];
    document.getElementById("defenseValue" + characterValue).innerHTML = fighter[4];
    document.getElementById("speedValue" + characterValue).innerHTML = fighter[5];
    actions.forEach(action =>
    {
        if (fighter[6] == action.split(';')[0])
        {
            document.getElementById("battleActionButton0" + characterValue).firstElementChild.innerHTML = action.split(';')[1];
            document.getElementById("battleActionButton0" + characterValue).lastElementChild.src = "../img/Elements/" + action.split(';')[2] + ".png";
        }
        if (fighter[7] == action.split(';')[0])
        {
            document.getElementById("battleActionButton1" + characterValue).firstElementChild.innerHTML = action.split(';')[1];
            document.getElementById("battleActionButton1" + characterValue).lastElementChild.src = "../img/Elements/" + action.split(';')[2] + ".png";
        }
        if (fighter[8] == action.split(';')[0])
        {
            document.getElementById("battleActionButton2" + characterValue).firstElementChild.innerHTML = action.split(';')[1];
            document.getElementById("battleActionButton2" + characterValue).lastElementChild.src = "../img/Elements/" + action.split(';')[2] + ".png";
        }
        if (fighter[9] == action.split(';')[0])
        {
            document.getElementById("battleActionButton3" + characterValue).firstElementChild.innerHTML = action.split(';')[1];
            document.getElementById("battleActionButton3" + characterValue).lastElementChild.src = "../img/Elements/" + action.split(';')[2] + ".png";
        }
    })
}
function SetHP()
{
    document.getElementById("battleHPBarL0").max = parseInt(fighter0[2]);
    document.getElementById("battleHPBarL0").value = parseInt(fighterCurrentHP[0]);
    document.getElementById("battleHPBarL1").max = parseInt(fighter1[2]);
    document.getElementById("battleHPBarL1").value = parseInt(fighterCurrentHP[1]);
    document.getElementById("battleHPBarR0").max = parseInt(fighter2[2]);
    document.getElementById("battleHPBarR0").value = parseInt(fighterCurrentHP[2]);
    document.getElementById("battleHPBarR1").max = parseInt(fighter3[2]);
    document.getElementById("battleHPBarR1").value = parseInt(fighterCurrentHP[3]);
}
function AddBattleText(line)
{
    document.getElementById("gameComment4").innerHTML = document.getElementById("gameComment3").innerHTML;
    document.getElementById("gameComment3").innerHTML = document.getElementById("gameComment2").innerHTML;
    document.getElementById("gameComment2").innerHTML = document.getElementById("gameComment1").innerHTML;
    document.getElementById("gameComment1").innerHTML = document.getElementById("gameComment0").innerHTML;
    document.getElementById("gameComment0").innerHTML = line;
}
function SelectTurn()
{
    ;
}
function Act()
{
    ;
}