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
        result.innerHTML = "You are the YUJI ITADORI! While he isn't the brightest, his lethal combat skills totally make up for it. With Black Flash and the power of the indomitable human spriti, there is nothing he can't acheive. Yuji currently has more foe than friends, but will he prevail? Always! Want to feel like a tough, brave high schooler? Here's some merch to step into those cool red shoes!: https://link.amazon/B08OkYHxc ; https://link.amazon/B08ERTnfc ; https://link.amazon/B0f5cx4Dq";
        console.log("You are a FOOL!");
      } 
      
      else if (Score2 > Score3 && Score2 > Score1 && Score2 > Score5 && Score2 > Score6) {
        result.innerHTML = "You are MINA ASHIDO! While her bubbly personality might mistake her as only a cutie pie, her acid powers are no joke. Sizzling through plastics and metals alike, she is one tough Pro-Hero! Her dance moves are epic and her kindness and bravery are second-best to none! She has grit and talent, perfect for UA High! Want to feel as cool as she looks? Here's some merch to reveal your own acide-like powers!: https://link.amazon/B0dRwqEo8 ; https://link.amazon/B0exGcES4 ; https://link.amazon/B0hJ2aRNf ; https://link.amazon/B0bYCctCO";
        console.log("You are a FAIRY!");
      } 
      
      else if (Score3 > Score1 && Score3 > Score2 && Score3 > Score5 && Score3 > Score6) {
    result.innerHTML = "You are L LAWLIET! While your detective skills are simply impeccable, you couldn't survive due to plot armor. Nonetheless, you have excellent inquiry abilities and a strange affinity for sweet treats! How's that for a real detective? Even with terrible posture and clothes, you still manage to get the job down and done! Want to be a little more in his non-existent shoes? Here's some fun merch to really get going on that detective mission!: https://link.amazon/B054dsJzl ; https://link.amazon/B0cczz1Gy ; https://link.amazon/B04qD3Tsl";
    console.log("You are a CUTIE!");
  }

  else if (Score5 > Score1 && Score5 > Score2 && Score5 > Score3 && Score5 > Score6) {
    result.innerHTML = "You are the EIJIRO KIRISHIMA! With a full-body rocky exterior and mushy, sweet interior, can you do wrong? With even the most unsweet guy at your side, you melt the hearts of all UA High. Even all of tokyo! While still spending tons on hair dye, this phenomenon of a Pro-Hero CAN afford it! Ha! Want to experience the awesome manliness of Eijio Kirishima again? Here's some great merch to do just that!: https://link.amazon/B01Z2sM4i ; https://link.amazon/B0guHW4kH ; https://link.amazon/B07v95a1U";
    console.log("You are a  ROYAL ADVISOR!");
  }

  else if (Score6 > Score1 && Score6 > Score2 && Score6 > Score5 && Score6 > Score3) {
    result.innerHTML = "You are KILLUA ZOLDYCK! Even though we've head about million times the way your family tortured you, that doesn't negate how you always manage to torturously evicerate your opponent! With good styles, great skateboaring skills, and an even better bestfriend, you have it all figured out! What too feel just as cool, calm, and collected? Here's some merch to fill those tiny, yet powerful shoes!: https://link.amazon/B0bVUCNLS ; https://link.amazon/B0hFgCdM9 ; https://link.amazon/B0e7VRU6v";
    console.log("You are a WIZARD!");
  }

  else if (Score6 > Score1 && Score6 > Score5 && Score6 > Score3 && Score2 > Score1 && Score2 > Score3 && Score2 > Score5 && Score6 == Score2) {
    result.innerHTML = "You are SASUKE UCHIHA! Your dark, borading aura is more intimidating than that of your skills! While very aloof and scary, you have an affinity for a certain blonde bird-ish boy who just can't get enough of you. Nonetheless, there is hope for the hidden leaf you may return. Want to step into that aloof, borading aura! Here' some merch to be just as calculated and calm!: https://link.amazon/B02hVJAgZ ; https://link.amazon/B05DD3nx6 ; https://link.amazon/B0h4tGdPa";
    console.log("You are an EXPERT TOURTURER for CRIMINALS!!");
  }

  else if (Score1 > Score3 && Score1 > Score5 && Score1 > Score6 && Score2 > Score6 && Score2 > Score3 && Score2 > Score5 && Score1 == Score2) {
    result.innerHTML = "You are YUMEKO JIBAMI! This crazed gambler will stop at nothing for a good time, not particular on winning or loosing. She never cared, but does it for the love of the game. While you aren't too upset about loosing millions of yen, you sure like to make your opponents do so! Want to get your gambling freak on? Here's some merch to really get into that showdown mood!: https://link.amazon/B0iAOUgY0 ; https://link.amazon/B0fM8BVpz ; https://link.amazon/B00ensL5Z ";
    console.log("You are a WITCH!");
  }

  else if (Score1 > Score2 && Score1 > Score5 && Score1 > Score6 && Score3 > Score6 && Score3 > Score2 && Score3 > Score5 && Score1 == Score3) {
    result.innerHTML = "You are LELOUCH LAMPAROUGE! You have begun a rebellion no army can stop, serious about revenge against Britannia! While you were once a novice, your advanced planning and coy nature has made you an indomitable threat to their regime! While there may be no hope for your love life, there is certainly some left to take down the head of state! Want to get into those rebellious vibes? Here's some merch to step into those shoes that are VERY hard to fill!: https://link.amazon/B04JNMkG3 ; https://link.amazon/B03AvTZgX ; https://link.amazon/B0bmQGKLp";
    console.log("You are a CULT LEADER AGAINST THE KING!");
  }

  else if (Score3 > Score2 && Score3 > Score5 && Score3 > Score1 && Score6 > Score1 && Score6 > Score2 && Score6 > Score5 && Score6 == Score3) {
    result.innerHTML = "You are BOA HANCOCK! With great power comes great responsibility, something she knows dearly. Witha  beautiful face and perfect power to go with it, what can stop her? Maybe a rubber boy, but besides that you are beloved and take your duty for your kindgom very seriously. Want to feel just as romanitcal? Here's some merch to really embody that vibe!: https://link.amazon/B0amAu9XL ; https://link.amazon/B090OE8jI ; https://link.amazon/B098rfcmV ";
    console.log("You are a HUNTSMAN!");
  }

  else if (Score5 > Score2 && Score5 > Score3 && Score5 > Score1 && Score6 > Score1 && Score6 > Score2 && Score6 > Score3 && Score6 == Score5) {
    result.innerHTML = "You are MONKEY D. LUFFY! Although your captain and crew are very new at this, you've decided to travel the world with them and explore. With your barbaric wisdom, you hope to be king of the pirates one day, the most free across the seas! Want to really get your Gum Gum No Mi on? Here' some merch to step into those silly flip flops once again!: https://link.amazon/B03lEbork ; https://link.amazon/B08KP4xn7 ; https://link.amazon/B0gOnl5lt";
    console.log("You are a PIRATE!");
  }

  else if (Score5 > Score2 && Score5 > Score3 && Score5 > Score6 && Score1 > Score6 && Score1 > Score2 && Score1 > Score3 && Score1 == Score5) {
    result.innerHTML = "You are NANA OSAKI! While your yuri was doomed from the start, your rock career wasn't. It's impossible to have your strawberry cake and eat it too, I guess. While times with Hachi we wonderful, you couldn't help but focus on yourself instead. Coming off as aloof, you're really just a jaded lover girl. How romantical. Want to get into the depth of your feels? Currate that vibe with some fire Nana merch!: https://link.amazon/B04qEVkSI ; https://link.amazon/B00B9zzmS ; https://link.amazon/B04nJkANO";
    console.log("You are a MERMAID!");
  }

  else if (Score1 > Score2 && Score1 > Score3 && Score1 > Score5 && Score6 > Score3 && Score6 > Score2 && Score6 > Score5 && Score1 == Score6) {
    result.innerHTML = "You are SAIKI K! Hey there, no one is buying your 'I hate my friends' act, even with Nendo. If one things for certain and two for sure, you would do anything to save them as much as you love coffee jelly. While coming off as aloof, you're just shy and introverted is all. You try to swat people away like the cockroaches you hate, but deep down you love everyone in your life. What a guy! Want to feel those super secret superpower vibes all over again? Let's get you some swaggy Saiki merch to do just that!: https://link.amazon/B0gkHSQRx ; https://link.amazon/B03ujJyng ; https://link.amazon/B02YVRXjI";
    console.log("You are a HARLOT!");
  }

  else if (Score2 > Score1 && Score2 > Score3 && Score2 > Score6 && Score5 > Score3 && Score5 > Score1 && Score5 > Score6 && Score2 == Score5) {
    result.innerHTML = "You are EREN YEAGER! While world domincation was not on anyone in Marley's bingo card, you still sought revenge that you created yourself. What a twist fate, am I right? Too prideful to fail and too stubborn to quit, you were once a dreaming boy who wanted to see the sea. You became a man that wanted to conquer those that wronged you. Mikaska had to use her last shread of dignity to end you, but your will lived on through every Colossal Titan that left a footprint. What a day it was! Want to embody the vibes of a true world conqueror, even in death? Here's so merch to currated such a vibe!: https://link.amazon/B02mSeufv ; https://link.amazon/B00QAIVwu ; https://link.amazon/B0fGIUAyD";
    console.log("You are a CRIMINAL!");
  }

  else if (Score2 > Score1 && Score2 > Score5 && Score2 > Score6 && Score3 > Score5 && Score3 > Score1 && Score3 > Score6 && Score2 == Score3) {
    result.innerHTML = "You are IZUKU MIDORIYA!";
    console.log("You are a !");
  }

  else if (Score5 > Score1 && Score5 > Score2 && Score5 > Score6 && Score3 > Score6 && Score3 > Score1 && Score3 > Score2 && Score5 == Score3) {
    result.innerHTML = "You are a YOR FORGER! As a cute government official by day and dangerous assassin by night, she will stop at nothing to protect her family. Yor Forger, AKA Thorn Princess, has a body count worst than King Von himself! Yikes! Want to step into her scary yet elegant shoes? Here's so merch to do just that!: https://link.amazon/B02Lj2Bxd ; https://link.amazon/B06WCmh1W ; https://link.amazon/B0fWUwLjL";
    console.log("You are a GNOME!");
  }

    else if (Score5 > Score3 && Score6 > Score3 && Score2 > Score3 && Score1 > Score3 && Score5 == Score6 && Score5 == Score2 && Score5 == Score1 && Score6 == Score2 && Score6 == Score1 && Score2 == Score1) {
      result.innerHTML = "You are PIRATE HUNTER ZORO! He is a fearless swordsman, bravely conquering the seas with his International friends and crew, but make no mistake. His one eye is still good enough to slash someone down. Here's some merch to make you feel more like this rebel who conquers the seas!: https://link.amazon/B0iPvgi2t ; https://link.amazon/B0dFSlqRB ; https://link.amazon/B0gCkiqd5";
      console.log("You are a FEARLESS SWORDSMAN!");
    }

      else if (Score5 > Score1 && Score6 > Score1 && Score2 > Score1 && Score3 > Score1 && Score5 == Score6 && Score5 == Score2 && Score5 == Score3 && Score6 == Score2 && Score6 == Score3 && Score2 == Score3) {
        result.innerHTML = "You are GON FREECSS! After catching the biggest fish in the island, you were able to take the Hunter Exam, not knowing what adventures await you! With an open mind and even more open heart, it was impossible not to find a calmer best friend along the way! Your optimism will bring you far, so have hope! What to feel like a true Hunter? Here's some merch to help you out!: https://link.amazon/B06nU5pxx ; https://link.amazon/B041ygbM6 ; https://link.amazon/B0bWVM0Ot"; 
        console.log("You are a DRAGON!");
      } 

        else if (Score5 > Score6 && Score1 > Score6 && Score2 > Score6 && Score3 > Score6 && Score5 == Score1 && Score5 == Score2 && Score5 == Score3 && Score1 == Score2 && Score1 == Score3 && Score2 == Score3) {
          result.innerHTML = "You are a NARUTO UZUMAKI! While you can't stop the 'sitting on the swing' flashbacks every other episode, you sure can't let anyone stop your dreams! You're relentless and courageous, ready to throw down at a second's notice. It's no wonder the Hidden Leaf didn't know what to do with you. Even while your...heh...'friend'...deserved to be left with his clan, you were in desperate pursuit and never gave up hope. Want to be a bird for your doomed yaoi? Here's some merch to truly get into that vibe! Dattabayo!!:  https://link.amazon/B09mSNiya ; https://link.amazon/B0i0ZdWj6 ; https://link.amazon/B06PEuIoo";
          console.log("You are a QUEEN!");
        } 

          else if (Score6 > Score5 && Score1 > Score5 && Score2 > Score5 && Score3 > Score5 && Score5 == Score5 && Score6 == Score2 && Score6 == Score3 && Score1 == Score2 && Score1 == Score3 && Score2 == Score3) {
            result.innerHTML = "You are a BAKUGO KATSUKI!";
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
