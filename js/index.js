var startBattle = false;

function onCharacterSelectButton(ID)
{
    if (startBattle == true)
        return;
    fetch("../txt/CharacterStats.txt")
    .then((x) => x.text())
    .then((y) => {let characterStats = y})
    document.getElementById("battleNameL").innerHTML = characterStats.split("\n")[0];
}
function onBattleStartButton()
{
    startBattle = true;

}





