// Challenge 03 : Rock , Paper , Scissor

function rpsGame(yourChoice) {
    // console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    //console.log(humanChoice);
    botChoice = numberToChoice(randToRpsInt());
    result = decideWinner(humanChoice, botChoice);
    console.log(result);
    message = finalMessage(result);
    console.log(message);
    rpsFrontEnd(humanChoice, botChoice, message);
}

// For BotChoice
function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number];
}

// Decide winner
function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock': { 'scissor': 1, 'rock': 0.5, 'paper': 0 },
        'paper': { 'rock': 1, 'paper': 0.5, 'scissor': 0 },
        'scissor': { 'paper': 1, 'scissor': 0.5, 'rock': 0 }

    };
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    return [yourScore, computerScore];
}

// Returns Message 
function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return { 'message': 'You Lost !', 'color': 'red' };
    } else if (yourScore === 0.5) {
        return { 'message': 'You tied !', 'color': 'yellow' };
    } else {
        return { 'message': 'You Win !', 'color': 'green' };
    }
}

// Front End Answer Function

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src

    }

    // removig all images 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src=' " + imageDatabase[humanImageChoice] + " ' > ";
    messageDiv.innerHTML = " <h1 style='color: " + finalMessage['color'] + ";  '>" + finalMessage['message']; + "</h1>";
    botDiv.innerHTML = "<img src=' " + imageDatabase[botImageChoice] + " ' > ";



    document.getElementById('flex-box').appendChild(humanDiv);
    document.getElementById('flex-box').appendChild(messageDiv);
    document.getElementById('flex-box').appendChild(botDiv);
}