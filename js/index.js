var startBattle = false;

function onCharacterSelectButton(ID)
{
    if (startBattle == true)
        return;
    fetch("../txt/CharacterStats.txt")
    .then((x) => x.text())
    document.getElementById("battleNameL").innerHTML = x.split("\n")[0];
    //.then((y) => {document.getElementById("battleNameL").innerHTML = y})
}
function onBattleStartButton()
{
    startBattle = true;

}



