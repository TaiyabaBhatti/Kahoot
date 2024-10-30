const participantBlock = document.getElementById("participant-block");
const startBtn = document.getElementById("start-btn");

const enablingStartBtn = () => {
    if(participantBlock.firstElementChild.classList.contains("player-block")){
        startBtn.classList.remove("cursor-not-allowed")
        }

else{
    startBtn.classList.add("cursor-not-allowed")
}
}

const removeContent = () => {
participantBlock.innerHTML="";
}

const addParticipants = (partipantName)=>{
    participantBlock.innerHTML+=
    `
    <div class="player-block bg-dark-purple px-3 rounded-sm py-2">
    <span class="name text-white font-bold text-[1.3rem] tracking-[1.6px] ">${partipantName}</span>
    </div>
    `
const allPlayers = participantBlock.querySelectorAll(".player-block");

enablingStartBtn();
}

const loadinNumberBlock = document.querySelector(".loading-number-block");
const numberMark = loadinNumberBlock.nextElementSibling;
const rotateNumberBlock = (angle,delay,text) =>{
loadinNumberBlock.style.transform = `rotate(${angle}deg)`;
numberMark.innerText = text;
setTimeout(()=>{
    rotateNumberBlock(90,1000,"1");
    },1000)
}

rotateNumberBlock(0,1000,"3")
setTimeout(()=>{
rotateNumberBlock(45,1000,"2");
},1000)

const questionLoadingBar= document.getElementById("loading-bar");

// const startLoading = ()=>{
//     questionLoadingBar.classList.remove("w-10");
//     questionLoadingBar.classList.add("w-full");
// }

// setTimeout(startLoading(),2000);
let loadingProgress = 0;

function updateLoadingBar() {
  loadingProgress += 10;
  questionLoadingBar.style.width = `${loadingProgress}%`;
  
  if (loadingProgress >= 100) {
    return;
  } else {
    // Continue updating loading bar until complete
    setTimeout(updateLoadingBar, 100); // Adjust delay as needed
  }
}

// Start loading process
updateLoadingBar();

