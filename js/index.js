var startBattle = false;

async function onCharacterSelectButton(ID)
{
    if (startBattle == true)
        return;
    let x = await fetch("../txt/CharacterStats.txt");
    let characterStats = x.text().split("\n");
    document.getElementById("battleNameL").innerHTML = characterStats[0];
}
function onBattleStartButton()
{
    startBattle = true;

}

