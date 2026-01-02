let cpu = 0;
let cpuImpossible = false;
let maxSymbol = false;
let turn = 0;
let history = [[], []];

function StartBKE(buttonNumber)
{
    if (cpu == 0 && buttonNumber == 0)
    {
        cpu = 1;
        cpuImpossible = false;
        StartLayout();
    }
    else if (cpu == 0 && buttonNumber == 1)
    {
        cpu = 2;
        document.getElementById("gameOptionBKE0").innerHTML = "Normale regels";
        document.getElementById("gameOptionBKE1").innerHTML = "Maximaal 3 tekens";
    }
    else if (cpu == 1 && buttonNumber == 0)
    {
        cpuImpossible = false;
        StartLayout();
    }
    else if (cpu == 1 && buttonNumber == 1)
    {
        cpuImpossible = true;
        StartLayout();
    }
    else if (cpu == 2 && buttonNumber == 0)
    {
        maxSymbol = false;
        StartLayout();
    }
    else if (cpu == 2 && buttonNumber == 1)
    {
        maxSymbol = true;
        StartLayout();
    }
}

function StartLayout()
{
    document.getElementById("gameOptionBKE0").style.display = "none";
    document.getElementById("gameOptionBKE1").style.display = "none";
    document.getElementById("BKEGameRow0").style.display = "flex";
    document.getElementById("BKEGameRow1").style.display = "flex";
    document.getElementById("BKEGameRow2").style.display = "flex";
    if (Math.floor(Math.random() * 2) == 0)
    {
        turn = 0;
        document.getElementById("BKEText").innerHTML = "<b>Speler X is aan zet</b>";
    }
    else if (cpu == 2)
    {
        turn = 1;
        document.getElementById("BKEText").innerHTML = "<b>Speler O is aan zet</b>";
    }
    else
    {
        turn = 1;
        CPUAI();
    }
}

function BKEGameButton(buttonNumber)
{
    if (cpu == 0)
        return;
    if (cpu == 1 && turn == 1)
        return;
    if (document.getElementById("BKEGameButton" + buttonNumber).innerHTML != "")
        return;
    if (turn == 0)
        document.getElementById("BKEGameButton" + buttonNumber).innerHTML = "X";
    else
        document.getElementById("BKEGameButton" + buttonNumber).innerHTML = "O";
    history[turn].push(buttonNumber);
    if (maxSymbol == true && history[turn].length > 3)
    {
        document.getElementById("BKEGameButton" + history[turn][0]).innerHTML = "";
        history[turn].shift();
    }
    NextTurn();
}

function CPUAI()
{
    let CPUButton = 9;
    if (cpuImpossible == false)
    {
        if (ClearPossible(1) != 9)
            CPUButton = ClearPossible(1);
        else if (ClearPossible(0) != 9)
            CPUButton = ClearPossible(0);
        else
        {
            let randomValue = Math.floor(Math.random() * (9 - (history[0].length + history[1].length)));
            console.log(randomValue);
            let counter = 0;
            for (let index = 0; index < 9; index++)
            {
                if (history[0].includes(index) == false && history[1].includes(index) == false)
                {
                    if (randomValue == counter)
                    {
                        CPUButton = index;
                        break;
                    }
                    else
                        counter += 1;
                }
            }
        }
    }
    else
    {
        ;
    }
    if (CPUButton == 9)
    {
        NextTurn();
        return;
    }
    document.getElementById("BKEGameButton" + CPUButton).innerHTML = "O";
    history[turn].push(CPUButton);
    if (maxSymbol == true && history[turn].length > 3)
    {
        document.getElementById("BKEGameButton" + history[turn][0]).innerHTML = "";
        history[turn].shift();
    }
    NextTurn();
}

function NextTurn()
{
    CheckClear();
    if (cpu == 0)
        return;
    if (turn == 1)
    {
        turn = 0;
        document.getElementById("BKEText").innerHTML = "<b>Speler X is aan zet</b>";
    }
    else if (turn == 0 && cpu == 2)
    {
        turn = 1;
        document.getElementById("BKEText").innerHTML = "<b>Speler O is aan zet</b>";
    }
    else
    {
        turn = 1;
        CPUAI();
    }
}

function CheckClear()
{
    if ((history[0].includes(0) && history[0].includes(1) && history[0].includes(2)) ||
        (history[0].includes(3) && history[0].includes(4) && history[0].includes(5)) ||
        (history[0].includes(6) && history[0].includes(7) && history[0].includes(8)) ||
        (history[0].includes(0) && history[0].includes(3) && history[0].includes(6)) ||
        (history[0].includes(1) && history[0].includes(4) && history[0].includes(7)) ||
        (history[0].includes(2) && history[0].includes(5) && history[0].includes(8)) ||
        (history[0].includes(0) && history[0].includes(4) && history[0].includes(8)) ||
        (history[0].includes(2) && history[0].includes(4) && history[0].includes(6)))
    {
        cpu = 0;
        document.getElementById("BKEText").innerHTML = "<b>Speler X heeft gewonnen!</b>";
        document.getElementById("gameResetBKE").style.display = "inline-block";
    }
    if ((history[1].includes(0) && history[1].includes(1) && history[1].includes(2)) ||
        (history[1].includes(3) && history[1].includes(4) && history[1].includes(5)) ||
        (history[1].includes(6) && history[1].includes(7) && history[1].includes(8)) ||
        (history[1].includes(0) && history[1].includes(3) && history[1].includes(6)) ||
        (history[1].includes(1) && history[1].includes(4) && history[1].includes(7)) ||
        (history[1].includes(2) && history[1].includes(5) && history[1].includes(8)) ||
        (history[1].includes(0) && history[1].includes(4) && history[1].includes(8)) ||
        (history[1].includes(2) && history[1].includes(4) && history[1].includes(6)))
    {
        cpu = 0;
        document.getElementById("BKEText").innerHTML = "<b>Speler O heeft gewonnen!</b>";
        document.getElementById("gameResetBKE").style.display = "inline-block";
    }
    if (history[0].length + history[1].length == 9)
    {
        cpu = 0;
        document.getElementById("BKEText").innerHTML = "<b>Gelijkspel!</b>";
        document.getElementById("gameResetBKE").style.display = "inline-block";
    }
}

