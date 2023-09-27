function getWordsBox() {
  return document.querySelectorAll(".text");
}
const wordsbox = getWordsBox();
let getword = document.getElementById("getvalue");
let timediv = document.getElementById("time");
let inputdiv = document.getElementById("inputdiv");
let main = document.getElementById("main");
let more = document.getElementById("more");
let worddiv = document.getElementById("words");

// array of words
let words = [
  "important",
  "discovery",
  "computer",
  "difficult",
  "mountain",
  "admit",
  "advertise",
  "affect",
  "afford",
  "after",
  "afternoon",
  "close",
  "closes",
  "clothe",
  "club",
  "coffee",
  "cold",
  "colleague",
  "collect",
  "college",
  "colour",
  "come",
  "comment",
  "commit",
  "committee",
  "japan",
      "shinchan",
      "joebiden",
      "alien",
      "doctor",
      "world order",
      "quantium",
      "kasukabe group",
      "suzuki",
      "kazama",
      "ATAshinchi",
      "linux",
      "atakama",
      "accounting",
      "banking",
      "independant",
      "omniverse",
      "mexico",
      "programming",
      "address",
      "common",
      "community",
      "company",
      "compare",
      "complete",
      "compute",
      "concern",
      "condition",
      "confer",
      "consider",
      "consult",
      "contact",
      "continue",
      "contract",
      "control",
      "converse",
      "cook",
      "copy",
      "corner",
      "correct",
      "cost",
      "could",
      "council",
      "again",
      "against",
      "age",
      "agent",
      "ago",
      "agree",
      "air",
      "all",
      "allow",
      "almost",
      "along",
      "already",
      "alright",
      "also",
      "although",
      "always",
      "america",
      "amount",
      "and",
      "another",
      "answer",
      "any",
      "apart",
      "apparent",
      "appear",
      "door",
      "double",
      "doubt",
      "down",
      "draw",
      "dress",
      "drink",
      "drive",
      "drop",
      "dry",
      "due",
      "during",
      "each",
      "early",
      "east",
      "easy",
      "eat",
      "economy",
      "educate",
      "effect",
      "egg",
      "eight",
      "either",
      "elect",
      "electric",
      "eleven",
      "else",
      "free",
      "friday",
      "friend",
      "from",
      "front",
      "full",
      "fun",
      "function",
      "fund",
      "further",
      "future",
      "game",
      "garden",
      "gas",
      "general",
      "germany",
      "get",
      "girl",
      "give",
      "glass",
      "go",
      "god",
      "good",
      "goodbye",
      "govern",
      "grand",
      "grant",
      "great",
      "green",
      "ground",
      "group",
      "grow",
      "guess",
      "guy",
      "hair",
      "half",
      "hall",
      "hand",
      "hang",
      "happen",
      "happy",
      "hard",
      "apply",
      "appoint",
      "approach",
      "appropriate",
      "area",
      "argue",
      "arm",
      "around",
      "arrange",
      "art",
      "indeed",
      "individual",
      "industry",
      "inform",
      "inside",
      "instead",
      "insure",
      "interest",
      "into",
      "introduce",
      "invest",
      "involve",
      "issue",
      "it",
      "item",
      "jesus",
      "job",
      "join",
      "judge",
      "jump",
      "just",
      "keep",
      "key",
      "kid",
      "kill",
      "kind",
      "king",
      "kitchen",
      "knock",
      "know",
      "labour",
      "lad",
      "lady",
      "land",
      "language",
      "large",
      "last",
      "late",
      "laugh",
      "law",
      "lay",
      "lead",
      "learn",
      "leave",
      "morning",
      "most",
      "mother",
      "motion",
      "move",
      "mrs",
      "much",
      "music",
      "must",
      "name",
      "nation",
      "nature",
      "near",
      "necessary",
      "need",
      "never",
      "new",
      "news",
      "next",
      "nice",
      "night",
      "nine",
      "no",
      "left",
      "leg",
      "less",
      "let",
      "letter",
      "level",
      "lie",
      "life",
      "light",
      "like",
      "open",
      "operate",
      "opportunity",
      "oppose",
      "or",
      "order",
      "organize",
      "original",
      "other",
      "otherwise",
      "ought",
      "out",
      "over",
      "own",
      "pack",
      "page",
      "paint",
      "pair",
      "paper",
      "paragraph",
      "pardon",
  "parent",
  "likely",
  "limit",
  "ask",
  "associate",
  "assume",
  "attend",
  "ring",
  "rise",
  "road",
  "role",
  "roll",
  "section",
  "secure",
  "see",
  "seem",
  "self",
  "sell",
  "send",
  "unite",
  "university",
  "unless",
  "until",
  "up",
  "upon",
  "use",
  "usual",
  "value",
  "various",
  "very",
  "video",
  "view",
  "village",
  "visit",
  "vote",
  "wage",
  "wait",
  "walk",
  "wall",
  "worry",
  "worse",
  "worth",
  "would",
  "write",
  "wrong",
  "year",
  "yes",
  "yesterday",
  "yet",
  "you",
  "young",
  "want",
  "war",
  "warm",
  "wash",
  "waste",
  "sense",
  "separate",
  "serious",
  "serve",
  "service",
  "set",
  "settle",
];
//function that change wordsbox innertext from array
// Shuffling function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements 
  }
  return array;
}

