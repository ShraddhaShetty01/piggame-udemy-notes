/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/* Dom : document object model 
structured representation of an HTML document 
The DOM is used to connect webpages to scripts like Javascript 
*/

var scores, roundScore, activePlayer, gamePlaying;

//state variable,,

init();

//console.log(dice);

//document.querySelector('#current-' + activePlayer).textContent = dice; //setter
// query selector is choose element from the webpage 
// lets us select stuff exactly the way in css
// current zero is player -1 red box value 
// textContent will only display plain text and not HTML 

//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score-0').textContent; //getter
// console.log(x);

// document.querySelector('.dice').style.display = 'none'; // to change the display of the dice

// Events 
// evenets are the notification that are sent to notify the code that something happened on that webpage 
// examples : clicking a button, resizing the window, scrolling down or pressing a key
// event listener : a function that performs an action based on a certain event. it waits for a specific event to happen 
// poping up a window 
// event will execute whne the execution task is empty 
document.querySelector('.btn-roll').addEventListener('click', function() {
   
   if(gamePlaying) {
 // 1. Random number 
 var dice = Math.floor(Math.random() * 6) + 1;
 // scoping chain
 
     // 2. Display the result
     var diceDOM = document.querySelector('.dice');
     diceDOM.style.display = 'block';
     diceDOM.src = 'dice-' + dice + '.png';
 
 
     //3. Update the round score if the rolled number was not = 1
 if (dice !== 1){              // !== doesnt do type coercion 
     // add score   
     roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
 
 } else {
 // next player
 NextPlayer();
 
 // DRY Principle 
 
 
 }
 
}
   
  
});// this is called as anaonymous function where there is no name to the function but can be used to obly insde this event listener 

document.querySelector('.btn-hold').addEventListener('click', function() {
 if(gamePlaying) {

    // add current score to global score 
    scores[activePlayer] += roundScore;


    // update the UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // check if player won the game 

      if (scores[activePlayer]>= 20){
          document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
          document.querySelector('.dice').style.display = 'none';
          document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
          document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
          gamePlaying = false;
      } else {
            //nextplayer
            NextPlayer();
      }
 }
    

});
// document.querySelector('.btn-roll').addEventListener('click',btn); // btn is a call back function 

function NextPlayer() {
    // nextplayer();
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
    roundScore = 0;
 
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
 
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
 
 //    document.querySelector('.player-0-panel').classList.remove('active');
 //    document.querySelector('.player-1-panel').classList.add('active');
 
    document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init); 


function init() {
    scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none'; // to change the display of the dice

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');




}










