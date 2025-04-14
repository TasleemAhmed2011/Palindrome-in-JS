function palindrome(myString){
    var input= myString.toLowerCase().replace(/[a-z0-9]/g, '');

    var reversed = input.split('').reverse().join('');

    if (input === reversed) {
        document.getElementById("result").innerHTML = myString + " is a palindrome";
    } 

    else {
        document.getElementById("result").innerHTML = myString + " is not a palindrome.";
    }

}
palindrome("Rotator");
