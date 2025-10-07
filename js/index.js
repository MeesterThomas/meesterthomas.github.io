var startBattle = false;

async function onCharacterSelectButton(ID)
{
    if (startBattle == true)
        return;
    let characterStats = await fetch("../txt/CharacterStats.txt");
    document.getElementById("battleNameL").innerHTML = characterStats.text();
}
function onBattleStartButton()
{
    startBattle = true;
}