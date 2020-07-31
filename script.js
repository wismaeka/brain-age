function generateNumber() {
  timer(6)
  let level = document.getElementById("level-player").innerHTML

  level = Number(level) + 2
  let soal = '';
  if (document.getElementsByName("challenges") != null) {
    console.log("Dalem: ", document.getElementsByName("challenges"))
    for (let i = 0; i < level; i++) {
      document.querySelectorAll('.challenges').forEach(e => e.remove());
    }
  }

  let koleksi = []
  for (let i = 0; i < level; i++) {

    let num = Math.random() * 100
    let atribut = document.createAttribute("class");
    atribut.value = "center challenges";


    let h = document.createElement("BUTTON");
    h.style.background = 'white';
    let t = document.createTextNode(Math.ceil(num));
    koleksi.push(Number(t.data))
    h.setAttributeNode(atribut)
    h.addEventListener("click", click);
    function click() {
      let result = document.getElementsByClassName(
        "challenges")[i].innerHTML;
      guessWhat(result, koleksi);
      let parentButID = document.getElementById("question");
      let buttonDisplay = parentButID.getElementsByClassName("challenges")
      buttonDisplay[i].style.color = 'black';
    }
    let parentID = document.getElementById("question");
    h.appendChild(t);
    parentID.appendChild(h)
    soal += document.body.appendChild(parentID);
  }
  return soal
}

function timer(seconds) {

  var countdown = setInterval(function () {
    if (seconds <= 0) {
      seconds = 6
    } else {
      seconds--;
      document.getElementById("time-duration").textContent = seconds;
      if (seconds <= 0) clearInterval(countdown);
      if (seconds === 0) {
        let parentButID = document.getElementById("question");
        let buttonDisplay = parentButID.getElementsByClassName("challenges")
        for (i = 0; i < buttonDisplay.length; i++) {
          buttonDisplay[i].style.color = 'white';
        }
      }
    }
  }, 1000);
}


let penampung = []
let scor = 0
function guessWhat(input, koleksi) {
  input = Number(input)
  let urutKoleksi = koleksi.sort((a, b) => a - b);
  if (input === urutKoleksi[0]) {
    console.log("Benar")
    penampung.push(input)
  }
  if (penampung.length === 0) {
    console.log("salah!")
    alert("Your brain is too old!\n Try Again?")
    location.reload()
  }

  for (let i = 0; i < penampung.length; i++) {
    if (input >= penampung[i]) {
      console.log("Cek input - > benar")
      penampung.pop();
      penampung.push(input);
      scor += 10
      console.log("scor: ", scor)
      let skorUpdate = document.getElementById("score-total");
      skorUpdate.innerHTML = scor
      skorUpdate.style.color = "green"
    } else {
      console.log("salah!")
      alert("Your brain is too old!\n Try Again?")
      location.reload()
    }
  }
  if (scor >= 80) {
    alert("WoW! Your brain is amazing! Keep up!!")
  }
  console.log(penampung)
}