let shuffledWords = shuffleArray([...words]);
console.log(shuffledWords)
wordsbox.forEach((wordbox, index) => {
  wordbox.innerText = shuffledWords[index] || "";
});

const wordslist = () => {
  for (let i = 0; i < shuffledWords.length; i++) {
    let shuffledWords = shuffleArray([...words]);
    let ptag = document.createElement("p");
    ptag.classList.add("text", "animate__animated");
    ptag.innerText = shuffledWords[i]; // populate the ptag with shuffled word
    worddiv.appendChild(ptag);
  }
}
wordslist();

let arrowmin = document.getElementById("arrowmin");
let mindiv = document.getElementById("mindiv");
// function for select and typing menu to toggle options
arrowmin.onclick = function () {
  arrowmin.classList.toggle("arrowflip");
  mindiv.classList.toggle("flagactive");
};

//function to change text of select box according to options
let minp = document.querySelectorAll(".minp");
let select = document.getElementById("select");
minp.forEach(function (box) {
  box.addEventListener("click", function () {
    select.innerText = box.innerText;
    mindiv.classList.remove("flagactive");
  });
});

//function for update timer box
let isTimerStarted = false;
let timeLimitInMinutes;
getword.addEventListener("input", function () {
  if (
    getword.value.length == 1 &&
    !isTimerStarted &&
    more.innerText === "TYPING"
  ) {
    isTimerStarted = true;
    switch (select.innerText) {
      case "1 min":
        timeLimitInMinutes = 1;
        break;
      case "2 min":
        timeLimitInMinutes = 2;
        break;
      case "5 min":
        timeLimitInMinutes = 5;
        break;
      default:
        timeLimitInMinutes = 1; // Default to 1 minute if there's any inconsistency.
        break;
    }
    let count = 0;
    let interval = setInterval(function () {
      count++;
      let min = Math.floor(count / 60);
      let sec = Math.floor(count % 60);
      timediv.innerText = `${String(min).padStart(2, "0")}:${String(
        sec).padStart(2, "0")}`;
      if (min >= timeLimitInMinutes) {
        clearInterval(interval);
        getword.disabled = true;
        isTimerStarted = false;
        showPopup();
      }
    }, 1000);
  }
});

//function for more selection menu  for arrow
let arrow = document.getElementById("arrow");
let op = document.getElementById("options");
arrow.onclick = function () {
  arrow.classList.toggle("arrowflip");
  op.classList.toggle("flagactive");
};

let selectoption = document.querySelectorAll(".option");
let maindiv = document.querySelector("main");

//foreach to change menu selection text from options
selectoption.forEach(function (box) {
  box.addEventListener("click", function () {
    more.innerText = box.innerText;
    op.classList.remove("flagactive");
    if (more.innerText === "ADD" || more.innerText === "DELETE") {
      inputdiv.style.background = "rgba(255, 255, 255,0.7)";
      getword.style.color = "black";
      inputdiv.style.outline = "none";
      getword.removeAttribute("placeholder");
    } else if (more.innerText === "EDIT WORD") {
      inputdiv.style.background = "rgba(255, 255, 255,0.7)";
      getword.style.color = "black";
      inputdiv.style.outline = "none";
      getword.setAttribute("placeholder", 'e.g: "japon=japan"');
    } else {
      inputdiv.style.outline = "1px solid white";
      inputdiv.style.background = "";
      getword.removeAttribute("placeholder");
      getword.style.color = "white";
    }
  });
});

// this funtion to update text of wordsbox after delete, add,etc.
function refreshWordsBox() {
  let displayedWords = shuffleArray([...words]);
  worddiv.innerHTML = '';  // Clear current words
  displayedWords.forEach(word => {
    let wordElement = document.createElement("p");
    wordElement.classList.add("text");
    wordElement.innerText = word;
    worddiv.appendChild(wordElement);
  });
  let wordsbox = getWordsBox(); // update the wordsbox reference
}

