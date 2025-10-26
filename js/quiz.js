const questions = [
    [],
    []
]
const maxPerCategorie = 1;
const maxVragen = 7;
var score = [0, 0, 0, 0, 0, 0, 0, 0]
var questionCount = [0, 0, 0, 0, 0, 0, 0, 0];
var currentQuestion = 0;

document.getElementById("quizVraag").style.display = 'none';

function StartQuiz()
{
    document.getElementById("quizButtonStart").style.display = 'none';
    document.getElementById("quizVraag").style.display = 'block';
    score = [0, 0, 0, 0, 0, 0, 0, 0];
    questionCount = [0, 0, 0, 0, 0, 0, 0, 0];
}
function GetQuestion()
{
    currentQuestion = Math.floor(Math.random() * questions.length);
    document.getElementById("quizVraag").innerHTML = questions[currentQuestion][4];
}
function AnswerQuestion(buttonNumber)
{
    score[0] += parseInt(questions[currentQuestion][3]);
    if (questions[currentQuestion][1] == "1")
        score[1] += parseInt(questions[currentQuestion][3]);
    if (questions[currentQuestion][1] == "2")
        score[2] += parseInt(questions[currentQuestion][3]);
    if (questions[currentQuestion][1] == "3")
        score[3] += parseInt(questions[currentQuestion][3]);
    if (questions[currentQuestion][1] == "4")
        score[4] += parseInt(questions[currentQuestion][3]);
    if (questions[currentQuestion][1] == "5")
        score[5] += parseInt(questions[currentQuestion][3]);
    if (questions[currentQuestion][1] == "6")
        score[6] += parseInt(questions[currentQuestion][3]);
    if (questions[currentQuestion][1] == "7")
        score[7] += parseInt(questions[currentQuestion][3]);
    questionCount[0] += 1;
    questionCount[parseInt(questions[currentQuestion][1])] += 1;
    UpdateScore();
    if (questionCount >= maxVragen)
    {
        document.getElementById("quizVraag").innerHTML = "Dat was de quiz, welke score heb jij?"
    }
    else
        GetQuestion();
}
function UpdateScore()
{
    document.getElementById("totaalScore").innerHTML = "Totaal: " + score[0].toString();
    document.getElementById("rekenenScore").innerHTML = "Rekenen: " + score[1].toString();
    document.getElementById("taalScore").innerHTML = "Taal: " + score[2].toString();
    document.getElementById("geschiedenisScore").innerHTML = "Geschiedenis: " + score[3].toString();
    document.getElementById("aardrijkskundeScore").innerHTML = "Aardrijkskunde: " + score[4].toString();
    document.getElementById("natuurScore").innerHTML = "Natuur: " + score[5].toString();
    document.getElementById("coderenScore").innerHTML = "Coderen: " + score[6].toString();
    document.getElementById("algemeenScore").innerHTML = "Algemeen: " + score[7].toString();
}