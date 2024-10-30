// CreateKahoot Page
const ansContainer= document.getElementById("quiz-ans-options-block");
const ansInputList = ansContainer.querySelectorAll(".ans-by-textarea");
const saveBtn = document.getElementById("save-changes-btn");
const question = document.querySelector(".ques-input");



question.addEventListener("input",()=>{

    const color = saveBtn.dataset.color;
    if(question.value.length > 1){
        saveBtn.classList.remove("cursor-not-allowed")
        saveBtn.classList.add(color);
    }

    else if(question.value.length < 1){
        saveBtn.classList.add("cursor-not-allowed")
        saveBtn.classList.remove(color);
    }

})


const typingFunctionality= (image,checkCircle,event,textarea)=>{
    if(textarea.value.length === 1 && event.key != "Backspace"){
        image.classList.add("hidden");
        checkCircle.classList.remove("hidden");
        checkCircle.classList.add("flex");
    }
    else if(textarea.value.length < 1){
        checkCircle.classList.add("hidden");
        checkCircle.classList.remove("flex");
        image.classList.remove("hidden");    
    }
}

const statusUpdate= (color,circle,statusVari) => {

    if(statusVari===1){
        circle.classList.remove(color,"checked");  
        statusVari=0;
        console.log("unchecked");
    }
    else{
        statusVari=1;
        circle.classList.add(color,"checked");  
        console.log("checked");
    }
return statusVari;
}

ansInputList.forEach((textarea)=>{
    let statusChecked = 0;
    const imgCheckBlock = textarea.nextElementSibling;
    const imgIcon = imgCheckBlock.firstElementChild;
    const checkCircle = imgIcon.nextElementSibling;

textarea.addEventListener("keyup",(event)=>{
typingFunctionality(imgIcon,checkCircle,event,textarea);
})

checkCircle.addEventListener("click",()=>{
    const bgColor = checkCircle.dataset.color; 
statusChecked= statusUpdate(bgColor,checkCircle,statusChecked);
})

})