// to add words
function addWord() {
  let newWord = getword.value.trim();
  if (newWord && !words.includes(newWord)) { // check to prevent duplicate entries
    words.push(newWord);
    refreshWordsBox();
  }
}
// to delete words
function deleteWord() {
  let wordToDelete = getword.value.trim();
  let index = words.indexOf(wordToDelete);
  if (index !== -1) {
    words.splice(index, 1);
    refreshWordsBox();
  }
}
// to edit words
function editWord() {
  let [oldWord, newWord] = getword.value.split("=");
  let index = words.indexOf(oldWord.trim());
  if (index !== -1 && newWord) {
    words[index] = newWord.trim();
    refreshWordsBox();
  }
}
// convert to uppercase
function toUppercase() {
  words = words.map(word => word.toUpperCase());
  refreshWordsBox();
}
//convert to lowercase
function toLowercase() {
  words = words.map(word => word.toLowerCase());
  refreshWordsBox();
}

// this addeventlistner trigger when [enter] key of keybord
getword.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    switch (more.innerText) {
      case "ADD":
        addWord();
        break;
      case "DELETE":
        deleteWord();
        break;
      case "EDIT WORD":
        editWord();
        break;
      case "UPPER CASE":
        toUppercase();
        break;
      case "LOWER CASE":
        toLowercase();
        break;
      case "TYPING":
        match();
        break;
      default:
        match();
        break;
    }
  }
});
// this match function for matching input words to array
let currentindex = 0;
function match() {
  totalTypedWords += getword.value.length
  const wordsbox = document.querySelectorAll(".text");

  let currentWordBox = wordsbox[currentindex];
  if (!currentWordBox) return;  // if there's no wordbox to compare to, exit the function

  let currentWord = currentWordBox.innerText.trim();
  if (getword.value.trim() === currentWord) {
    correctTypedWords += currentWord.length;
    currentWordBox.style.transform = "scale(1)";
    currentWordBox.style.background = "skyblue";
    currentWordBox.style.color = "black";
    currentindex++;
    getword.value = "";

    if (currentindex < words.length) {
      let nextWordBox = wordsbox[currentindex];
      if (nextWordBox) {
        nextWordBox.style.transform = "scale(1.2)";
      }
    }
  } else if (currentWord.startsWith(getword.value)) {
    currentWordBox.style.transform = "scale(1.2)";
    currentWordBox.style.background = ""; // Reset the background
  } else {
    currentWordBox.style.background = "rgb(248, 62, 62)";

    let error = document.createElement("audio");
    error.setAttribute("autoplay", "true");
    currentWordBox.appendChild(error);
    error.src = "audio/mixkit-electric-fence-fx-2968.wav";
  }
}

//function for popup after time up
let totalTypedWords = 0;
let correctTypedWords = 0;
function showPopup() {
  let ttw = totalTypedWords / 5;
  let wpm = correctTypedWords / 5; // since we're counting for 1 minute
  let accuracy = (wpm / ttw) * 100;
  let popupHTML = `
      <p>Words Per Minute: ${wpm}</p>
      <p>Accuracy: ${accuracy.toFixed(2)}%</p>
      <img id="gif" src="" alt="">
      <button onclick="closePopup()">Close</button>`;
  let popupDiv = document.createElement("div");
  popupDiv.id = "popup";
  popupDiv.classList.add("animate__animated");
  popupDiv.classList.add("animate__wobble");
  popupDiv.innerHTML = popupHTML;
  main.appendChild(popupDiv);
  let gif = document.getElementById("gif");

  switch (true) {
    case wpm < 10:
      gif.src = "vid/shinchan.gif";
      break;
    case wpm >= 10 && wpm < 20:
      gif.src = "vid/200yw.webp";
      gif.style.width = "40%";
      break;
    case wpm >= 20 && wpm < 30:
      gif.src = "vid/smile.gif";
      break;

    case wpm >= 30 && wpm < 40:
      gif.src = "vid/crayon-shin-chan-peace-sign.gif";
      gif.style.width = "40%";
      break;
    case wpm >= 40 && wpm < 50:
      gif.src = "vid/crayon-shin-chan-crayon-shin-chan-dance.gif";
      break;
    case wpm >= 50 && wpm < 60:
      gif.src = "vid/crayon-shinchan.gif";
      break;
    case wpm >= 60 && wpm < 70:
      gif.src = "vid/daiku7-daiku7meme.gif";
      gif.style.marginBottom = "2%";
      break;
    default:
      gif.src = "vid/200w.webp";
      gif.style.width = "40%";
      break;
  }
}

//fundion colsepopup to close popup function
function closePopup() {
  let popup = document.getElementById("popup");
  if (popup) {
    main.removeChild(popup);
    location.reload();
    getword.value = "";
  }
}