function ResetBKE()
{
    document.getElementById("gameOptionBKE0").style.display = "inline-block";
    document.getElementById("gameOptionBKE1").style.display = "inline-block";
    document.getElementById("gameResetBKE").style.display = "none";
    document.getElementById("BKEGameRow0").style.display = "none";
    document.getElementById("BKEGameRow1").style.display = "none";
    document.getElementById("BKEGameRow2").style.display = "none";
    document.getElementById("BKEText").innerHTML = "<b>Kies hoe je wilt spelen:</b>";
    document.getElementById("BKEGameButton0").innerHTML = "";
    document.getElementById("BKEGameButton1").innerHTML = "";
    document.getElementById("BKEGameButton2").innerHTML = "";
    document.getElementById("BKEGameButton3").innerHTML = "";
    document.getElementById("BKEGameButton4").innerHTML = "";
    document.getElementById("BKEGameButton5").innerHTML = "";
    document.getElementById("BKEGameButton6").innerHTML = "";
    document.getElementById("BKEGameButton7").innerHTML = "";
    document.getElementById("BKEGameButton8").innerHTML = "";
    document.getElementById("gameOptionBKE0").innerHTML = "Tegen de computer";
    document.getElementById("gameOptionBKE1").innerHTML = "Tegen iemand naast je";
    history = [[], []];
}

function ClearPossible(playerNumber)
{
    if (CheckRow(playerNumber, 0, 1, 2) == true)
    {
        if (history[playerNumber].includes(0) == false)
            return 0;
        if (history[playerNumber].includes(1) == false)
            return 1;
        if (history[playerNumber].includes(2) == false)
            return 2;
    }
    if (CheckRow(playerNumber, 3, 4, 5) == true)
    {
        if (history[playerNumber].includes(3) == false)
            return 3;
        if (history[playerNumber].includes(4) == false)
            return 4;
        if (history[playerNumber].includes(5) == false)
            return 5;
    }
    if (CheckRow(playerNumber, 6, 7, 8) == true)
    {
        if (history[playerNumber].includes(6) == false)
            return 6;
        if (history[playerNumber].includes(7) == false)
            return 7;
        if (history[playerNumber].includes(8) == false)
            return 8;
    }
    if (CheckRow(playerNumber, 0, 3, 6) == true)
    {
        if (history[playerNumber].includes(0) == false)
            return 0;
        if (history[playerNumber].includes(3) == false)
            return 3;
        if (history[playerNumber].includes(6) == false)
            return 6;
    }
    if (CheckRow(playerNumber, 1, 4, 7) == true)
    {
        if (history[playerNumber].includes(1) == false)
            return 1;
        if (history[playerNumber].includes(4) == false)
            return 4;
        if (history[playerNumber].includes(7) == false)
            return 7;
    }
    if (CheckRow(playerNumber, 2, 5, 8) == true)
    {
        if (history[playerNumber].includes(2) == false)
            return 2;
        if (history[playerNumber].includes(5) == false)
            return 5;
        if (history[playerNumber].includes(8) == false)
            return 8;
    }
    if (CheckRow(playerNumber, 0, 4, 8) == true)
    {
        if (history[playerNumber].includes(0) == false)
            return 0;
        if (history[playerNumber].includes(4) == false)
            return 4;
        if (history[playerNumber].includes(8) == false)
            return 8;
    }
    if (CheckRow(playerNumber, 2, 4, 6) == true)
    {
        if (history[playerNumber].includes(2) == false)
            return 2;
        if (history[playerNumber].includes(4) == false)
            return 4;
        if (history[playerNumber].includes(6) == false)
            return 6;
    }
    return 9;
}

function CheckRow(playerNumber, box0, box1, box2)
{
    let otherPlayer = 0;
    if (playerNumber == 0)
        otherPlayer = 1;
    if ((history[playerNumber].includes(box0) && history[playerNumber].includes(box1) && history[otherPlayer].includes(box2) == false) ||
        (history[playerNumber].includes(box0) && history[playerNumber].includes(box2) && history[otherPlayer].includes(box1) == false) ||
        (history[playerNumber].includes(box1) && history[playerNumber].includes(box2) && history[otherPlayer].includes(box0) == false))
        return true;
    else
        return false;
}