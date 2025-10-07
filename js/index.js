var startBattle = false;

async function onCharacterSelectButton(ID)
{
    if (startBattle == true)
        return;
    let characterStats = await fetch("../txt/CharacterStats.txt").text().split("\n");
    document.getElementById("battleNameL").innerHTML = characterStats[0];
}
function onBattleStartButton()
{
    startBattle = true;

}
