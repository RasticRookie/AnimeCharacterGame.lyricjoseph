document.addEventListener('DOMContentLoaded', function() {

if (parseFloat(q5a4.style.width) > parseFloat(peteTheCat.style.width)) {
  q5a4.style.width = peteTheCat.style.width;

  if (peteTheCat && q5a4) {
    // Log the width values to see what they are
    console.log("q5a4.style.width:", q5a4.style.width); // Should show the width value with units
    console.log("peteTheCat.style.width:", peteTheCat.style.width); // Should show the width value with units

   }
 }
});
var peteTheCat = document.getElementById("Pete");

var Score1 = 0;
var Score2 = 0; 
var Score3 = 0; 
var Score5 = 0; 
var Score6 = 0;
var questionCount = 0;


var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");
var q7a4 = document.getElementById("q7a4");

q1a1.addEventListener("click", King5);
q1a2.addEventListener("click", Grunge6);
q1a3.addEventListener("click", Cottage2);
q1a4.addEventListener("click", threeOne);
q2a1.addEventListener("click", threeOne);
q2a2.addEventListener("click", Cottage2);
q2a3.addEventListener("click", Grunge6);
q2a4.addEventListener("click", King5);
q3a1.addEventListener("click", King5);
q3a2.addEventListener("click", Cottage2);
q3a3.addEventListener("click", oneSix);
q3a4.addEventListener("click", Knight3);
q4a1.addEventListener("click", Cottage2);
q4a2.addEventListener("click", Fool1);
q4a3.addEventListener("click", Knight3);
q4a4.addEventListener("click", fiveSix);
q5a1.addEventListener("click", King5);
q5a2.addEventListener("click", Grunge6);
q5a3.addEventListener("click", threeOne);
q5a4.addEventListener("click", Cottage2);
q6a1.addEventListener("click", Cottage2);
q6a2.addEventListener("click", Grunge6);
q6a3.addEventListener("click", threeOne);
q6a4.addEventListener("click", King5);
q7a1.addEventListener("click", Fool1);
q7a2.addEventListener("click", twoSix);
q7a3.addEventListener("click", Knight3);
q7a4.addEventListener("click", King5);

function Fool1() {

  Score1 += 1;
  questionCount += 1;
  
  console.log("questionCount = " + questionCount + " FoolScore = " + Score1);

  if (questionCount == 7) {
    console.log("The quiz is done!")
    updateResult();
  }
}
  
function Grunge6() {
  Score6 += 1;
  questionCount += 1;
  
  console.log("questionCount = " + questionCount + " GrungeScore = " + Score6);

  if (questionCount == 7) {
    console.log("The quiz is done!")
    updateResult();
  }
}

function King5() {
  Score5 += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " KingScore = " + Score5);

  if (questionCount == 7) {
    console.log("The quiz is done!")
    updateResult();
  }
}

function Knight3() {
  Score3 += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " KnightScore = " + Score3);

  if (questionCount == 7) {
    console.log("The quiz is done!")
    updateResult();
  }
}

function Cottage2() {
  Score2 += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + " CottageScore = " + Score2);

  if (questionCount == 7) {
    console.log("The quiz is done!")
    updateResult();
  }
}

function threeOne() {
  Score1 += 1;
  Score3 += 1;        
  questionCount += 1;

  console.log("questionCount = " + questionCount + " FoolScore = " + Score1 + " KnightScore = " + Score3);

  if (questionCount == 7) {
    console.log("The quiz is done!")
    updateResult();
  }
}

function oneSix() {
  Score1 += 1;
  Score6 += 1;        
  questionCount += 1;

  console.log("questionCount = " + questionCount + " FoolScore = " + Score1 + " GrungeScore = " + Score6);

  if (questionCount == 7) {
    console.log("The quiz is done!")
    updateResult();
  }
}

function fiveSix() {
  Score5 += 1;
  Score6 += 1;        
  questionCount += 1;

  console.log("questionCount = " + questionCount +  " KingScore = " + Score5 + " GrungeScore = " + Score6);

  if (questionCount == 7) {
    console.log("The quiz is done!")
    updateResult();
  }
}

function twoSix() {
      Score2 += 1;
      Score6 += 1;        
      questionCount += 1;

      console.log("questionCount = " + questionCount +  " CottageScore = " + Score2 + " GrungeScore = " + Score6);

      if (questionCount == 7) {
        console.log("The quiz is done!")
        updateResult();
      }
    }



q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);
q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);
q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);
q3a4.addEventListener("click", disableQ3);
q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);
q4a3.addEventListener("click", disableQ4);
q4a4.addEventListener("click", disableQ4);
q5a1.addEventListener("click", disableQ5);
q5a2.addEventListener("click", disableQ5);
q5a3.addEventListener("click", disableQ5);
q5a4.addEventListener("click", disableQ5);
q6a1.addEventListener("click", disableQ6);
q6a2.addEventListener("click", disableQ6);
q6a3.addEventListener("click", disableQ6);
q6a4.addEventListener("click", disableQ6);
q7a1.addEventListener("click", disableQ7);
q7a2.addEventListener("click", disableQ7);
q7a3.addEventListener("click", disableQ7);
q7a4.addEventListener("click", disableQ7);


