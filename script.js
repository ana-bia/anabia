function largerNumber(){
  var Num1 = parseInt(prompt("Enter your first number:",""));
  var Num2 = parseInt(prompt("Enter your second number:",""));

  if (Num1 > Num2){
    alert( Num1 + " is the larger number" );
  }
  
  else if (Num1 < Num2){
    alert( Num2 + " is the larger number");
  }
  
  else if(Num1 == Num2){
    alert( "Those numbers are the same!");
  }
  
  else{
    alert( "That's not a number!");
  }
}

function thirdAngle(){
  
  var Angle1 = parseInt(prompt("Enter your first angle:",""));
    if (Angle1 > 0 && Angle1 < 178){
       var Angle2 = parseInt(prompt("Enter your second angle:",""));
    }

    else{
      alert("Enter an integer between 1 and 178!");
    }
  
  var Angle3 = (180 - (Angle1+Angle2));  
    if (Angle2 > 0 && Angle2 < 178){
      alert( "The third angle is " + Angle3 );
    }

    else{
      alert("Enter an integer between 1 and 178!");
    }
}

function centuryFromYear(){
  var Year = parseInt(prompt("Enter a year",""));  
  
  if (Year % 100 == 0){
    var Century = (Year / 100);
      alert (Year + " is in the " + Century + " century");
  }

  else if (Year > 1){
    var Century = Math.ceil(Year / 100);
      alert (Year + " is in the " + Century + " century");
  }

  else{
    alert("Enter a year!");
  }
}

function multiples(){
  for (let i = 1; i <= 100; i++) {
    if (i  % 4 === 0 && i % 10 === 0){
      console.log("TenFour");
    }
    else if (i % 10 === 0){
      console.log("Ten");
    }
    else if (i  % 4 === 0){
      console.log("Four");
    }
    else{
      console.log(i);
    }
  }
}

function strLength(){
  let strInput = prompt("Enter a statement");
    alert("The length of the string is " + strInput.length);
  }

function login(){
  let userName = prompt("User Name:");
  let password = prompt("Password:");
      
    if (userName.toLowerCase() == "anabia" && password == "2003ana"){
        alert("Welcome");
    }
    else{
      alert("Stop");
    }
}
    
function otherCap(){
  let msg = prompt("Enter a statement to see something cool");
  let output = "";
    for (let i = 0; i < msg.length; i++) {
      if (i % 2 == 0){
        output += (msg[i].toLowerCase());
        }
      else{
        output += (msg[i].toUpperCase());
      }  
    }
    alert(output);
  }
  
function encrypt() {
  let msg = prompt("enter your message");
  let key = prompt("enter a key");
  let encryptWord = "";
    const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.!?,:;'/ ";
    
  let first = []; 
  let second = [];
    
    for (let i = 0; i < msg.length; i++) {
      first.push(alphabet.indexOf(msg.charAt(i))); 
      second.push(alphabet.indexOf(key.charAt(i % 3)));
      encryptWord += alphabet.charAt((first[i] + second[i]) % alphabet.length);
    }
  console.log(encryptWord);
}

function decrypt(){
  let msg = prompt("enter your encrypted message");
  let key = prompt("enter the key");
  let decryptWord = [];
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.!?,:;'/ ";
  
  let first = []; 
  let second = [];

    for (let i = 0; i < msg.length; i++) {
      first.push(alphabet.indexOf(msg.charAt(i))); 
      second.push(alphabet.indexOf(key.charAt(i % 3)));
      decryptWord.push(alphabet.charAt((first[i] - second[i]) % alphabet.length));
    }
  console.log(decryptWord.join(""));
}