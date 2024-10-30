// index page
const middleNavDiv = document.getElementById("middle-div");
middleNavDiv.addEventListener("focus", () => middleNavDiv.classList.add('border-theme-textblue'), true);
  middleNavDiv.addEventListener("blur", () => middleNavDiv.classList.remove('border-theme-textblue'), true);

// CreateHKahoot page
  const quizButton = document.getElementById("create-quiz-btn");
  const hiddenBlock = quizButton.parentElement.lastElementChild;
const hideQuizBlock = ()=>{
    hiddenBlock.classList.add("hidden");
    hiddenBlock.classList.remove("flex");
}
quizButton.addEventListener("click",(event)=>{
    if(hiddenBlock.classList.contains("hidden")){
    hiddenBlock.classList.remove("hidden");
    hiddenBlock.classList.add("flex");
    }
    else if(hiddenBlock.classList.contains("flex")){
        hideQuizBlock();
    }
})