function disableQ1() {
  q1a1.disabled = true; 
  q1a2.disabled = true; 
  q1a3.disabled = true; 
  q1a4.disabled = true; 
}

function disableQ2() {
  q2a1.disabled = true; 
  q2a2.disabled = true; 
  q2a3.disabled = true; 
  q2a4.disabled = true; 
}

function disableQ3() {
  q3a1.disabled = true; 
  q3a2.disabled = true; 
  q3a3.disabled = true; 
  q3a4.disabled = true; 
}

function disableQ4() {
  q4a1.disabled = true; 
  q4a2.disabled = true; 
  q4a3.disabled = true; 
  q4a4.disabled = true; 
}

function disableQ5() {
  q5a1.disabled = true; 
  q5a2.disabled = true; 
  q5a3.disabled = true;
  q5a4.disabled = true;
}

function disableQ6() {
  q6a1.disabled = true; 
  q6a2.disabled = true; 
  q6a3.disabled = true;
  q6a4.disabled = true;
}

function disableQ7() {
  q7a1.disabled = true; 
  q7a2.disabled = true; 
  q7a3.disabled = true;
  q7a4.disabled = true;
}

function enableQuestions(){
  q1a1.disabled = false; 
  q1a2.disabled = false; 
  q1a3.disabled = false;
  q1a4.disabled = false;
  q2a1.disabled = false; 
  q2a2.disabled = false;
  q2a3.disabled = false;
  q2a4.disabled = false;
  q3a1.disabled = false; 
  q3a2.disabled = false;
  q3a3.disabled = false;
  q3a4.disabled = false;
  q4a1.disabled = false; 
  q4a2.disabled = false;
  q4a3.disabled = false;
  q4a4.disabled = false;
  q5a1.disabled = false; 
  q5a2.disabled = false;
  q5a3.disabled = false;
  q5a4.disabled = false;
  q6a1.disabled = false;
  q6a2.disabled = false;
  q6a3.disabled = false;
  q6a4.disabled = false;
  q7a1.disabled = false;
  q7a2.disabled = false;
  q7a3.disabled = false;
  q7a4.disabled = false;
}


function updateResult() {
  displayResult.addEventListener("click", display);
}

