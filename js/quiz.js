const questions = [
    ["0000", "1", "1", "2", "7x8=", "56", "49", "48", "63"],
    ["0001", "1", "1", "2", "Hoe groot is je duim ongeveer?", "1cm", "1mm", "1m", "1km"],
    ["0002", "1", "1", "2", "Hoe heet een tabel waar je verhoudingen mee berekend?", "Een verhoudingstabel", "Een tabelverhouding", "Een liniaal", "Een rekenschrift"],
    ["0003", "1", "0", "2", "12x12=", "144", "0", "0", "0"],
    ["0004", "1", "0", "2", "Hoeveel minuten zitten er in 5 minuten?", "5:5 minuten:5 Minuten:5minuten:5Minuten", "0", "0", "0"],
    ["0005", "2", "1", "2", "Welk woord is goed geschreven?", "Goed", "Goet", "Geod", "Geot"],
    ["0006", "2", "1", "2", "Wat voor soort woord is hond?", "Een zelfstandig naamwoord", "Een werkwoord", "Een bijvoeglijk naamwoord", "Een bijwoord"],
    ["0007", "2", "1", "2", "Wat is de verleden tijd van gaan?", "Ging", "Gaande", "Gaante", "Gegegaan"],
    ["0008", "2", "1", "2", "Wat zet je aan het einde van een uitroepende zin?", "!", "?", ".", ","],
    ["0009", "2", "1", "2", "Wat is het verkleinwoord van stoel?", "Stoeltje", "Stoelke", "Stoeltjee", "Stoeltjeeee"],
    ["0010", "3", "1", "2", "Wie was Willem van Oranje?", "Een prins die voor vrijheid vocht", "De uitvinder van sinaasappels", "Een schilder van het schilderij 'de sinaasappels'", "Een doodgewone man"],
    ["0011", "3", "1", "2", "Wat droegen ridders in de Middeleeuwen?", "Een harnas", "Een zwembroek", "Een trainingspak", "Een hoge hoed om te toveren"],
    ["0012", "3", "1", "2", "Wie schilderde de nachtwacht?", "Rembrandt", "Meneer Nacht", "Meneer Wacht", "Meester Thomas"],
    ["0013", "3", "1", "2", "Wat deden mensen in de prehistorie?", "Vuur maken en jagen", "TikToks maken", "Naar school gaan", "Gamen"],
    ["0014", "3", "1", "2", "Wie was Napoleon?", "Een kleine grote baas", "Een pizzabakker", "Een profvoetballer", "Een Romeinse keizer"],
    ["0015", "4", "1", "2", "Wat is de hoofdstad van Frankrijk?", "Parijs", "Berlijn", "Amsterdam", "Luxemburg"],
    ["0016", "4", "1", "2", "Welke zee ligt tussen Nederland en Engeland?", "Noordzee", "Oostzee", "Waddenzee", "Westzee"],
    ["0017", "4", "1", "2", "In welk werelddeel ligt Nederland?", "Europa", "Azië", "Afrika", "Zuid-Amerika"],
    ["0018", "4", "1", "2", "Welk land ligt niet in Europa?", "Canada", "Spanje", "Italië", "Portugal"],
    ["0019", "4", "1", "2", "Hoe heet het kompasdeel dat naar boven wijst?", "Noord", "Oost", "Zuid", "West"],
    ["0020", "5", "1", "2", "Welke van deze dieren legt geen eieren?", "Hond", "Kip", "Eend", "Schildpad"],
    ["0021", "5", "1", "2", "Wat ademen mensen in?", "Zuurstof", "Koolstofmono-oxide", "Water", "Pannenkoekenmix"],
    ["0022", "5", "0", "2", "Hoeveel poten heeft een spin?", "8", "0", "0", "0"],
    ["0023", "5", "1", "2", "Welke van deze is het grootst?", "Olifant", "Muis", "Rat", "Cavia"],
    ["0024", "5", "1", "2", "Hoe noem je een dier dat zowel planten als vlees eet?", "Omnivoor", "Herbivoor", "Carnivoor", "Ikeetniksvoor"],
    ["0025", "6", "1", "10", "Waar staat de tag 'div' voor?", "Division", "Div", "Diva", "Divident"],
    ["0026", "6", "1", "10", "Hoeveel verschillende h tags zijn er?", "6", "1", "2", "4"],
    ["0027", "6", "1", "10", "Met welke property regel je de achtergrondkleur van een element?", "background-color", "achtergrond-kleur", "color", "Sesam kleuren nu!"],
    ["0028", "6", "1", "10", "Welke taal ga je niet leren gebruiken op deze website?", "Frans", "HTML", "CSS", "Javascript"],
    ["0029", "6", "1", "10", "Hoe heet de website waar je deze quiz op kan vinden?", "meesterthomas.github.io", "thomasmeester.hubgit.io", "meesterthomas.hubgit.io", "thomasmeester.github.io"],
    ["0030", "7", "0", "2", "Hoeveel dagen heeft een schrikkeljaar?", "366", "0", "0", "0"],
    ["0031", "7", "1", "2", "Welke kleur krijg je als je rood en geel mengt?", "Oranje", "Blauw", "Groen", "Paars"],
    ["0032", "7", "1", "2", "Wat gebruik je om te meten hoeveel graden het is?", "Thermometer", "Weegschaal", "Liniaal", "Kompas"],
    ["0033", "7", "1", "2", "Wat vieren we op 27 april in Nederland?", "Koningsdag", "Sinterklaas", "Kerst", "Pasen"],
    ["0034", "7", "1", "2", "Hoeveel letters heeft het alfabet?", "26", "23", "21", "2"]
]
const maxPerCategorie = 2;
const maxVragen = 14;
var questionList;
var score = [0, 0, 0, 0, 0, 0, 0, 0]
var questionCount = [0, 0, 0, 0, 0, 0, 0, 0];
var currentQuestion = 0;

