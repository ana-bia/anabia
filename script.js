function largerNumber(){
  var Num1 = prompt("Enter your first number:","");
  var Num2 = prompt("Enter your second number:","");

  if (Num1 > Num2){
    alert( Num1 + " is the larger number" );
  }
  
  else if (Num1 < Num2){
    alert( Num2 + " is the larger number");
  }
  
  else if(Num1 == Num2)
    alert( "Those numbers are the same!");
  
  else{
    alert( "That's not a number!");
  }
}

function thirdAngle(){
  
  var Angle1 = prompt("Enter your first angle:","");
    if (Angle1 > 0 && Angle1 < 178){
       var Angle2 = prompt("Enter your second angle:","");
    }

    else{
      alert("Enter an integer between 1 and 178!");
    }
  
  var Angle3 = (180 - (+Angle1 + +Angle2));  
    if (Angle2 > 0 && Angle2 < 178){
      alert( "The third angle is " + Angle3 );
    }

    else{
      alert("Enter an integer between 1 and 178!");
    }
}

function centuryFromYear(){
  var Year = prompt("Enter a year","");  
  
  if (Year % 100 = 0){
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
