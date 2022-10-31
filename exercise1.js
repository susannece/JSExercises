//Exercise 1 - JavaScript Clock
function currentDate(){
    const weekdays = ["söndag", "måndag", "tisdag", "onsdag", "torsdag", "fredag", "lördag"];
    const dateNow = new Date();
    let day = weekdays[dateNow.getDay()];
    let dateString = 
    day + ' ' + dateNow.getFullYear() + '/' + (dateNow.getMonth()+1) + '/' + dateNow.getDate() + ' ' + 
    dateNow.getHours() + ':' + dateNow.getMinutes() + ':' + dateNow.getSeconds();
    document.getElementById('ex1').innerHTML = dateString;
}
setInterval(currentDate, 1000);

//Exercise 2 - Leap Year Calendar
function leapYear(){
    let yeartotest = document.getElementById("leapyear").value;
    let remain = yeartotest % 4;
    if(remain == 0)
        document.getElementById("ex2").innerHTML = yeartotest + ' is a leapyear.';
    else document.getElementById("ex2").innerHTML = yeartotest + ' is not a leapyear.';
}

//Exercise 3 - Is january 1 a sunday?
function sundayYear(){
    let yeartotest3 = document.getElementById("year3").value;
    const dateToCheck = new Date(1, 1, yeartotest3);
    let day3 = dateToCheck.getDay();
    if(day3 == 0)
        document.getElementById('ex3').innerHTML = "It is a sunday.";
    else document.getElementById('ex3').innerHTML = "It is not a sunday.";
}

//Exercise 4 – Guessing game
function guessingGame(){
    let randomNumber = Math.floor(Math.random() * 11);
    let guessedNumber = document.getElementById("number4").value;
    if(randomNumber == guessedNumber)
        document.getElementById('ex4').innerHTML = "You guessed right!";
    else document.getElementById('ex4').innerHTML = "You guessed wrong!";
}

//Exercise 5 - Days until Christmas
function daysToChristmas(){
    let dateNow5 = new Date().getTime();
    let year5 = dateNow5.getFullYear();
    let christmasDate = new Date(year5, 11, 24).getTime();
    let difference = christmasDate - dateNow5;
    let daysToChristmas = Math.floor(difference/(1000*60*60*24));
    document.getElementById('ex5').innerHTML = daysToChristmas + " days to Christmas.";
}

//Exercise 6 – Reverse input
function reverseString(){
    let numbers = document.getElementById("numbers6").value;
    let numberArray = numbers.split(' ');
    document.getElementById('ex6').innerHTML = numberArray.reverseString();
}