function display() {
      if (Score1 > Score3 && Score1 > Score2 && Score1 > Score5 && Score1 > Score6) {
        result.innerHTML = "You are the YUJI ITADORI!";
        console.log("You are a FOOL!");
      } 
      
      else if (Score2 > Score3 && Score2 > Score1 && Score2 > Score5 && Score2 > Score6) {
        result.innerHTML = "You are MINA ASHIDO!";
        console.log("You are a FAIRY!");
      } 
      
      else if (Score3 > Score1 && Score3 > Score2 && Score3 > Score5 && Score3 > Score6) {
    result.innerHTML = "You are L LAWLIET!";
    console.log("You are a CUTIE!");
  }

  else if (Score5 > Score1 && Score5 > Score2 && Score5 > Score3 && Score5 > Score6) {
    result.innerHTML = "You are the EJIROU KIRISHIMA!";
    console.log("You are a  ROYAL ADVISOR!");
  }

  else if (Score6 > Score1 && Score6 > Score2 && Score6 > Score5 && Score6 > Score3) {
    result.innerHTML = "You are KILLUA ZOLDYCK!";
    console.log("You are a WIZARD!");
  }

  else if (Score6 > Score1 && Score6 > Score5 && Score6 > Score3 && Score2 > Score1 && Score2 > Score3 && Score2 > Score5 && Score6 == Score2) {
    result.innerHTML = "You are SASUKE UCHIHA!";
    console.log("You are an EXPERT TOURTURER for CRIMINALS!!");
  }

  else if (Score1 > Score3 && Score1 > Score5 && Score1 > Score6 && Score2 > Score6 && Score2 > Score3 && Score2 > Score5 && Score1 == Score2) {
    result.innerHTML = "You are YUMEKO JIBAMI!";
    console.log("You are a WITCH!");
  }

  else if (Score1 > Score2 && Score1 > Score5 && Score1 > Score6 && Score3 > Score6 && Score3 > Score2 && Score3 > Score5 && Score1 == Score3) {
    result.innerHTML = "You are LELOUCH LAMPAROUGE!";
    console.log("You are a CULT LEADER AGAINST THE KING!");
  }

  else if (Score3 > Score2 && Score3 > Score5 && Score3 > Score1 && Score6 > Score1 && Score6 > Score2 && Score6 > Score5 && Score6 == Score3) {
    result.innerHTML = "You are BOA HANCOCK!";
    console.log("You are a HUNTSMAN!");
  }

  else if (Score5 > Score2 && Score5 > Score3 && Score5 > Score1 && Score6 > Score1 && Score6 > Score2 && Score6 > Score3 && Score6 == Score5) {
    result.innerHTML = "You are MONKEY D. LUFFY! Although your captain and crew are very new at this, you've decided to travel the world with them and explore.";
    console.log("You are a PIRATE!");
  }

  else if (Score5 > Score2 && Score5 > Score3 && Score5 > Score6 && Score1 > Score6 && Score1 > Score2 && Score1 > Score3 && Score1 == Score5) {
    result.innerHTML = "You are NANA OSAKI!";
    console.log("You are a MERMAID!");
  }

  else if (Score1 > Score2 && Score1 > Score3 && Score1 > Score5 && Score6 > Score3 && Score6 > Score2 && Score6 > Score5 && Score1 == Score6) {
    result.innerHTML = "You are SAIKI K!";
    console.log("You are a HARLOT!");
  }

  else if (Score2 > Score1 && Score2 > Score3 && Score2 > Score6 && Score5 > Score3 && Score5 > Score1 && Score5 > Score6 && Score2 == Score5) {
    result.innerHTML = "You are EREN YEAGER!";
    console.log("You are a CRIMINAL!");
  }

  else if (Score2 > Score1 && Score2 > Score5 && Score2 > Score6 && Score3 > Score5 && Score3 > Score1 && Score3 > Score6 && Score2 == Score3) {
    result.innerHTML = "You are IZUKU MIDORIYA!";
    console.log("You are a !");
  }

  else if (Score5 > Score1 && Score5 > Score2 && Score5 > Score6 && Score3 > Score6 && Score3 > Score1 && Score3 > Score2 && Score5 == Score3) {
    result.innerHTML = "You are a YOR FORGER!";
    console.log("You are a GNOME!");
  }

    else if (Score5 > Score3 && Score6 > Score3 && Score2 > Score3 && Score1 > Score3 && Score5 == Score6 && Score5 == Score2 && Score5 == Score1 && Score6 == Score2 && Score6 == Score1 && Score2 == Score1) {
      result.innerHTML = "You are PIRATE HUNTER ZORO!";
      console.log("You are a FEARLESS SWORDSMAN!");
    }

      else if (Score5 > Score1 && Score6 > Score1 && Score2 > Score1 && Score3 > Score1 && Score5 == Score6 && Score5 == Score2 && Score5 == Score3 && Score6 == Score2 && Score6 == Score3 && Score2 == Score3) {
        result.innerHTML = "You are GON FREECSS!"; 
        console.log("You are a DRAGON!");
      } 

        else if (Score5 > Score6 && Score1 > Score6 && Score2 > Score6 && Score3 > Score6 && Score5 == Score1 && Score5 == Score2 && Score5 == Score3 && Score1 == Score2 && Score1 == Score3 && Score2 == Score3) {
          result.innerHTML = "You are a QUEEN! Your aura is overwhelming and no one can predict your next thought or action. Many look up to you, as you have maintain peace throughout the land for many years. Your well rounded nature leaves many trusting your guidance and protection without a second thought. That crown not only carries the weight of gold and jewels, but also the weight of being a good ruler.";
          console.log("You are a QUEEN!");
        } 

          else if (Score6 > Score5 && Score1 > Score5 && Score2 > Score5 && Score3 > Score5 && Score5 == Score5 && Score6 == Score2 && Score6 == Score3 && Score1 == Score2 && Score1 == Score3 && Score2 == Score3) {
            result.innerHTML = "You are a VAGABOND! From town to town you travel, calling no place home. It's dificult when the only one you can rely on is yourself. But you get by. This wandering lifestyle has brought you many friends in distant lands and many stories saved for a mysterious drink in bars. You're the one who walks in suddenly on a dark and stormy night with nothing but a sword and a few coins.";
            console.log("You are a NOMAD!");
          } 

  else {
    result.innerHTML = "You are SATORU GOJO!";
    console.log("SOmethings wrong...!");
  }
  
    }

function reStart() {
  questionCount = 0;
  Score1 = 0;
  Score2 = 0;
  Score3 = 0;
  Score5 = 0;
  Score6 = 0;
  result.innerHTML = "Your result is...";
  Array.prototype.forEach.call(elements, function(el) {
    el.style.backgroundColor = '#50cd23';
  });
  enableQuestions();
}
restart.addEventListener ("click", reStart);



// Select all elements with the class "t"
var elements = document.getElementsByClassName('t');

// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {

  // Define the colorChange function to toggle the background color
  function colorChange() {
    // Log the current background color for debugging
    console.log(`Current background color: ${this.style.backgroundColor}`);

    // Change the background color of the button when it is clicked
    if (this.style.backgroundColor === 'purple') {
      this.style.backgroundColor = 'blue';
    } else {
      this.style.backgroundColor = 'red';  
    }

    // Log the new background color for debugging
    console.log(`New background color: ${this.style.backgroundColor}`);
  }

  // Add event listener to each element in the "t" collection
  Array.prototype.forEach.call(elements, function(el) {
    // Set an initial color if needed
    el.style.backgroundColor = '#669d34';

    // Attach the colorChange function to the click event
    el.addEventListener('click', colorChange);
  });
 });
