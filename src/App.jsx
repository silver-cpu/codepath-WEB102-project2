import './App.css';
import { useState } from 'react';
const q = [[
  ["The capital of France is Paris.", true], 
  ["The Eiffel Tower is in Paris.", true], 
  ["Paris is known for its art and culture.", true],
  ["Water boils at 100°C at sea level.", true], 
  ["The boiling point of water decreases with altitude.", true], 
  ["Water is a universal solvent.", true],
  ["The Earth revolves around the Sun.", true], 
  ["It takes approximately 365.25 days for Earth to orbit the Sun.", true], 
  ["The Earth's axis is tilted at an angle of 23.5 degrees.", true],
  ["Mount Everest is the highest mountain on Earth.", true], 
  ["It is located in the Himalayas.", true], 
  ["Its height is approximately 8,848 meters.", true],
  ["The Great Wall of China is over 13,000 miles long.", true], 
  ["It was built to protect China from invaders.", true], 
  ["The wall was constructed over several dynasties.", true],
  ["A triangle has three sides.", true], 
  ["The sum of the interior angles of a triangle is 180°.", true], 
  ["There are different types of triangles, such as equilateral, isosceles, and scalene.", true],
  ["The Amazon Rainforest is the largest tropical rainforest in the world.", true], 
  ["It is located in South America.", true], 
  ["The Amazon Rainforest is home to a vast diversity of species.", true],
  ["Shakespeare wrote 'Romeo and Juliet'.", true], 
  ["'Romeo and Juliet' is a tragic love story.", true], 
  ["The play was first published in 1597.", true],
  ["The human body has 206 bones.", true], 
  ["The largest bone in the human body is the femur.", true], 
  ["Bones are made of collagen and calcium phosphate.", true],
  ["The speed of light in a vacuum is approximately 299,792 kilometers per second.", true], 
  ["Light travels faster in a vacuum than through any other medium.", true], 
  ["Nothing can travel faster than the speed of light.", true]
],[
  ["What is the capital of France?", false], 
  ["Where is the Eiffel Tower located?", false], 
  ["Why is Paris famous?", false],
  ["At what temperature does water boil?", false], 
  ["How does altitude affect the boiling point of water?", false], 
  ["Why is water considered a universal solvent?", false],
  ["What does the Earth revolve around?", false], 
  ["How long does it take for the Earth to complete one orbit around the Sun?", false], 
  ["What is the tilt of the Earth's axis?", false],
  ["Which is the highest mountain on Earth?", false], 
  ["Where is Mount Everest located?", false], 
  ["How tall is Mount Everest?", false],
  ["How long is the Great Wall of China?", false], 
  ["Why was the Great Wall of China built?", false], 
  ["How long did it take to build the Great Wall?", false],
  ["How many sides does a triangle have?", false], 
  ["What is the sum of the interior angles of a triangle?", false], 
  ["What are the types of triangles?", false],
  ["What is the largest tropical rainforest in the world?", false], 
  ["Where is the Amazon Rainforest located?", false], 
  ["What kind of biodiversity is found in the Amazon Rainforest?", false],
  ["Who wrote 'Romeo and Juliet'?", false], 
  ["What genre is 'Romeo and Juliet'?", false], 
  ["When was 'Romeo and Juliet' first published?", false],
  ["How many bones are in the human body?", false], 
  ["What is the largest bone in the human body?", false], 
  ["What are bones made of?", false],
  ["What is the speed of light in a vacuum?", false], 
  ["Is light faster in a vacuum or in a medium?", false], 
  ["Can anything travel faster than the speed of light?", false]]];
let correct = [];

let display = q[1][q[1].length-1];
const App = () => {
  const [cardnum, card] = useState(q[1].length);
  
  function shuffleCards() {
    
    q[0].sort(() => Math.random() - 0.5);
    q[1].sort(() => Math.random() - 0.5);
    
  }
  const cardRight = () => {
    if (cardnum > 1) {
      let n = cardnum-1
      card(cardnum - 1);
      display = q[1][n-1];
      document.getElementById("BIG").innerHTML = display[0];
  }
    
  }
  const cardLeft = () => {
    if (cardnum < q[1].length) {
      let n = cardnum+1
      card(cardnum + 1);
      display = q[1][n-1];
      document.getElementById("BIG").innerHTML = display[0];
    }
    

  }
  const cardRes = () => {
    shuffleCards()
    card(q[1].length)
    display = q[1][cardnum-1];
    document.getElementById("BIG").innerHTML =  display[0]
  }
  
  const cardSub = () => {
    let submission = document.getElementById("sub").value;
    if (submission == q[0][cardnum-1][0]){
      if (display[1] != true){
        document.getElementById("info").innerHTML = "CORRECT!"
        if (correct.includes(display[0])){
        } else {
          correct.push(display[0])
          let l = correct.length;
          document.getElementById("third").innerHTML = "Number of cards: "+cardnum+ " Number correct: "+l;
        }
      }
    } else if (display[1] != true) {
      document.getElementById("info").innerHTML = "WRONG!"
    }
  }
  const Flip = () => {
    if (display[1] == true) {
      display = q[1][cardnum-1];
    document.getElementById("BIG").innerHTML =  display[0]
      console.log(display);
    } else {
      display = q[0][cardnum-1];
    document.getElementById("BIG").innerHTML =  display[0]
      console.log(display);
    }
  }
  
  return (
    <div className="App">
      
      <h1 id="title">Science TRIVIA!!</h1>
      <h2 id="info">Answer as many questions correct as you can!</h2>
      <h3 id="third">Number of cards: {cardnum} Number correct: {correct.length}</h3>
      <button id="BIG" onClick={Flip}>{display[0]}</button>
      <p>Guess the answer here:</p>
      
      <input type="text" id="sub" name=""></input>
      <button onClick={cardSub}>Submit Guess</button>
      
      <br></br>
      <button onClick={cardLeft}>left</button>
      <button onClick={cardRight}>right</button>
      <button onClick={cardRes}>Shuffle Cards</button>
    </div>
  )
}

export default App