function StartQuiz()
{
    document.getElementById("quizButtonStart").style.display = 'none';
    document.getElementById("quizVraag").style.display = 'inline-block';
    score = [0, 0, 0, 0, 0, 0, 0, 0];
    questionCount = [0, 0, 0, 0, 0, 0, 0, 0];
    questionList = structuredClone(questions);
    UpdateScore();
    GetQuestion();
}
function GetQuestion()
{
    if (questionList.length == 0)
    {
        EndQuiz();
        return;
    }
    currentQuestion = Math.floor(Math.random() * questionList.length);
    if (questionCount[parseInt(questionList[currentQuestion][1])] >= maxPerCategorie)
    {
        questionList.splice(currentQuestion, 1);
        GetQuestion();
        return;
    }
    document.getElementById("quizVraag").innerHTML = questionList[currentQuestion][4];
    if (questionList[currentQuestion][2] == "0")
    {
        document.getElementById("quizForm").style.display = 'inline-block';
        document.getElementById("quizForm").value = "";
        document.getElementById("quizButton0").style.display = 'inline-block';
        document.getElementById("quizButton1").style.display = 'none';
        document.getElementById("quizButton2").style.display = 'none';
        document.getElementById("quizButton3").style.display = 'none';
        document.getElementById("quizButton4").style.display = 'none';
    }
    else
    {
        document.getElementById("quizForm").style.display = 'none';
        document.getElementById("quizButton0").style.display = 'none';
        document.getElementById("quizButton1").style.display = 'inline-block';
        document.getElementById("quizButton2").style.display = 'inline-block';
        document.getElementById("quizButton3").style.display = 'inline-block';
        document.getElementById("quizButton4").style.display = 'inline-block';
        let randomValue = Math.floor(Math.random() * 4);
        if (randomValue == 0)
        {
            document.getElementById("quizButton1").innerHTML = questionList[currentQuestion][5];
            document.getElementById("quizButton2").innerHTML = questionList[currentQuestion][7];
            document.getElementById("quizButton3").innerHTML = questionList[currentQuestion][6];
            document.getElementById("quizButton4").innerHTML = questionList[currentQuestion][8];
        }
        else if (randomValue == 1)
        {
            document.getElementById("quizButton1").innerHTML = questionList[currentQuestion][6];
            document.getElementById("quizButton2").innerHTML = questionList[currentQuestion][5];
            document.getElementById("quizButton3").innerHTML = questionList[currentQuestion][8];
            document.getElementById("quizButton4").innerHTML = questionList[currentQuestion][7];
        }
        else if (randomValue == 2)
        {
            document.getElementById("quizButton1").innerHTML = questionList[currentQuestion][8];
            document.getElementById("quizButton2").innerHTML = questionList[currentQuestion][6];
            document.getElementById("quizButton3").innerHTML = questionList[currentQuestion][7];
            document.getElementById("quizButton4").innerHTML = questionList[currentQuestion][5];
        }
        else
        {
            document.getElementById("quizButton1").innerHTML = questionList[currentQuestion][7];
            document.getElementById("quizButton2").innerHTML = questionList[currentQuestion][8];
            document.getElementById("quizButton3").innerHTML = questionList[currentQuestion][5];
            document.getElementById("quizButton4").innerHTML = questionList[currentQuestion][6];
        }
    }
}
function AnswerQuestion(buttonNumber)
{
    console.log(document.getElementById("quizForm").value);
    if (document.getElementById("quizButton" + buttonNumber).innerHTML == questionList[currentQuestion][5] || CheckAnswer(questionList[currentQuestion][5]) == true)
    {
        score[0] += parseInt(questionList[currentQuestion][3]);
        if (questionList[currentQuestion][1] == "1")
            score[1] += parseInt(questionList[currentQuestion][3]);
        if (questionList[currentQuestion][1] == "2")
            score[2] += parseInt(questionList[currentQuestion][3]);
        if (questionList[currentQuestion][1] == "3")
            score[3] += parseInt(questionList[currentQuestion][3]);
        if (questionList[currentQuestion][1] == "4")
            score[4] += parseInt(questionList[currentQuestion][3]);
        if (questionList[currentQuestion][1] == "5")
            score[5] += parseInt(questionList[currentQuestion][3]);
        if (questionList[currentQuestion][1] == "6")
            score[6] += parseInt(questionList[currentQuestion][3]);
        if (questionList[currentQuestion][1] == "7")
            score[7] += parseInt(questionList[currentQuestion][3]);
    }
    questionCount[0] += parseInt(questionList[currentQuestion][3]);
    questionCount[parseInt(questionList[currentQuestion][1])] += parseInt(questionList[currentQuestion][3]);
    UpdateScore();
    questionList.splice(currentQuestion, 1);
    if (questionCount >= maxVragen)
    {
        EndQuiz();
    }
    else
        GetQuestion();
}
function CheckAnswer(correct)
{
    if (correct.includes(':'))
    {
        if (correct.split(':').includes(document.getElementById("quizForm").value))
            return true;
        else
            return false;
    }
    else if (document.getElementById("quizForm").value == correct)
        return true;
    else
        return false;
}
function UpdateScore()
{
    document.getElementById("totaalScore").innerHTML = "Totaal: " + score[0].toString() + "/" + questionCount[0].toString();
    document.getElementById("rekenenScore").innerHTML = "Rekenen: " + score[1].toString() + "/" + questionCount[1].toString();
    document.getElementById("taalScore").innerHTML = "Taal: " + score[2].toString() + "/" + questionCount[2].toString();
    document.getElementById("geschiedenisScore").innerHTML = "Geschiedenis: " + score[3].toString() + "/" + questionCount[3].toString();
    document.getElementById("aardrijkskundeScore").innerHTML = "Aardrijkskunde: " + score[4].toString() + "/" + questionCount[4].toString();
    document.getElementById("natuurScore").innerHTML = "Natuur: " + score[5].toString() + "/" + questionCount[5].toString();
    document.getElementById("coderenScore").innerHTML = "Coderen: " + score[6].toString() + "/" + questionCount[6].toString();
    document.getElementById("algemeenScore").innerHTML = "Algemeen: " + score[7].toString() + "/" + questionCount[7].toString();
}
function EndQuiz()
{
    document.getElementById("quizVraag").innerHTML = "Dat was de quiz, welke score heb jij?";
    document.getElementById("quizButtonStart").style.display = 'inline-block';
    document.getElementById("quizForm").style.display = 'none';
    document.getElementById("quizButton0").style.display = 'none';
    document.getElementById("quizButton1").style.display = 'none';
    document.getElementById("quizButton2").style.display = 'none';
    document.getElementById("quizButton3").style.display = 'none';
    document.getElementById("quizButton4").style.display = 'none';
}