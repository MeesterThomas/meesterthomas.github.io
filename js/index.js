var startBattle = false;

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

    characterStats.forEach(line =>
    {
        if(line.startsWith(ID + ";"))
        {
            document.getElementById("battlePortraitL").src = "../img/Characters/" + line.split(';')[0] + ".png";
            document.getElementById("battleNameL").innerHTML = line.split(';')[1];
            actions.forEach(action =>
            {
                if (line.split(';')[6] == action.split(';')[0])
                    document.getElementById("battleActionButtonL0").innerHTML = action.split(';')[1];
                if (line.split(';')[7] == action.split(';')[0])
                    document.getElementById("battleActionButtonL0").innerHTML = action.split(';')[1];
                if (line.split(';')[8] == action.split(';')[0])
                    document.getElementById("battleActionButtonL0").innerHTML = action.split(';')[1];
                if (line.split(';')[9] == action.split(';')[0])
                    document.getElementById("battleActionButtonL0").innerHTML = action.split(';')[1];
            })
        }
    });
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
    document.getElementById("battleActionButtonR0").style.display = 'none';
    document.getElementById("battleActionButtonR1").style.display = 'none';
    document.getElementById("battleActionButtonR2").style.display = 'none';
    document.getElementById("battleActionButtonR3").style.display = 'none';
}
function OnAttackButton(attack)
{
    if (startBattle == false)
        return;
}