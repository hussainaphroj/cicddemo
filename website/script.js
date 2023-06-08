let magicNumber = Math.ceil((Math.random() * 10));
var team = ["Afroz", "Bala", "Ravi", "Nowshath", "Sam", "Nihad","Roshan","Sohrab","Sufiyan"];
console.log("Magic number is: " + magicNumber);
playTheGame = function(guess) {
        let response = "Nope. It's not " + guess;
        if (guess > magicNumber)
                response = response + ". Guess Lower!"
        if (guess < magicNumber)
                response = response + ". Guess Higher!"
        if (guess == magicNumber) {
                response = " Correct. The number was " + magicNumber + "."
                magicNumber = Math.ceil((Math.random() * 10));
                console.log("New magic number is: " + magicNumber);
        }
        document.getElementById('results').innerHTML = response;
};
function generator() {
 document.getElementById("name").innerHTML = team[Math.floor(Math.random() * team.length)];
}
