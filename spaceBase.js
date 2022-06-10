//Joan J. Cruz
function diceRollGamble()
{
    //This function will make a dice rolling gambling game that's clearly rigged
    //The house always wins
    var firstDie = Math.ceil(Math.random() * 6) + 1; 
    //Generates a "random" number between 1 and 6 and makes sure is a whole integer
    var secondDie = Math.ceil(Math.random() * 6) + 1;
    //Same as with the first die
    var sum = firstDie + secondDie;
    //This will create a sum of the dice rolls, we shall refer to it later

    document.getElementById("firstResult").innerHTML = "Your first roll was " + firstDie;
    document.getElementById("secondResult").innerHTML = "Your second roll was " + secondDie;
    document.getElementById("finalSum").innerHTML = "The sum is " + sum;
    //These three statements print the dice rolls and their sum using the id's in the html file
    
    if(sum == 7 || sum == 11)
    //If the sum is equal to either 7 or 11, the player loses
    {
        document.getElementById("didYouWin?").innerHTML = "CRAPS You Lose. The house always wins.";
        //Returns the phrase shown above and the player lost
    }
    else if(firstDie == secondDie && firstDie % 2 == 0)
    //This conditional should make sure the rolls were doubles and even numbers
    {
        document.getElementById("didYouWin?").innerHTML = "DOUBLES You Win... this time.";
        //Returns the phrase above and the player wins
    }
    else
    {
        document.getElementById("didYouWin?").innerHTML = "You're still in the game... for now.";
        //Returns the phrase above and the player neither won or lost
    }
}
function findAverage()
//This function will generate two random numbers and display the average
{
    var numberOne = Math.ceil(Math.random() * 6) + 1;
    var numberTwo = Math.ceil(Math.random() * 6) + 1;
    //Generates two random numbers between 1 and 6
    var sum = numberOne + numberTwo;
    var average = sum / 2; 
    //Finds the sum of the dice rolls and calculates the average

    alert("First number: " + numberOne);
    alert("Second number: " + numberTwo);
    alert("Average: " + average);
    //Displays the results in the form of alerts
}