const teamOneScore = document.getElementById("score1");
const teamTwoScore = document.getElementById("score2");
var score1 = 0;
var score2 = 0;

function addScoreTeam1(numPointsToIncrement) {
    score1 += numPointsToIncrement;
    teamOneScore.textContent = score1;
    updateColour();
}


function addScoreTeam2(numPointsToIncrement) {
    score2 += numPointsToIncrement;
    teamTwoScore.textContent = score2;
    updateColour();
}

function reset() {
    score1 = 0;
    score2 = 0;
    teamOneScore.textContent = score1;
    teamTwoScore.textContent = score2;
}

function updateColour() {
    teamOneScore.style.color = "#c11818";
    teamTwoScore.style.color = "#c11818"; 
    if (score1 > score2) {
        teamOneScore.style.color = "red";
    } else if (score1 < score2) {
        teamTwoScore.style.color = "red";
    }
}