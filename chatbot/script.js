const startBtn = document.querySelector("#start-btn");
const diagnosis = document.querySelector("#diagnosis");
//Symptoms here

let my_speech = document.querySelector("#my_speech");

typhoid = ["fever", "headache", "diarrhoea"];
maleria = ["fever", "shivering", "headache", "vomiting", "muscle"];
chickenpox = ["fever", "appetite", "headache", "tiredness"];
common_cold = ["sore", "cough", "congestion", "sneezing"];
dengue = ["muscle", "headache", "nausea", "vomiting", "rash", "fever"];

const recognition = new webkitSpeechRecognition();
recognition.continous = true;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

startBtn.addEventListener("click", () => {
  recognition.start();
});

recognition.onresult = (e) => {
  let transcript = e.results[e.results.length - 1][0].transcript.trim();
  //   console.log(transcript);
  const myArr = transcript.split(" ");
  console.log(myArr);

  let cnt = 0;
  let cnt2 = 0;
  let cnt3 = 0;
  let cnt4 = 0;
  let cnt5 = 0;
  myArr.forEach((e1) => {
    typhoid.forEach((element) => {
      if (e1 === element) cnt++;
    });
  });

  if (cnt === typhoid.length) diagnosis.innerHTML = "You might have Typhoid";
  else {
    myArr.forEach((e1) => {
      maleria.forEach((element) => {
        if (e1 === element) {
          cnt2++;
        }
      });
    });
  }

  if (cnt2 === maleria.length) diagnosis.innerHTML = "You might have maleria";
  else {
    myArr.forEach((e1) => {
      chickenpox.forEach((element) => {
        if (e1 === element) {
          cnt3++;
        }
      });
    });
  }

  if (cnt3 === chickenpox.length) diagnosis.innerHTML = "You might have chikenpox";
  else {
    myArr.forEach((e1) => {
      common_cold.forEach((element) => {
        if (e1 === element) {
          cnt4++;
        }
      });
    });
  }

  if (cnt4 === common_cold.length) diagnosis.innerHTML = "You might have common cold";
  else {
    myArr.forEach((e1) => {
      dengue.forEach((element) => {
        if (e1 === element) {
          cnt5++;
        }
      });
    });
  }

  if (cnt5 === dengue.length) diagnosis.innerHTML = "You might have Dengue";
//   else{
//     diagnosis.innerHTML = "Sorry No Diagnosis found"
//   }
  my_speech.innerHTML = transcript;
};
