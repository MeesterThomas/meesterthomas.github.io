let phase = 0;
let correct = [false, false, false, false, false];

function StartER()
{
    document.getElementById("Hidden0").style.display = "none";
    document.getElementById("Hidden1").style.display = "block";
    phase = 1;
    correct = [false, false, false, false, false];
}

function AnswerLock(lockNumber)
{
    if (lockNumber == 0 && correct[0] == true)
        return;
    else if (lockNumber == 0 && document.getElementById("ERAnswer0").value == "16")
    {
        document.getElementById("ERLock0").style.backgroundColor = "rgb(72, 72, 200)";
        document.getElementById("ERLock0").style.borderColor = "rgb(11, 11, 177)";
        document.getElementById("ERAnswer0").style.backgroundColor = "rgb(132, 132, 215)";
        correct[0] = true;
    }
    else if (lockNumber == 0)
    {
        document.getElementById("ERAnswer0").style.backgroundColor = "rgb(215, 132, 132)";
    }
    if (lockNumber == 1 && correct[1] == true)
        return;
    else if (lockNumber == 1 && document.getElementById("ERAnswer1").value == "Check")
    {
        document.getElementById("ERLock1").style.backgroundColor = "rgb(72, 72, 200)";
        document.getElementById("ERLock1").style.borderColor = "rgb(11, 11, 177)";
        document.getElementById("ERAnswer1").style.backgroundColor = "rgb(132, 132, 215)";
        correct[1] = true;
    }
    else if (lockNumber == 1)
    {
        document.getElementById("ERAnswer1").style.backgroundColor = "rgb(215, 132, 132)";
    }
    if (lockNumber == 2 && correct[2] == true)
        return;
    else if (lockNumber == 2 && document.getElementById("ERAnswer2").value == "6")
    {
        document.getElementById("ERLock2").style.backgroundColor = "rgb(72, 72, 200)";
        document.getElementById("ERLock2").style.borderColor = "rgb(11, 11, 177)";
        document.getElementById("ERAnswer2").style.backgroundColor = "rgb(132, 132, 215)";
        correct[2] = true;
    }
    else if (lockNumber == 2)
    {
        document.getElementById("ERAnswer2").style.backgroundColor = "rgb(215, 132, 132)";
    }
    if (lockNumber == 3 && correct[3] == true)
        return;
    else if (lockNumber == 3 && (document.getElementById("ERAnswer3").value == "CSS" || document.getElementById("ERAnswer3").value == "css" || document.getElementById("ERAnswer3").value == "Css"))
    {
        document.getElementById("ERLock3").style.backgroundColor = "rgb(72, 72, 200)";
        document.getElementById("ERLock3").style.borderColor = "rgb(11, 11, 177)";
        document.getElementById("ERAnswer3").style.backgroundColor = "rgb(132, 132, 215)";
        correct[3] = true;
    }
    else if (lockNumber == 3)
    {
        document.getElementById("ERAnswer3").style.backgroundColor = "rgb(215, 132, 132)";
    }
    if (lockNumber == 4 && document.getElementById("ERAnswer4").value == "S1A50TO2")
    {
        document.getElementById("ERLock4").style.backgroundColor = "rgb(72, 72, 200)";
        document.getElementById("ERLock4").style.borderColor = "rgb(11, 11, 177)";
        document.getElementById("ERAnswer4").style.backgroundColor = "rgb(132, 132, 215)";
        correct[4] = true;
        phase = 3;
        document.getElementById("Hidden2").style.display = "none";
        document.getElementById("Hidden3").style.display = "block";
        return;
    }
    else if (lockNumber == 4)
    {
        document.getElementById("ERAnswer4").style.backgroundColor = "rgb(215, 132, 132)";
        return;
    }
    if (correct[0] == true && correct[1] == true && correct[2] == true && correct[3] == true)
    {
        phase = 2;
        document.getElementById("Hidden1").style.display = "none";
        document.getElementById("Hidden2").style.display = "block";
    }
}